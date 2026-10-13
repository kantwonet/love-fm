<div align="center">

# love.fm

### Your music. Your history. One home.

**A Windows-first music project with a bigger idea of what a music app can be.**

Public development notes · Private application source · In development

[The vision](docs/VISION.md) · [Progress](docs/PROGRESS.md) · [Roadmap](docs/ROADMAP.md) · [Engineering](docs/ENGINEERING.md) · [FAQ](docs/FAQ.md)

</div>

---

## More than a play button

Music does not live in just one place. Neither do the things that make it yours: the albums you keep, the playlists you build, the songs you return to and the history of how you listened.

**Love.fm is being developed as a free, ad-free desktop home for that whole music life.** The product direction brings together local files, supported service connections, listening history, discovery and shared experiences—without hiding where the music or its data came from.

This repository is Love’s public development notebook. It explains the product, the engineering behind it and the milestones being verified. **It is not the application source repository, an installer or a public beta.**

## The product we are building toward

The following areas describe the product direction, **not a checklist of released features**. Availability will depend on implementation, provider permissions and release validation.

| Area | The intended experience |
| :--- | :--- |
| **Library & local music** | Albums, artists, playlists and local collections in one navigable home, with source identity kept visible. |
| **Playback & queues** | Understandable playback routes, useful queues, source-aware lyrics and clearly explained unavailable states. |
| **History & imports** | A trustworthy listening record, reviewable imports and explicit handling of uncertain submissions. |
| **Discovery & Heartbeat** | Explore music and artist context, save discoveries and return to the things that matter to you. |
| **Copy, Sync & Merge** | Deliberate playlist operations with clear source and destination choices and duplicate handling. |
| **Social, Pulse & desktop** | Profiles, shared listening-room experiences and desktop integrations, developed within explicit privacy and permission boundaries. |

The [vision](docs/VISION.md) explains the product principles. The [roadmap](docs/ROADMAP.md) separates launch direction from later ideas.

## Real milestones, clearly scoped

**Status snapshot: 13 October 2026.** The project’s recorded acceptance updates report the following internal development milestones. These are verified synthetic-workload checkpoints, **not release claims or independent public audits**.

| Milestone | What the accepted work demonstrates |
| :--- | :--- |
| **Protected archive handling** | Check ownership before finding and reading an archive; preserve the required protections during the bounded archive transition and cleanup. |
| **A confirmed 25-row slice** | Execute one approved slice from a sealed plan, record durable results and leave the remaining 475 rows pending. |
| **Rollover into the next plan** | Demonstrate the connected rollover → generated plan → one-slice execution path, including the tested recovery-required outcomes. |
| **Explicit database selection** | Assess and prepare against the databases actually selected instead of silently taking baseline evidence from defaults. |
| **The bounded 500-row lifecycle** | Start, commit chunks, pause durably, explicitly resume and complete 20 chunks; a healthy fully checked completion no longer also reports recovery required. |

Some milestones are application corrections; others establish missing integration proof for existing code. We label the difference in [Progress](docs/PROGRESS.md).

**Still open:** broader coordinated recovery across the required stores, complete scenario closure and release acceptance. Ordinary pause/resume is not proof of recovery after process death.

## Why the foundation gets so much attention

Restoring an old file can restore an old instruction, too. A task that looked pending in a backup may already have completed later. A cache can resemble history without being the authoritative record. A playlist can reference music that is temporarily unavailable without becoming disposable.

Love’s safety-and-recovery program addresses these distinctions explicitly. Its documented scope contains **43 ownership entries, eight recovery contracts and 28 broad recovery scenarios**. Those are requirements and overlapping views—not 79 completed tasks or a completion percentage.

The latest reported accepted lifecycle checkpoint includes both Linux and native Windows validation, deliberate regression checks, independent review and cleanup evidence. The [engineering notes](docs/ENGINEERING.md) explain what that evidence does—and does not—prove.

## Follow the build

[Milestones and status](docs/PROGRESS.md) show what has been demonstrated. [Roadmap](docs/ROADMAP.md) shows what remains. Updates are tied to meaningful accepted work, not every commit or every passing test.

A trustworthy overall release percentage is not published yet. We will use stable, evidence-linked checkpoints rather than turn test totals into a progress bar.

**Built for people who care about their music—and what happens to it.**

---

See [FAQ](docs/FAQ.md) for availability and scope, and [Repository notice](NOTICE.md) for what this public documentation does not distribute.
