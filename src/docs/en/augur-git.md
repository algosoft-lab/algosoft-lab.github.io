---
title: Augur Git Documentation
description: Augur Git is a cross-platform desktop Git GUI client built with Rust and GPUI, with repository status, history, branches, diffs and revision comparison.
product: Augur Git
---

# Augur Git Documentation

Augur Git is a cross-platform desktop Git GUI client for developers. It opens local Git repositories and presents repository status, branches, commit history, a commit graph and diffs. User-requested operations such as fetch, pull, push, checkout and commit are executed through the system Git executable.

Augur Git does not embed a Git implementation. Git must be installed on the system, and the `git` executable must be available on `PATH` for repository operations.

## Feature overview

- **Repository status**: See the current branch, ahead / behind counts, and staged or unstaged file changes.
- **Working-tree actions**: Inspect per-file diffs for staged, unstaged and untracked files; stage or unstage files and groups; discard changes after confirmation.
- **Commit graph**: Browse lane-based history and inspect commit hashes, messages, authors, relative dates and file diffs.
- **Branches and refs**: Browse local branches, remotes, remote-tracking branches, tags and stashes from the sidebar.
- **Remote operations**: Run Fetch, Pull (Merge or Rebase), Push and Force Push from the toolbar.
- **Revision comparison**: Compare two branches, remote branches, tags or commit SHAs in a read-only workspace without checking out a revision.
- **Multiple repository tabs**: Open several repositories at once; recent repositories are remembered.
- **Themes and languages**: Use GitHub Dark or Catppuccin themes, with English and Simplified Chinese UI translations.

## Download and run

Nightly builds are available from [Augur Git GitHub Releases](https://github.com/algosoft-lab/augur-git/releases/tag/nightly). Choose the artifact for your operating system; filenames on the Nightly release may change between builds.

Before launching, make sure that:

1. Git is installed on the system.
2. `git --version` succeeds in a terminal.
3. You have a local Git repository ready to open.

## Open a repository

On the welcome page, choose **Open** and select a Git repository folder. You can also drop a repository folder onto the welcome page.

The top tab bar identifies the active repository. Use **New Tab** to open another repository. Recently opened repositories appear in the recent-repositories list on the welcome page.

## Review and commit working-tree changes

The **Staged** and **Changes** sidebar sections represent the index and working-tree changes:

1. Select a file under **Changes** to inspect its unstaged diff.
2. Use **Stage Changes** on a file or group to add changes to the index.
3. Review the files and diffs under **Staged**.
4. Enter a commit message and click **Commit**.

Use **Unstage Changes** to move staged files back to the working tree. **Discard Changes** always asks for confirmation. Discarding an untracked file permanently deletes the explicitly confirmed file and cannot be undone.

## History and diffs

The commit graph shows repository history. Select a commit to inspect its file list, addition / deletion counts and per-file diffs. Full commit messages expose the author, date and co-author trailers.

The bottom diff panel can show all changed files or a selected file. For merge commits, the default comparison is against the first parent.

## Branches, remotes and tags

The sidebar lists local branches, remote branches, tags and stashes. Select a branch to inspect it, then use its context menu for checkout, rename, delete or merge operations.

Common remote operations in the toolbar are:

- **Fetch**: Retrieve remote updates without changing the working tree.
- **Pull (Merge)**: Fetch updates and merge them into the current branch.
- **Pull (Rebase)**: Fetch updates and rebase the current branch on top of them.
- **Push**: Push the current branch to its tracked upstream branch.
- **Push (Force)**: Force-push the branch. This can overwrite remote history, so verify the remote state before using it.

Branch creation, merge, rebase, stash and tag actions use dialogs to confirm the target. Rebasing rewrites commit history and is not recommended for already-shared branches.

## Compare two revisions

Click **Compare** in the toolbar to open the read-only revision comparison window. Choose **Base** and **Target**, then click **Compare**:

- Choose local branches, remote-tracking branches, tags or commits from the loaded history.
- Enable **Manual input** to enter a branch, tag or 7–64 character hexadecimal commit SHA.
- The direction is `Base commit → Target commit`; swapping the endpoints reverses additions and deletions.
- Comparison does not checkout, fetch or modify `HEAD`, the index or the working tree.
- Select all changed files or an individual file to inspect its diff.

## Settings and themes

Open **Settings** to configure:

- UI language: English or Simplified Chinese.
- Theme: GitHub Dark and Catppuccin Latte, Frappé, Macchiato and Mocha.
- Diff layout: inline or side-by-side rendering, subject to window width.
- Commit-history loading size, UI font and monospace font.
- Whether to refresh automatically when the window regains focus.

Settings are persisted, and the language and theme can be changed at runtime.

## Configuration, data and logs

Application settings and the recent-repository list are stored in `augur-git/config.json` under the platform's standard user config directory. Window geometry and global panel layout are stored in `augur-git/ui-state.json` alongside it.

Debug builds append logs to `debug.log` in the working directory. Release builds do not write a log file by default. Set `RUST_LOG` when more detailed logging is needed.

## Supported platforms

Augur Git currently supports:

- Windows
- macOS
- Linux (X11 and Wayland)

## Build from source

Clone the [Augur Git repository](https://github.com/algosoft-lab/augur-git), install a stable Rust toolchain, and make sure system Git is available:

```bash
cargo run --release
```

Instructions for native release packages and platform installers are in the repository's `packaging/README.md`.

## Troubleshooting

### Why can Augur Git not open or refresh a repository?

Run `git --version` in a terminal and confirm that Git is installed and available on `PATH`. Then verify that the selected folder is a Git repository and that the current user has the required read and write permissions.

### Can discarded changes be recovered?

No. Discarding a tracked-file modification removes the working-tree content, and confirming deletion of an untracked file permanently removes it. Review the file list and scope before confirming.

### Does revision comparison switch branches?

No. Revision comparison reads existing objects and refs in the repository; it does not checkout a revision or perform an implicit fetch.
