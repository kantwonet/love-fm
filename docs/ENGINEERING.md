# Engineering behind Love

[← Project overview](../README.md)

## The problem underneath the interface

A music application holds more than song titles. It can hold unique user choices, accepted listening history, pending submissions, one-use approvals, caches, recovery journals and external-account bindings. Those records have different meanings and different recovery rules.

For example, an old backup may show an upload as pending even though it succeeded later. Replaying that pending row is not automatically safe. A cached view of listening history is not a substitute for the accepted records from which it was derived.

These are the kinds of distinctions addressed by Love’s A-02 safety-and-recovery program.

## A mapped scope

The original recovery specification defines:

| Specification view | Scope | What this number means |
| :--- | ---: | :--- |
| Ownership entries | 43 | 15 database entries, 22 file families and six credential/external entries. |
| Owner-specific recovery contracts | 8 | Responsibilities and invariants across the mapped entries. |
| Cross-system consistency groups | 7 | Relationships that must remain coherent between owners. |
| Broad recovery scenarios | 28 | Required integrated success, refusal and interruption situations. |

These overlap. They must not be added together or presented as completed implementation. A file family can contain multiple concrete components; 43 does not mean a backup has exactly 43 files.

## Selected requirements in ordinary language

**Use the right data.** An operation must use its selected roots, databases and approval generation—not silently substitute a default path or a replacement file.

**Capture a coherent set.** Copying individually valid files is not enough if they describe different moments. Required writers and dependencies must participate in an established capture boundary.

**Preserve uncertainty.** An interrupted request or a previously consumed approval cannot become fresh authority merely because older data was restored.

**Recover without guessing.** An interrupted multi-component replacement must remain held until its allowed before-state or target-state can actually be verified. No blanket deletion of evidence is implied.

**Keep external effects separate.** Local validation must not depend on real credentials, create provider actions or replay historical process ownership.

These describe requirements. Their complete implementation is not claimed by the selected milestones.

## What the latest reported lifecycle checkpoint tested

The supplied 13 October 2026 acceptance report records:

| Validation environment | Test methods | Deliberate regression controls |
| :--- | ---: | ---: |
| Portable/Linux | 1,015 | 912 |
| Native Windows run | 1,204 | 929 |

The Windows inventory includes native-specific coverage. Much of the portable coverage also runs on Windows, so the rows are **not additive totals of unique capabilities**. Deliberate regression controls ask whether a check notices an intentionally introduced defect; they are not extra product features.

The report also records required supervision and cleanup, source and evidence review, and fresh validation after the merge. These figures are a **dated acceptance snapshot**, not a live badge, a guarantee of defect-free software or a claim that all 28 recovery scenarios are closed.

## Development evidence is not release evidence

This public repository contains explanations, not executable proof. It does not include private databases, raw CI traces, credentials, runner configuration, test launchers or binaries. It does not ask readers to run a pasted shell command.

The project’s internal records bind acceptance to the tested source and environment. That evidence is not recreated by copying a PASS label into this page. Public release and provider acceptance remain separate.
