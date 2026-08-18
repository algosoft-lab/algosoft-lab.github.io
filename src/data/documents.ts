import MarkdownIt, { type MarkdownIt as MarkdownItInstance } from 'markdown-it';
import type { RendererRule } from 'markdown-it';
import hljs from 'highlight.js/lib/common';
import { parse as parseYaml } from 'yaml';

import type {
  DocumentFrontmatter,
  DocumentTocItem,
  SiteDocument,
} from '@/types/documents';
import type { Locale } from '@/types/content';

interface MarkdownEnvironment {
  [key: string | symbol]: unknown;
  headingCounts: Map<string, number>;
  toc: DocumentTocItem[];
}

const markdownFiles = import.meta.glob<string>('/src/docs/**/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});

export interface SiteDocumentLink {
  slug: string;
  product: string;
  title: string;
}

const documentCatalog: Record<Locale, readonly SiteDocumentLink[]> = {
  'zh-CN': [
    {
      slug: 'algocode',
      product: 'AlgoCode',
      title: 'AlgoCode 使用文档',
    },
    {
      slug: 'augur-term',
      product: 'Augur Term',
      title: 'Augur Term 使用文档',
    },
  ],
  en: [
    {
      slug: 'algocode',
      product: 'AlgoCode',
      title: 'AlgoCode Documentation',
    },
    {
      slug: 'augur-term',
      product: 'Augur Term',
      title: 'Augur Term Documentation',
    },
  ],
};

export function getSiteDocumentLinks(
  locale: Locale,
): readonly SiteDocumentLink[] {
  return documentCatalog[locale];
}

function slugifyHeading(title: string): string {
  const slug = title
    .trim()
    .toLocaleLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '');

  return slug || 'section';
}

function getUniqueHeadingId(
  title: string,
  counts: Map<string, number>,
): string {
  const base = slugifyHeading(title);
  const count = counts.get(base) ?? 0;
  counts.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

function escapeCodeHtml(code: string): string {
  return code.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        "'": '&#39;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
      })[character] ?? character,
  );
}

function createMarkdownRenderer(): MarkdownItInstance {
  const markdown = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
    highlight(code: string, language: string): string {
      const languageName = language.trim().split(/\s+/, 1)[0] ?? '';

      if (languageName && hljs.getLanguage(languageName)) {
        return hljs.highlight(code, { language: languageName }).value;
      }

      return escapeCodeHtml(code);
    },
  });

  const defaultFence: RendererRule | undefined = markdown.renderer.rules.fence;
  const mermaidFence: RendererRule = (tokens, index, options, env, self) => {
    const token = tokens[index];

    if (!token) return '';

    const languageName = token.info.trim().split(/\s+/, 1)[0] ?? '';

    if (languageName.toLowerCase() === 'mermaid') {
      return `<div class="docs-mermaid mermaid" data-mermaid>${escapeCodeHtml(token.content)}</div>`;
    }

    return defaultFence
      ? defaultFence(tokens, index, options, env, self)
      : self.renderToken(tokens, index, options);
  };
  markdown.renderer.rules.fence = mermaidFence;

  const headingRenderer: RendererRule = (tokens, index, options, env, self) => {
    const token = tokens[index];
    if (!token) return '';

    const title = tokens[index + 1]?.content ?? '';
    const documentEnvironment = env as unknown as MarkdownEnvironment;
    const id = getUniqueHeadingId(title, documentEnvironment.headingCounts);
    const level = Number(token.tag.slice(1));

    token.attrSet('id', id);
    documentEnvironment.toc.push({ id, level, title });

    return self.renderToken(tokens, index, options);
  };
  markdown.renderer.rules.heading_open = headingRenderer;

  return markdown;
}

const markdown = createMarkdownRenderer();

function parseFrontmatter(data: Record<string, unknown>): DocumentFrontmatter {
  const title = typeof data.title === 'string' ? data.title : '';
  const description =
    typeof data.description === 'string' ? data.description : '';
  const product = typeof data.product === 'string' ? data.product : '';

  if (!title || !description || !product) {
    throw new Error(
      'Document frontmatter requires title, description, and product',
    );
  }

  return { title, description, product };
}

function parseMarkdownSource(source: string): {
  content: string;
  data: Record<string, unknown>;
} {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) return { content: source, data: {} };

  const frontmatter = parseYaml(match[1] ?? '');

  return {
    content: match[2] ?? '',
    data:
      frontmatter && typeof frontmatter === 'object'
        ? (frontmatter as Record<string, unknown>)
        : {},
  };
}

export function getSiteDocument(locale: Locale, slug: string): SiteDocument {
  const sourcePath = `/src/docs/${locale}/${slug}.md`;
  const source = markdownFiles[sourcePath];

  if (!source) {
    throw new Error(`Document not found: ${sourcePath}`);
  }

  const parsed = parseMarkdownSource(source);
  const env: MarkdownEnvironment = {
    headingCounts: new Map(),
    toc: [],
  };

  return {
    locale,
    slug,
    frontmatter: parseFrontmatter(parsed.data),
    html: markdown.render(parsed.content, env),
    toc: env.toc,
  };
}
