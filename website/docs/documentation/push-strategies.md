---
 title: Push Srrategies
slug: /push-strategies
---

🚀 Push Strategies & Considerations

When the repository is connected to a Docusaurus engine and GitHub Actions,
"just pushing" becomes a deployment event. Here is what should be considered.

1. The "Direct Push to Main" Model

    Best for: Rapid solo development, experimental phases.

    Pro: Zero friction. The site is immediately updated on `git push`.

    Con: The "Broken Site" Risk. If there's a typo in docusaurus.config.js or
         a broken link in /Documentation, the live site goes down (or fails to build)
         immediately.

    Con: The "Commit Noise" Problem. Automated Changelog actions will include every
         "typo fix" and "wip" commit, making the project history look messy to
         external users.

    Essential Safety: commit messages for minor edits [skip ci] must be used
    to prevent burning GitHub Action minutes on every small tweak.

2. The "Feature Branch" Model

    Best for: Major updates (e.g., migrating to TYPO3 v14 or redesigning the Docusaurus theme).

    How it works: Updates are pushed on a branch like feature/new-docs.

    The Benefit: As many "ugly" commits as desired can be pushed without triggering
    the main build or cluttering the Changelog.

    The "Squash" Power: When it's merged into main, it can be Squashed and Mergeed.
    This turns 10 messy "wip" commits into one clean, professional line in the Changelog.

3. The "Tags Only" Release Strategy

    Releases are only created when tags are pushed.

    Main Branch:
    Acts as the "Beta" or "Staging" area. Every push updates the live website (GitHub Pages),
    so the website can be verified concerning look and functionality.

    Git Tags:
    Act as the "Official Release." Only when a tag (v1.0.0) is pushed the ZIP is created
    and the Badge update.
    Consideration: Ensure that deploy.yml distinguishes clearly between a branch push
    (site update) and a tag push (asset packaging).

4. Special Consideration: The "Auto-Changelog Loop"

    When actions write back to the repository (i.e. updating the Changelog.md),
    that's technically performing a "Push from within a Push."

    The Risk: If the Action pushes to main, it triggers the Action again.
    The Fix: The script must use a specific Git user (like github-actions[bot]) and
    include [skip ci] in the message. GitHub is smart enough to not trigger actions
    from its own bots, but the [skip ci] is a secondary fail-safe.

---
