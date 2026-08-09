# Castle of the Last Warden

Version 0.1 — **The Awakening** is a browser-first gothic action RPG and active castle-defense vertical slice. Explore the Forsaken Keep, fight through the Haunted Forest, learn discipline skills with JP, build defenses, and ring the Night Bell when ready.

## Play

Install Node.js 22+, then run `npm install` and `npm run dev`. Open the shown local address. Use A/D or arrow keys to move, J/Space to attack, Escape for the Warden ledger, or the touch controls on mobile.

Production: run `npm run build`, then `npm run start`. The generated Cloudflare-compatible output is in `dist/`.

## Included in v0.1

- Animated evolving title screen, New Game, Continue and Load
- Castle sanctuary, Elara/Forge interaction, Haunted Forest expedition
- Direct movement and combat with six enemy/boss entries
- XP, levels, JP, three disciplines, equipment summary and relic
- Four functional buildable/upgradeable castle defenses
- Voluntary three-wave Night Bell defense and Bell Tower Beast boss
- Boss reward: Castle Level 2 and Western Hall unlock
- Bestiary kills/research, manual save, autosave after defense, refresh-safe local persistence
- Responsive keyboard and touch interface

## Architecture

`app/` provides the browser shell and presentation. `src/core/` owns versioned persistence, `src/game/` contains data and domain types, and `src/ui/` contains the interactive game surface. Definitions are separated so future items, enemies, quests, disciplines and defenses can move to JSON without rewriting the runtime.

## Saves

Saves use a versioned device-local browser record (`last-warden-save-v1`). Version 0.1 includes one persistent record presented as the autosave/first slot. Future schema changes should add explicit migrations rather than replacing incompatible saves.

## Roadmap / known limitations

The slice intentionally favors one complete loop over broad empty systems. Audio synthesis/assets, gamepad input, multi-slot screenshots, crafting, advanced platforming, full equipment comparison, multiple castle rooms, and expanded NPC stories are deferred. Current combat uses stylized CSS pixel theatre rather than a final sprite atlas.

## Deployment

The project is static-host friendly and has no private backend. Build with `npm run build`; deploy the generated worker/static bundle to a compatible host. GitHub Pages may require a static-export adapter; Cloudflare Pages/Workers is the native deployment target.

## Credits and licensing

Game design, writing, UI, CSS pixel artwork and code are original. The Gothic Great Hall visual anchor and Haunted Forest environment were generated specifically for this project with OpenAI image generation, then cropped/integrated into the game; they are stored under `src/assets/`. No third-party game sprites, maps, music, fonts, ripped assets, or proprietary franchise material are included.

The project does not currently ship a music or sound-effects pack. Future audio must be original, public-domain, or accompanied by its license record before inclusion.
