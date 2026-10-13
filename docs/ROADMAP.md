# Roadmap

[← Project overview](../README.md)

**A roadmap of outcomes—not promised ship dates.** This page summarizes the approved product direction and reported development focus as of 13 October 2026. It is not the private engineering backlog.

## Now: data safety and recovery

The current A-02 program is making ownership, writes, saved approvals and recovery behavior explicit. Selected bounded workflows are accepted in internal development; complete coordinated recovery remains open.

| Outcome | Position in this snapshot |
| :--- | :--- |
| Safe individual database/file and approval operations | Substantial accepted components; complete route coverage is not claimed. |
| Connected bounded history workflows | Selected rollover, slice-execution and Guarded lifecycle proofs accepted. |
| Receipt reconciliation with retained recovery hold | Reported next implementation task. |
| Consistent capture across required stores | Complete implementation/acceptance not established here. |
| Coordinated activation, rollback and interruption recovery | Complete implementation/acceptance not established here. |
| Original recovery scenarios reconciled end to end | Current complete closure matrix not established here. |

## Toward a public release

The blueprint’s release direction spans Library/local music, supported playback and queues, search, history/imports, Heartbeat, onboarding, privacy, core Social and Pulse, desktop integration, recovery/support, and supported Copy, one-way Sync and one-time Merge routes.

This lists the intended scope. It does not declare those areas shipped or place them in a newly approved implementation order.

A public build requires its own evidence for installation, update/rollback, provider routes, data integrity, privacy, accessibility, performance and operational readiness. A source checkpoint alone does not satisfy that requirement.

## Preferred scope requiring disposition

Music World, selected cloud synchronization, extra graph types, adaptive tips, usage statistics, validated file-tag writing, crossfade and optional taskbar artwork have separate inclusion/defer decisions. They are not allowed to appear as partially working features simply because they are preferred.

## Later scope

Two-way Mirror, live Merge, cloud-run transfer jobs, Listen Along, persistent collaborative playlists and expansion beyond the initial Windows desktop target remain later scope. Preserving a concept does not commit the project to a release date.

## What does not move the roadmap forward by itself

More source files, a longer commit history, higher test counts, CI migration and a redesigned public page are not substitutes for accepted requirements. The project publishes milestones for what has actually been established.

See [Progress](PROGRESS.md) for accepted boundaries and [Engineering](ENGINEERING.md) for how proof is interpreted.
