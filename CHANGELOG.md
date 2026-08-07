# Changelog

## [Unreleased]
### Performance Fixes (Issues 2B - 2E)

- **[Issue 2A]** Converted `team-collaboration.jpg` to WebP (desktop and 600px mobile variant) to eliminate the largest LCP bottleneck, and updated `<picture>` attributes in `index.html` to exact intrinsic dimensions (1376x768 and 600x335) to prevent layout shifts. Purged 4.5MB of orphaned legacy images.

#### `index.html`
- **[Issue 2B]** Injected `min-height: 114px;` into `.hero-header-buttons` at the 900px breakpoint to prevent the button stack from causing a layout shift.
- **[Issue 2C]** [REVERTED / INCOMPLETE] Attempted to extract critical media queries into `<head>` to prevent FOUC, but this introduced a fatal CSS cascade-order bug (mobile layouts completely shattered). **Root Cause:** Splitting media query overrides into the inline `<style>` while leaving their base desktop styles in `style-deferred.css` inverted the cascade. Because `style-deferred.css` loads asynchronously, it is applied last, causing its desktop base styles to overwrite the mobile media queries. **Rule for next time:** Any selector with both a base rule and a media-query override must be extracted together into the same file, never split across critical/deferred CSS.
- **[Issue 2D]** Added new `::before` pseudo-elements to `.flywheel-center` and `.orbit-center`, animating their `opacity` and `transform` properties to replace the expensive `box-shadow` animations, all without altering the HTML structure.
- **[Issue 2E]** [REVERTED / INCOMPLETE] CSS minification and media query stripping reverted along with 2C to restore stability.

#### Infrastructure
- **`fix_live.ps1` (and debug scripts)**: Created and maintained to orchestrate a deterministic extraction, injection, purging, and regex-safe minification pipeline.
- **`style.css`**: Left fully intact and unminified as our structural source of truth.

#### Infrastructure
- **[Issue 2F]** Localized 11 third-party SVGs from skillicons.dev into /images/tech-icons/. Updated main.js to reference local assets and added a _headers file to enforce immutable Cache-Control, eliminating third-party network blocking and guaranteeing instant cache hits.

