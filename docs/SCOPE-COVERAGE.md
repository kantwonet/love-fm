# Love.fm — Public product-scope coverage

[← Overview](../README.md) · [Feature guide](FEATURES.md) · [Roadmap](ROADMAP.md)

**Editorial coverage snapshot: 13 October 2026 · Product Blueprint revision 2.8.**
This index makes major app areas easy to find and prevents them from disappearing into generic descriptions. It maps public summaries to product requirement families; it is **not** a declaration that every requirement is implemented, tested, or reproduced line by line. The private specification remains authoritative.

## Core integrations are main features

| Topic | Prominent public location | Blueprint basis |
|---|---|---|
| Automatic scrobbling | [Dedicated entry](FEATURES.md#scrobbling); homepage core-feature card and listening section | HIST-005–009; IMPORT-003–005; LIB-014 |
| Background scrobbling and listening | [Background operation](FEATURES.md#background-scrobbling); homepage dedicated panel | DESKTOP-001; IMPORT-003,009–015; PRIVATE-001–004 |
| History importing | [Imports](FEATURES.md#imports); dedicated homepage card/panel | HIST-001–011; IMPORT-001–015 |
| Manual scrobbling | [Manual scrobbler](FEATURES.md#manual-scrobbler); scrobbling panel | IMPORT-005,012–014 |
| Discord music presence | [Discord](FEATURES.md#discord); dedicated homepage card/panel | DISCORD-001–003; PRIVATE-001–004 |
| Browser companion | [Browser](FEATURES.md#browser-companion); dedicated homepage card/panel | BROWSER-001–003; PLAY-010; HIST-004,006–007 |

## Major feature areas

The existing 16 areas and all 111 feature-summary identities are retained. More prominent placement does not create additional completion credit.

| Public area | Requirement-family references in the public guide |
|---|---|
| [Library & Source Switching](FEATURES.md#library) | LIB-001–052 · IDENT-001–009 |
| [Local Music & Organization](FEATURES.md#local) | LOCAL-001–008 · LIB-007,013,031–039,043,046 |
| [Playback & Queue](FEATURES.md#playback) | PLAY-001–011 · QUEUE-001–014 · PLAYER-001,004,013–015 |
| [Tracking, History & Scrobbling](FEATURES.md#history) | HIST-001–011 · IMPORT-001–015 · USAGE-001–006 |
| [Heartbeat & Personal Insights](FEATURES.md#heartbeat) | HEART-001–005 · HIST-010–011 · IDENT-004–007 |
| [Discover, Rediscover & Music World](FEATURES.md#discovery) | DISC-001–013 · WORLD-001–004 |
| [Search & Navigation](FEATURES.md#search) | SEARCH-001–008 · SHELL-001–008 · HOME-001–006 · ONBOARD-001 · NOTIFY-001–003 · ACTIVITY-001–002 |
| [Copy, Sync & Save To Source](FEATURES.md#transfers) | XFER-001–022 · SAVE-001–005 |
| [Deduplicated Playlist Merge](FEATURES.md#merge) | MERGE-001–008 · IDENT-009 · LIB-044,048 |
| [Pulse • Shared Listening](FEATURES.md#pulse) | PULSE-001–022 |
| [Social & Profiles](FEATURES.md#social) | SOCIAL-001–016 · ACCOUNT-002–013 |
| [Lyrics & Audio Exploration](FEATURES.md#lyrics) | LYRICS-001–004 · PLAYER-002–017 |
| [Windows, Browser & Discord](FEATURES.md#desktop) | DESKTOP-001–007 · DISCORD-001–003 · BROWSER-001–003 · PLAYER-014 |
| [Privacy, Accounts & Cloud](FEATURES.md#privacy) | ACCOUNT-001–013 · PRIVATE-001–004 · PRIVACY-001–009 · USAGE-004–006 |
| [Appearance, Accessibility & Performance](FEATURES.md#design) | VISUAL-001–005 · ACCESS-001 · PERF-001–004 |
| [Recovery, Support & Delivery](FEATURES.md#recovery) | DESKTOP-005–006 · RELEASE-001–014 · SUPPORT-001–005 · OWNER-001–003 · CAPACITY-001–003 |

## Release boundaries stay visible

The [roadmap](ROADMAP.md) retains intended first-release scope, Preferred capabilities requiring an include/defer decision, later work and ideas. In particular, Music World, selected cloud sync, personal usage counters, extra graphs, adaptive tips, validated tag writes, crossfade and taskbar artwork remain Preferred. Two-way Mirror, live Merge, cloud-run work, Listen Along, persistent collaborative playlists and additional platforms remain later work; voice remains an idea.

The [progress record](PROGRESS.md) separately describes reported accepted internal milestones. No provider affiliation, subscription entitlement, all-browser support, powered-off background execution, universal rollback, sample-perfect Pulse synchronization, release date or finished-app percentage is implied.

## Future updates

Before publishing a new product announcement, identify its existing area, requirement references and scope tier. Add or revise the matching summary and homepage emphasis where appropriate; do not remove an approved feature merely to shorten the landing page. Record real scope changes explicitly. Product publication does not alter application acceptance or private development work.

Private source, credentials, personal music/history, machine paths and internal operating records remain intentionally excluded from the public repository. “Full product scope” is not permission to publish private project material.
