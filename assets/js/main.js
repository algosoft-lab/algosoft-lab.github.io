/* AlgoSoft 官网脚本：中英切换、导航滚动态、入场动画 */
(function () {
  "use strict";

  /* ---------- i18n 文案表 ---------- */
  var I18N = {
    zh: {
      "doc.title": "AlgoSoft — 为开发者打造的工具家族",
      "doc.desc":
        "Products by AlgoSoft: AlgoCOM, AlgoTerm, AlgoGit, AlgoPDF, AlgoCode and AlgoClass — a family of algorithm-grade tools for developers.",
      "nav.products": "产品",
      "nav.brand": "关于",
      "nav.cta": "开始探索",
      "hero.title1": "为开发者打造的",
      "hero.title2": "算法级工具家族",
      "hero.subtitle":
        "六款精心打磨的工具，覆盖串口通信、终端、版本控制、文档处理、代码编辑与编程教学。",
      "hero.cta1": "浏览产品",
      "hero.cta2": "了解 AlgoSoft",
      "products.kicker": "产品矩阵",
      "products.title": "六款工具，一个家族",
      "products.subtitle": "每一款都围绕真实开发场景反复打磨，轻量、快速、可靠。",
      "product.com.tagline": "串口通信与调试工具，让每一次收发都清晰可控。",
      "product.com.f1": "多串口实时监视与数据收发",
      "product.com.f2": "十六进制 / 文本双视图，时间戳完整记录",
      "product.com.f3": "常用波特率一键切换，脚本化自动应答",
      "product.com.tag": "串口调试",
      "product.term.tagline": "现代化终端模拟器，快得像本地 Shell 一样自然。",
      "product.term.f1": "GPU 加速渲染，流畅滚动不掉帧",
      "product.term.f2": "SSH / 串口 / 本地多会话，标签页自由分组",
      "product.term.f3": "分屏、主题、字体一键定制，配置随账号同步",
      "product.term.tag": "终端模拟",
      "product.git.tagline": "所见即所得的 Git 客户端，版本历史一目了然。",
      "product.git.f1": "分支图谱可视化，提交记录随意检视",
      "product.git.f2": "暂存、比对、解决冲突，全部图形化操作",
      "product.git.f3": "内置常用工作流，rebase / cherry-pick 不再高危",
      "product.git.tag": "版本控制",
      "product.pdf.tagline": "顺手的 PDF 工具箱，常见操作一步到位。",
      "product.pdf.f1": "合并、拆分、旋转、提取页面",
      "product.pdf.f2": "PDF 与 Office / 图片互转，保真排版",
      "product.pdf.f3": "本地处理，文件不出设备，隐私零顾虑",
      "product.pdf.tag": "文档处理",
      "product.code.tagline": "轻量强悍的代码编辑器，为算法与日常开发而生。",
      "product.code.f1": "秒级启动，大文件照样丝滑",
      "product.code.f2": "多语言语法高亮与智能补全",
      "product.code.f3": "内置算法题调试环境，即写即跑",
      "product.code.tag": "代码编辑",
      "product.class.tagline": "编程教学课堂平台，让教与学实时联动。",
      "product.class.f1": "教师一键下发习题，学生进度实时可见",
      "product.class.f2": "在线代码运行与自动判题，即时反馈",
      "product.class.f3": "课堂数据统计，薄弱知识点一屏掌握",
      "product.class.tag": "编程教学",
      "brand.kicker": "关于我们",
      "brand.title": "Algo，取自 Algorithm",
      "brand.desc":
        "AlgoSoft 是一个独立的开发者工具品牌：小而精，慢而稳，每一款产品都先说服自己，再交到你手上。",
      "brand.v1.title": "极致性能",
      "brand.v1.desc": "启动快、响应快、占用低。性能不是卖点，是底线。",
      "brand.v2.title": "隐私优先",
      "brand.v2.desc": "能本地完成的处理绝不联网，你的数据只属于你。",
      "brand.v3.title": "长期主义",
      "brand.v3.desc": "不追热点，不做订阅绑架，把每款工具长期打磨下去。",
      "cta.title": "准备好试试了吗？",
      "cta.desc": "访问对应产品页面，或通过邮件与我们联系。",
      "cta.btn": "联系我们",
      "footer.tagline": "为开发者打造的算法级工具家族"
    },
    en: {
      "doc.title": "AlgoSoft — A family of tools built for developers",
      "doc.desc":
        "Products by AlgoSoft: AlgoCOM, AlgoTerm, AlgoGit, AlgoPDF, AlgoCode and AlgoClass — a family of algorithm-grade tools for developers.",
      "nav.products": "Products",
      "nav.brand": "About",
      "nav.cta": "Get Started",
      "hero.title1": "A family of tools",
      "hero.title2": "built for developers",
      "hero.subtitle":
        "Six carefully crafted tools covering serial communication, terminal, version control, documents, code editing and coding education.",
      "hero.cta1": "Explore Products",
      "hero.cta2": "About AlgoSoft",
      "products.kicker": "Product Matrix",
      "products.title": "Six tools, one family",
      "products.subtitle":
        "Every product is iterated around real development workflows — lightweight, fast and reliable.",
      "product.com.tagline": "Serial communication and debugging, with every byte under control.",
      "product.com.f1": "Real-time monitoring and transceiving on multiple ports",
      "product.com.f2": "Hex / text dual view with full timestamps",
      "product.com.f3": "One-click baud rates and scripted auto-response",
      "product.com.tag": "Serial Port",
      "product.term.tagline": "A modern terminal emulator that feels as fast as a local shell.",
      "product.term.f1": "GPU-accelerated rendering, smooth scrolling",
      "product.term.f2": "SSH / serial / local sessions with flexible tab groups",
      "product.term.f3": "Split panes, themes and fonts, synced across devices",
      "product.term.tag": "Terminal",
      "product.git.tagline": "A visual Git client where history is crystal clear.",
      "product.git.f1": "Visual branch graph, inspect any commit",
      "product.git.f2": "Staging, diffing and conflict resolution, all graphical",
      "product.git.f3": "Guided workflows make rebase / cherry-pick safe",
      "product.git.tag": "Version Control",
      "product.pdf.tagline": "A handy PDF toolbox — common tasks done in one step.",
      "product.pdf.f1": "Merge, split, rotate and extract pages",
      "product.pdf.f2": "Convert between PDF and Office / images faithfully",
      "product.pdf.f3": "Processed locally — your files never leave the device",
      "product.pdf.tag": "Documents",
      "product.code.tagline": "A lightweight yet powerful code editor for algorithms and daily work.",
      "product.code.f1": "Launches in seconds, stays smooth on huge files",
      "product.code.f2": "Syntax highlighting and smart completion for many languages",
      "product.code.f3": "Built-in debugging environment for algorithm problems",
      "product.code.tag": "Code Editor",
      "product.class.tagline": "A coding-classroom platform connecting teaching and learning in real time.",
      "product.class.f1": "Teachers assign exercises and watch live progress",
      "product.class.f2": "In-browser code execution with auto-judging feedback",
      "product.class.f3": "Classroom analytics reveal weak spots at a glance",
      "product.class.tag": "Education",
      "brand.kicker": "About Us",
      "brand.title": "Algo, as in Algorithm",
      "brand.desc":
        "AlgoSoft is an independent developer-tools brand: small but focused, steady and patient. Every product must convince us first, before it reaches your hands.",
      "brand.v1.title": "Performance First",
      "brand.v1.desc": "Fast to launch, fast to respond, light on resources. Performance is the baseline, not a feature.",
      "brand.v2.title": "Privacy by Default",
      "brand.v2.desc": "Whatever can be done locally stays local. Your data belongs to you.",
      "brand.v3.title": "In It for the Long Run",
      "brand.v3.desc": "No hype-chasing, no subscription traps — just tools polished for years.",
      "cta.title": "Ready to give them a try?",
      "cta.desc": "Visit the product pages, or reach out by email.",
      "cta.btn": "Contact Us",
      "footer.tagline": "A family of algorithm-grade tools for developers"
    }
  };

  /* ---------- 语言切换 ---------- */
  var STORAGE_KEY = "algosoft-lang";
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var metaDesc = document.querySelector('meta[name="description"]');
  var htmlEl = document.documentElement;
  var toggleBtn = document.getElementById("lang-toggle");

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.zh;
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.title = dict["doc.title"];
    if (metaDesc) metaDesc.setAttribute("content", dict["doc.desc"]);
    htmlEl.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    if (toggleBtn) toggleBtn.textContent = lang === "zh" ? "EN" : "中文";
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  applyLang(saved === "en" ? "en" : "zh");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var current = htmlEl.getAttribute("lang") === "zh-CN" ? "zh" : "en";
      applyLang(current === "zh" ? "en" : "zh");
    });
  }

  /* ---------- 导航滚动态 ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 入场动画 ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }
})();
