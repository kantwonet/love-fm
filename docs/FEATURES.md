# Love.fm — The complete public feature guide

[← Overview](../README.md) · [Roadmap](ROADMAP.md) · [Development progress](PROGRESS.md)

**Product intent, not a released-feature list.** This guide summarizes Product Blueprint revision 2.8 (4 October 2026), with public status snapshot 13 October 2026. Source-specific capabilities require permission and validation. The private blueprint remains authoritative; these public summaries are not a replacement engineering specification.

**Launch target:** intended first-release scope, not a completion badge. **Preferred:** explicit include/defer decision still needed. **Later:** beyond 1.0. **Idea:** not a product commitment.

This guide organizes 111 public feature summaries across 16 areas. Those are navigation counts—not 111 accepted features or a progress denominator.

## Contents

- [One library. Your choice of source.](#library)
- [Local files are not second-class music.](#local)
- [Your queue should make sense.](#playback)
- [A listening history worth keeping.](#history)
- [Meet the story behind your music.](#heartbeat)
- [Find something new. Find something again.](#discovery)
- [Find the music. Or the thing you want to do.](#search)
- [Your playlists should travel with you.](#transfers)
- [Two playlists. Or ten. One clean result.](#merge)
- [Same room. Your own music access.](#pulse)
- [A music identity beyond one service.](#social)
- [See deeper. Keep the music first.](#lyrics)
- [A music home that lives on your desktop.](#desktop)
- [Your music life. Your boundaries.](#privacy)
- [Made to feel like Love.](#design)
- [Keep the music. Keep the trust.](#recovery)

<a name="library"></a>
## One library. Your choice of source.

Bring the collection together without erasing where your music comes from. Switch between the whole library, a connected source, and local music.

*Blueprint references: LIB-001–052 · IDENT-001–009*

### All sources, or just the one you want
**Launch target** · Planned experience

Browse Albums, Artists, Playlists and Tracks together, then filter to local files or an eligible connected source. Keep separate settings for connecting sources and choosing playback. A library filter is not a command to switch the music already playing.

### One recording, visible source choices
**Launch target** · Planned experience

Group confidently matched copies of the same recording while retaining provider references, local copies, quality and edition details. Live, remix, acoustic, instrumental, clean/explicit and sped-up versions remain distinct when the evidence says they are different.

### Your collection and the wider discography
**Launch target** · Planned experience

An artist opens music browsing with In your Library first, then Albums, Singles & EPs and Compilations. Explore unsaved releases without adding them automatically, and open Heartbeat separately for the deeper story.

### Linked playlists, not accidental duplicates
**Launch target** · Planned experience

Intentionally link versions of a playlist and switch between their source/account versions in one expandable entry. Matching titles alone never link them; the selected version makes the destination of an edit explicit.

### Saving, favoriting and copying stay separate
**Launch target** · Planned experience

Add to Library, Favorite, Save to source and Also save a Love copy describe different actions. A heavily played song is not automatically saved. An independently editable Love playlist is different from a connected provider playlist.

### A library that remembers your place
**Launch target** · Planned experience

Remember the category, source filter, sorting and grid/list choice, plus selection and scroll when navigating back. At a glance shows whole-collection counts; filtered results have a separate count.

### Real playlist organization
**Launch target** · Planned experience

Create playlists, arrange folders and nested folders, customize name/cover/description and use keyboard multiselect for bulk work. Ordinary playlists can intentionally repeat a recording; the Merge operation follows its own no-duplicates rules.

### Uncertain matches stay yours to decide
**Launch target** · Planned experience

Review suggested identity links with recording, edition, duration and source details. Link or keep separate with a preview and undo. Preserve those decisions across imports and rescans instead of quietly rematching everything.


<a name="local"></a>
## Local files are not second-class music.

Give your own files the same library, artwork, queue, history and discovery context as music from supported services.

*Blueprint references: LOCAL-001–008 · LIB-007,013,031–039,043,046*

### Watch folders on your terms
**Launch target** · Planned experience

Choose multiple folders, preview a recursive scan and review album/playlist organization before confirming. Watch already-approved folders or choose manual scanning. Overlapping roots must not import one physical file twice.

### Keep the files. Change the organization.
**Launch target** · Planned experience

Remove from Library changes Love’s collection, not the original audio. Remember exclusions so rescans do not undo your choice. Open in folder locates the file; moving a file to the Recycle Bin is a separate, previewed action.

### A moved drive does not erase your music life
**Launch target** · Planned experience

Keep unavailable files visible with playlist membership and history intact. Locate file/folder and verified relinking restore the same identity. External drives and network folders have separate reliability requirements; an inaccessible folder is not an empty folder.

### Your metadata corrections survive rescans
**Launch target** · Planned experience

Edit titles, artist credits, artwork and organization inside Love, compare changes with the source, and revert deliberately. Retain album versus track artists, featured credits, multidisc order and chosen covers.

### Browse folders or drop in a selection
**Launch target** · Planned experience

Offer folder browsing alongside the unified collection. Drop files into Library to add them, or onto a playlist to add references. Neither action moves the audio or starts watching its parent folder without a choice.

### A deliberately tested format range
**Launch target** · Planned experience

The validation target includes MP3, FLAC, AAC/ALAC in M4A, Ogg Vorbis, WAV and AIFF. Only formats that pass playback, metadata and artwork checks will be advertised as supported.

### Optional write-back to file tags
**Preferred** · Planned experience

Preview exact fields and affected files before writing tags in validated formats. Preserve unknown tags and recovery information; a failed tag write must not discard the usable Love metadata.


<a name="playback"></a>
## Your queue should make sense.

Keep the music you deliberately added, the context it came from, and the sequence you actually heard understandable.

*Blueprint references: PLAY-001–011 · QUEUE-001–014 · PLAYER-001,004,013–015*

### Choose a default, an album override or a track override
**Launch target** · Planned experience

Use an explicit track choice first, then an album choice, then the app-wide preferred source. Show the active rule and let you clear it. Unavailable playback offers an explicit supported alternative, Skip or Stop—not a hidden provider swap.

### Play Next and Play After, without losing context
**Launch target** · Planned experience

Manual additions take priority over the remaining album or playlist. Play After inserts after a selected item. Separate manual additions from context continuation and preserve pending additions when you deliberately start a new context.

### Previous follows what actually played
**Launch target** · Planned experience

At five seconds or later, Previous restarts the track; before five seconds, it returns to the actual prior play, including manual additions. Next retraces that heard sequence without discarding new queue entries. Retain 50 past navigation entries and all pending entries across restart.

### Shuffle, repeat and autoplay are explicit
**Launch target** · Planned experience

Preserve your settings rather than resetting them when a new album begins. Shuffle changes context order, not manual queue order. Repeat Off, All and One stay distinct; discovery autoplay follows the context only when appropriate.

### Added by, not added by someone
**Launch target** · Planned experience

Show contributor name and avatar on user-added queue entries. Autoplay and album/playlist continuation show their actual origin. Preserve attribution through departures and host changes; do not invent a person for automatic entries.

### Restart paused, exactly where supported
**Launch target** · Planned experience

Restore track, position, queue, modes and volume in a paused state. Main, full-screen and artwork-only mini surfaces share one session, so opening a different view does not restart a song or create another listen.

### Queue changes are deliberate
**Launch target** · Planned experience

A playlist edit or provider refresh does not silently rewrite the active queue. Offer Update upcoming tracks explicitly. Separate Clear manual queue from Replace context, with affected counts and a bounded undo.

### Output and audio details that tell the truth
**Launch target** · Planned experience

Use Windows’ default output or a remembered device. Explain fallback or pause when a device disappears. Keep normalization off by default; target gapless where supported. Show known source/quality details without claiming unverified lossless or spatial audio.

### Crossfade where the source allows it
**Preferred** · Planned experience

Optional crossfade starts off and requires a permitted, validated playback route. It is not assumed available for every provider.


<a name="history"></a>
## A listening history worth keeping.

Know what you really heard, where it came from, and how it connects to your music life—not just what a player happened to display.

*Blueprint references: HIST-001–011 · IMPORT-001–015 · USAGE-001–006*

### Count actual listening, not skipped time
**Launch target** · Planned experience

Measure time actually played. Pause and seek jumps do not earn listened time. Keep qualified and partial listens distinct, and record a genuine replay as a new play when it qualifies. Changing source in one continuous play does not by itself create another listen.

### One event, even when several sources see it
**Launch target** · Planned experience

Keep original observations from imports and permitted native/browser monitoring, then reconcile duplicate observations of the same event. Similar song names or dates never justify deleting distinct real listens. Remote context is not automatically a Love-controlled play.

### Explore your own timeline
**Launch target** · Planned experience

Filter by date range, artist, album, track, source or text. Inspect original evidence and corrections, revert changes and restore removed history within the planned 30-day window. Reporting timezone changes grouping, not original timestamps.

### On This Day and Time Machine
**Launch target** · Planned experience

Revisit real recorded listening dates and defining periods. Make source-coverage gaps visible rather than inventing first listens or reconstructing an old saved library without an actual snapshot.

### Import multiple sources as one operation
**Launch target** · Planned experience

Preview new, duplicate, skipped and uncertain rows before the initial commit. Keep one parent operation with expandable source progress. Complete reviewed valid rows while uncertain ones stay staged; retry only unfinished work.

### Continuous, scheduled or manual imports
**Launch target** · Planned experience

Enable an ongoing scope explicitly. Continuous checking uses incremental progress and backoff, with scheduled/manual alternatives. Adding a new source or enlarging scope requires review. Local jobs need Love running on an awake computer.

### History import is not an outbound scrobble
**Launch target** · Planned experience

Preserve original dates in Love even when an external destination cannot accept them. Connecting a source does not enable scrobbling. Show original time and any separately reviewed submission timestamp; current provider limits must be validated before release.

### A proper manual scrobbler
**Launch target** · Planned experience

Stage tracks or albums, edit metadata and timestamps, choose the destination and inspect a final preview. Submitted, confirmed, ignored and uncertain outcomes remain separate. Manual entries are never presented as measured playback through Love.

### Your time with Love
**Preferred** · Planned experience

Offer separate Active in Love and Music played through Love timers, Today/Past seven days/All time, and optional lightweight action totals. Foreground interaction time is not background music time; do not add overlaps into a misleading total. Keep the statistics local by default, with pause/export/reset controls and no raw key or pointer tracking.


<a name="heartbeat"></a>
## Meet the story behind your music.

Connect an artist, album or track to your own listening history, exact versions, credits and reliable context.

*Blueprint references: HEART-001–005 · HIST-010–011 · IDENT-004–007*

### Your relationship with an artist
**Launch target** · Planned experience

Explore play counts, first and last listens, listening time, favorites and trends alongside concise reliable artist facts. Open the discography directly. Measured and estimated time remain clearly distinguished.

### Albums and tracks with their identity intact
**Launch target** · Planned experience

Start with exact recording or edition, artwork, credits and available sources. See your history for that music without pretending every remaster or live version is the same audio.

### Statistics you can inspect
**Launch target** · Planned experience

Choose date ranges and open the plays behind a statistic in filtered History. Missing imported history means incomplete coverage—not proof that you never listened. Keep public facts and personal data distinguishable.

### A place to explore, not an accidental play button
**Launch target** · Planned experience

Opening Heartbeat, a credit or a detail view does not change the music already playing. Recently viewed Heartbeat items are a private, clearable navigation history—not new listens or social posts.


<a name="discovery"></a>
## Find something new. Find something again.

Explore from a musical starting point, with control over familiarity, variety and the reasons behind a recommendation.

*Blueprint references: DISC-001–013 · WORLD-001–004*

### Discover and Rediscover
**Launch target** · Planned experience

Discover leads with relevant new releases connected to your collection, then followed artists and wider exploration. Rediscover looks back into your own music life. Love Mixes are generated collections; Favorites are the music you explicitly love.

### Related stations with a memory of their starting point
**Launch target** · Planned experience

Start from a track, artist, album or playlist. Keep that context through the session while using feedback to adjust. The design targets a flexible mix of new-to-you and relevant familiar music—not an exact quota or a claim to reproduce another service’s algorithm.

### More new. More familiar. Your choice.
**Launch target** · Planned experience

Use Why this, More like this, Not interested and familiarity controls. Feedback changes recommendations without deleting saved music or emptying your queue. Avoid recently heard tracks where enough relevant playable candidates exist; explain when variety is limited.

### Save a mix without chasing a moving target
**Launch target** · Planned experience

Let generated mixes refresh with a visible update time. Save as Playlist captures a separate editable snapshot. Save to source uses the shared reviewed export flow; maintaining an export is a distinct, deliberate choice.

### Offline discovery respects the available music
**Launch target** · Planned experience

Use only verified locally playable candidates while offline and label the smaller pool. Keep the broader saved library visible; do not silently switch providers to manufacture more candidates.

### Music World: explore by place
**Preferred** · Planned experience

Browse countries through an accessible map/globe alternative and list. Switch between Explore and My Music. Use verified artist-origin information, allow multiple origins and keep unknown locations unknown; personal views show coverage and date range.


<a name="search"></a>
## Find the music. Or the thing you want to do.

Connect your collection, supported catalogs and Love’s tools without making you remember which screen owns each action.

*Blueprint references: SEARCH-001–008 · SHELL-001–008 · HOME-001–006 · ONBOARD-001 · NOTIFY-001–003 · ACTIVITY-001–002*

### Your music and more music
**Launch target** · Planned experience

Search saved music, eligible history matches and songs inside saved playlists separately from supported catalogs. Local results arrive independently of slower provider results, and one unavailable source does not blank the whole search.

### Find the playlist containing a song
**Launch target** · Planned experience

Open a matching occurrence in its playlist. Playing a search result inside a playlist uses the full playlist context unless you explicitly choose Play these results. Browse, Play, Heartbeat and Open in source remain different actions.

### Search for actions, too
**Launch target** · Planned experience

Find tools such as Merge playlists, Import history, Graphs or Discord in an Actions & Settings group. Open the right page without performing a consequential action just because you typed its name.

### A home that works before setup is finished
**Launch target** · Planned experience

Offer Connect a source, Add local music, Import history and Explore Heartbeat in a skippable, resumable first run. Returning users get Go Back To. Accounts are offered when identity-dependent features need them, not as a core-music signup wall.

### Pinned navigation and a useful Activity panel
**Launch target** · Planned experience

Pin and reorder albums, artists, playlists and mixes. Follow scans, imports, transfers and merges through one expandable operation record, with meaningful pause/retry/review actions and scoped errors instead of a flood of routine notifications.

### Restrained feature education
**Preferred** · Planned experience

Optional, dismissible suggestions help you find useful features without popups interrupting playback. Your local feature-use record is not sent to a server for choosing those suggestions.


<a name="transfers"></a>
## Your playlists should travel with you.

Choose the source, choose the destination, preview the matches, and know exactly which version an operation will change.

*Blueprint references: XFER-001–022 · SAVE-001–005*

### Copy once
**Launch target** · Planned experience

Copy selected tracks, saved albums or playlists on supported routes, including Love as a source or destination. Default to new playlists with originals and unrelated destination music intact. One parent operation shows each destination’s actual outcome.

### One-way Sync
**Launch target** · Planned experience

Keep selected content and permitted name, description, artwork and order moving from a chosen leader to its targets. Removal propagation starts off and needs separate authorization. Stopping a connection does not delete transferred music.

### See and resolve conflicting edits
**Launch target** · Planned experience

If an outside edit conflicts with a Sync rule, preserve that version and pause the conflicting writes. Offer to keep it separate, reapply the source or explicitly adopt changes with review. Missing permissions or incomplete reads are not evidence for deletion.

### Save this mix, queue or selection to a source
**Launch target** · Planned experience

Save eligible Love playlists, mixes, albums, tracks and finite queue selections through one common permission, match and preview flow. Show an existing destination copy and offer Open, Update or Save as new. Saving is not a command to change playback.

### Snapshot or keep updated
**Launch target** · Planned experience

A generated mix saves its current selection by default. Explicit modes distinguish keeping the current mix synchronized from collecting new discoveries. Preserve outside edits and explain removals; do not secretly retrain the mix from destination customization.

### Import and export playlist references
**Launch target** · Planned experience

Plan support for accepted playlist URLs, CSV/M3U files and pasted artist/title lists with parsing and match review. Transfers of local input match catalog references; they do not upload your audio or download streaming audio.

### Finish the job without repeating confirmed work
**Launch target** · Planned experience

Persist operation identity and progress, verify destination outcomes and retry only unconfirmed work. Report partial success honestly. Large unexpected removals need another preview; supported reversal must preserve later user edits.

### Two-way Mirror
**Later** · Planned experience

A later bidirectional mode needs baseline reconciliation, conflict choices, loop prevention and verified permissions. Mirror is not part of the one-way Sync launch promise.

### Cloud-run jobs while your PC is off
**Later** · Planned experience

Server-executed transfers are separately scoped after 1.0. Launch-target local jobs require the assigned computer awake and Love running.


<a name="merge"></a>
## Two playlists. Or ten. One clean result.

Combine selected finite collections without flattening every version of a song or damaging the originals.

*Blueprint references: MERGE-001–008 · IDENT-009 · LIB-044,048*

### Merge across eligible sources
**Launch target** · Planned experience

Combine two or more playlists from Love, permitted connected services or supported local playlist files. Choose the destination and default to a new result with originals unchanged; merging into an existing playlist requires an explicit preview.

### No duplicate exact recordings
**Launch target** · Planned experience

Collapse verified copies of the same recording while preserving source choices. Keep genuinely distinct live, studio, remix and clean/explicit versions separate. Review uncertain duplicates, then check again after destination matching.

### Choose the order, see the contributions
**Launch target** · Planned experience

Default to your ordered input playlists and each recording’s first occurrence. Offer alternating inputs, artist/title ordering or a shuffled saved order. Preview input count, unique output, removed duplicates, uncertain matches and which inputs contributed a song.

### More than two playlist inputs
**Launch target** · Planned experience

Allow explicitly labeled finite selections such as saved songs, albums or the current queue. Edit the proposed name and cover, reorder/remove inputs, and optionally save a separate Love copy when exporting to a provider.

### Run a saved setup again, deliberately
**Launch target** · Planned experience

Choose Update prior result or Create new result when rerunning a saved recipe. A completed one-time Merge does not secretly become a background connection.

### Keep a merged playlist updated
**Later** · Planned experience

Later live Merge follows inputs toward the result, not back into the originals. It needs explicit removal policy, inspectable exclusions and pinned manual additions, plus protection against synchronization loops.


<a name="pulse"></a>
## Same room. Your own music access.

Bring the listening session and the conversation together, with a shared queue and source-aware participation.

*Blueprint references: PULSE-001–022*

### Invite-only listening rooms
**Launch target** · Planned experience

Create or join a room with a preview of its rules, identity exposure and source requirements. Participants use their own permitted access to the exact music; Love is not a rebroadcast of the host’s audio or subscription.

### A collaborative queue with names and faces
**Launch target** · Planned experience

The host manages playback and the full queue; participants can add tracks and remove their own queued tracks by default. Added by and stable avatars stay attached to accepted contributions through departures and host changes.

### Pause for me, without pausing everyone
**Launch target** · Planned experience

Local pause leaves the room moving. Rejoin at the current live position rather than replaying everything you missed. Permission to pause/resume the room is separate from permission to add tracks—even the host can pause locally.

### Host handover without losing the session
**Launch target** · Planned experience

Preserve the track, queue and permissions when the host leaves or disconnects. An eligible acting host takes over; the original host can return without restarting music. Permanent ownership transfer is a separate confirmed choice.

### Reconnection with clear limits
**Launch target** · Planned experience

The design uses a 10-second host grace and a 60-second unexpected-empty-room recovery window; deliberate final departure ends the room. Show buffering, reconnecting, unavailable and out-of-sync states rather than implying flawless synchronization.

### Conversation belongs beside the music
**Launch target** · Planned experience

Plan text, replies, edits/deletes, reactions and mentions, plus approved images/GIFs/video/audio attachments or links. Video requires deliberate play and starts muted. Keep chat moderation distinct from playback and queue permissions.

### One unavailable track does not stop the room
**Launch target** · Planned experience

Explain the affected participant’s missing access, offer verified alternatives and rejoin them on the next playable track. Count only what that person actually heard. Preserve their personal queue and restore it paused when they leave.

### Keep something from the session
**Launch target** · Planned experience

Save Played in this session, Upcoming queue or Both as a personal playlist, with preview and optional deduplication. Plan 30-day chat/media archives subject to deletion, access and moderation rules. An archive never transfers someone else’s local files.

### Truthful scale and permission boundaries
**Launch target** · Planned experience

Initial acceptance targets up to four participants, not a published unlimited-room claim. Each provider combination needs permission, timing and failure validation. Public room discovery needs a separate scope decision; voice is an idea and camera/screen sharing are deferred.


<a name="social"></a>
## A music identity beyond one service.

Express your taste, compare permitted listening context, and share music people can open through their own sources.

*Blueprint references: SOCIAL-001–016 · ACCOUNT-002–013*

### A profile that feels like your music
**Launch target** · Planned experience

Combine an optional About section, featured albums/playlists, customization and allowed listening statistics. Generate a stable random-color initial/monogram avatar until you choose another; preserve its identity across devices.

### Friends, follows and listening neighbors
**Launch target** · Planned experience

Keep mutual friendship separate from one-way following. People discovery, cross-source activity and comparisons use permitted data, with explicit coverage. Basic handle discovery never automatically publishes your saved music or history.

### Messages and music cards
**Launch target** · Planned experience

Friends can message directly; strangers enter message requests with unsolicited attachments hidden until accepted. Shared cards open a preview and let the recipient use their own source access, without autoplay or access to the sender’s files.

### Choose what each audience sees
**Launch target** · Planned experience

Separate profile details, saved music, dated history, aggregate statistics and presence. Start music/profile audiences private and provide Preview as visitor. Restricting visibility should take effect for previously exposed views too.

### Block, mute, report and retain local music
**Launch target** · Planned experience

Provide scoped blocks, mutes and previewable reports, with moderation reasons and an appeal path. Online restrictions do not erase your local collection or disable the offline player. Room participation cannot be falsely represented as invisible.

### Share a playlist without sharing edit ownership
**Launch target** · Planned experience

Recipients can view, play and save a copy at 1.0. The original stays owner-edited. Persistent collaborative playlists are later scope, separate from Pulse’s collaborative queue.


<a name="lyrics"></a>
## See deeper. Keep the music first.

Bring artwork, authorized lyrics and real audio information into a shared player—not a display of made-up measurements.

*Blueprint references: LYRICS-001–004 · PLAYER-002–017*

### Timed lyrics when timing is available
**Launch target** · Planned experience

Use authorized word timing, then line timing, then plain text as available. Offer a full page and sidebar preview, source credit, optional matching-recording timing offset, and Resume following after manual scrolling.

### A waveform for the actual recording
**Launch target** · Planned experience

Show a whole-song waveform only when trustworthy analysis is available for that source. Time-based seeking controls only the matching loaded track and preserves pause. A picture of another master must not become a seek control.

### Graphs that know their limits
**Launch target** · Planned experience

Expose Graphs from Song Details and Heartbeat, with available views first and a clear unavailable/loading state. Waveform amplitude is not measured loudness or a quality score. Ordinary playback does not wait for analysis.

### Real technical details
**Launch target** · Planned experience

Expand reliable source, codec, bitrate, bit depth, sample rate and channel information without crowding Library. Identify provider-reported versus measured data and leave unknown values unknown.

### Optional deeper analysis
**Preferred** · Planned experience

Explore live level meters, frequency spectrum and measured loudness over time only where the audio path permits accurate measurement. On-demand analysis and caching must yield to playback; these extra views are Preferred, not universal provider capabilities.


<a name="desktop"></a>
## A music home that lives on your desktop.

Keep Love close through the tray, the player, supported music observations and a personal Discord presence.

*Blueprint references: DESKTOP-001–007 · DISCORD-001–003 · BROWSER-001–003 · PLAYER-014*

### Windows-first, not Windows-only forever
**Launch target** · Planned experience

The initial public target is Windows 11 x64. Plan an ordinary per-user installation where feasible, optional validated file associations and a clear distinction between removing the app and deleting Love data. Other platforms need separate future acceptance.

### Quiet startup and explicit Quit
**Launch target** · Planned experience

Disclose Start with Windows on by default with an opt-out. Automatic startup goes quietly to the tray; closing the main window leaves background work available after an explanation. Quit stops that work deliberately.

### An artwork-only mini window
**Launch target** · Planned experience

An always-on-top cover with a small close X, drag movement and double-click return. Switching player surfaces shares the same session. Closing the artwork window does not stop playback; it is not another player with competing state.

### Discord presence across eligible sources
**Launch target** · Planned experience

Customize supported fields and buttons with a preview. Use ordered source priority and keep the chosen listening session instead of bouncing between observations. Pause clears presence, and private listening suppresses Love’s Discord output.

### A paired browser companion
**Launch target** · Planned experience

Initially validate Chrome and Edge with explicit music-site permissions and revocable desktop pairing. Observe approved music contexts, distinguish observation from playback control and reconcile browser/native observations of the same listen. Ignore unrelated browsing and text fields.

### Artwork in the taskbar
**Preferred** · Planned experience

Offer optional current-album taskbar artwork, off by default and subject to validation. Preserve Love’s normal identity elsewhere.


<a name="privacy"></a>
## Your music life. Your boundaries.

Keep local use, social identity, optional synchronization and technical diagnostics understandable and separate.

*Blueprint references: ACCOUNT-001–013 · PRIVATE-001–004 · PRIVACY-001–009 · USAGE-004–006*

### Use the core without a Love account
**Launch target** · Planned experience

Guest access covers core Library, local playback, history, scrobbling, Heartbeat and authorized local transfer tools. Provider sign-in may still be required for that provider. Social, Pulse and Love cloud identity require a Love account.

### Private listening that stays private after restart
**Launch target** · Planned experience

Private listening is off initially. Once enabled, keep it active until you end it or its timer expires; suppress Love/Discord presence and new Love-originated external scrobbles, without later backfilling excluded plays. Retain local history by default, with a separate option to exclude it.

### Private mode is not invisible room membership
**Launch target** · Planned experience

Profile audiences, Do Not Disturb and other apps’ sharing settings are separate controls. Joining Pulse still reveals room participation; show that before joining. Previously sent external activity is not automatically retracted.

### Sign in without losing guest work
**Launch target** · Planned experience

Keep the local collection and preview any cloud merge. Separate different accounts’ caches, private histories and pending writes. Expired online identity should not erase usable local music or become a fallback into someone else’s account.

### Choose the cloud categories
**Preferred** · Planned experience

Optional sync targets saved references, Love playlists, favorites and selected settings. History sync is a separate opt-in; local audio and provider credentials are excluded. Queue, volume, output device, local paths and job ownership stay device-specific.

### Technical diagnostics, honestly disclosed
**Launch target** · Planned experience

The product plan has technical diagnostics on by default with opt-out: allowlisted faults, versions, provider type, timings and sanitized traces. Exclude raw audio/history, search text, typed text, credentials and identifying paths. This is not a zero-telemetry claim.

### Limited access, retention and extra capture
**Launch target** · Planned experience

The planned starting retention is 30 days for raw technical events and 90 days for aggregate reliability trends, pending final privacy review. Extra capture is explicit, previewable, time-limited and stoppable—not arbitrary remote access. Personal usage sharing stays separate.

### Export and deletion with defined consequences
**Launch target** · Planned experience

Offer export and a deletion preview. Stop relevant account writes, protect other people’s conversations, and never treat account deletion as permission to delete original local audio or third-party accounts. Backup restoration must not silently revive revoked access.


<a name="design"></a>
## Made to feel like Love.

An artwork-led, futuristic listening room with readable surfaces and a product that stays responsive while the collection grows.

*Blueprint references: VISUAL-001–005 · ACCESS-001 · PERF-001–004*

### The Love visual identity
**Launch target** · Planned experience

Retain the established logo, soft pink/red accents and #FFACBC signature color. Use spacious typography, readable glass-like surfaces, consistent artwork and subtle borders. This showcase’s styling is not a claim that the app’s visual overhaul has shipped.

### Light, Dark and System
**Launch target** · Planned experience

Plan theme choices, reduced motion and reduced transparency across surfaces. Decorative motion can stop; a failed background should leave a usable solid surface rather than break navigation.

### Accessible core flows
**Launch target** · Planned experience

Keyboard operation, visible focus, readable contrast, text scaling and screen-reader labels belong in release scope. Pair statuses with words and icons, not color alone. Preserve essential controls as the window narrows.

### Large-library performance as a testable target
**Launch target** · Planned experience

Target a representative 50,000-track mixed collection, warm Library results within one second and primary controls within 150 milliseconds under a defined percentile/hardware test. These are design targets—not published benchmarks or minimum-system requirements.

### Let background work be background work
**Launch target** · Planned experience

Index, import, match, transfer and prepare artwork without blocking core controls. Bound concurrency, prioritize audio and pause expensive hidden graphs. Omit optional counters when they would materially hurt responsiveness.

### Future visual experiments
**Idea** · Planned experience

Destination-specific background variations and custom sonic identity remain ideas rather than promised launch features.


<a name="recovery"></a>
## Keep the music. Keep the trust.

Make progress and failure understandable, preserve the user’s choices, and ship only the capabilities that have earned acceptance.

*Blueprint references: DESKTOP-005–006 · RELEASE-001–014 · SUPPORT-001–005 · OWNER-001–003 · CAPACITY-001–003*

### Backup and recovery with a preview
**Launch target** · Planned experience

Plan backup dates, declared contents, selected restore scope and a minimal recovery entry even when the main app cannot start. A valid local recovery set is not automatic permission to resume playback, uploads or other online work.

### Recovery without invented success
**Launch target** · Planned experience

Protect saved history, collections, permissions and uncertain operations across the required data stores. Show what remains held, missing or unresolved. Complete cross-store recovery and the original 28 scenarios remain engineering obligations, not a completed feature claim.

### Updates that respect the listening session
**Launch target** · Planned experience

Target signed, tested distribution with staged rollout and verified rollback. Active listening, Pulse and import/transfer writes postpone installation. Quiet watchers may pause for an eligible update and return with the selected preferences intact.

### Support that carries the useful context
**Launch target** · Planned experience

Provide searchable help, a report reference, status and protected replies for guests or accounts. Preview sanitized attachments. Separate confirmed Love-service, provider and device-local incidents instead of blaming every error on the same thing.

### Responsible public operation
**Launch target** · Planned experience

A restricted owner dashboard groups health and moderation reports within approved data boundaries. Scoped capability restrictions, capacity controls and a public status view should preserve local core use and accepted work—not grant arbitrary control of the user’s computer.

### A release, not just a green test
**Launch target** · Planned experience

Before public promotion, validate intended provider routes, data integrity, security/privacy, accessibility, performance, installation, updates and recovery. Internal acceptance is not a downloadable release or a promise that unknown bugs cannot exist.

### No ads, no invented payment dependency
**Later** · Planned experience

Love is designed to be free and ad-free. An optional link to an owner-supplied donation page is later setup, not a required payment system or a prerequisite to making the app.

## Beyond 1.0

**Two-way Mirror.** Bidirectional collection updates with explicit baseline, conflict and loop-prevention rules.

**Live Merge.** Keep merged outputs updated from inputs, with removal choices, exclusions and retained manual additions.

**Cloud-run transfers.** Run separately approved jobs without the assigned desktop being awake.

**Listen Along.** A distinct passive-follow listening mode—not a different name for the launch-target Pulse room.

**Persistent collaborative playlists.** Shared long-lived playlist editing, separate from Pulse queue contributions.

**More platforms.** Mac, Linux and mobile expansion through separate scope and acceptance work.

**More real-time sharing.** Camera and screen sharing are deferred. Voice remains an idea requiring a later decision, not a guaranteed feature.

## Cross-feature distinctions that matter

- Listening history, measured listening duration, app foreground time and outbound scrobbles are separate measures.
- A source filter changes what you browse. Playback-source overrides change the chosen route. Saving to another source is a separate write.
- An ordinary playlist can repeat a song intentionally. A Merge deduplicates verified exact recordings; distinct real listens stay distinct in history.
- Copy is one-time. Sync is one-way. Mirror is later two-way work. Optional Love cloud sync is a different feature.
- Library membership, a Favorite, a provider representation and an independent Love copy are not interchangeable.
- Pulse shares session coordination, not someone else’s audio entitlement. Local pause and room pause are different.
- Private listening, profile audiences, diagnostics, Do Not Disturb and another app’s own sharing controls remain separate.
- A locally verified recovery does not automatically resume uploads, playback, cloud jobs or old authorizations.

## Provider and release boundaries

Local files, Apple Music, Spotify, YouTube, YouTube Music, SoundCloud, Last.fm, Discord and the paired browser companion are intended capability areas—not a blanket list of working integrations. Authorization, content rights, account/region eligibility, permitted retention, exact matching and failure behavior must be verified per route. The plan permits release of accepted routes without waiting for unavailable Spotify access; it does not allow a broken enabled feature to be advertised as complete.

Lyrics, artwork/metadata and graph analysis need their own permitted data paths. No generic license, universal audio access, sample-perfect cross-provider synchronization, unlimited rooms or powered-off local execution is promised.

Before public promotion, the plan requires scope, provider authorization, integrity, playback, shared-use, security/privacy, accessibility/performance, distribution, operation and quality gates. These correspond to GATE-01–10 and remain separate from the feature descriptions above.

## What this guide intentionally does not publish

Application source, private repository history, credentials, personal music records, device paths, internal jobs and raw diagnostics are excluded. Current engineering accomplishments are dated summaries in [Progress](PROGRESS.md), not inferred from a feature’s priority. The source blueprint’s 350 requirement records include overlapping detail and superseded history; they are not 350 completed features.
