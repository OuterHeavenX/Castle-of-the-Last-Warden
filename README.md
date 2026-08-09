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
- Raster sprite atlases for the Warden, Elara, six enemies/bosses, defenses and key props
- Frame-based actor/defense animation with procedural original music, ambience and SFX

## Architecture

`app/` provides the browser shell and presentation. `src/core/` owns versioned persistence and audio, `src/game/` contains data and domain types, `src/ui/` contains the interactive game surface, and `src/assets/` contains organized raster atlases and metadata. The canonical rendering scale is documented in `docs/WORLD_SCALE.md`.

## Saves

Saves use a versioned device-local browser record (`last-warden-save-v1`). Version 0.1 includes one persistent record presented as the autosave/first slot. Future schema changes should add explicit migrations rather than replacing incompatible saves.

## Roadmap / known limitations

The slice intentionally favors one complete loop over broad empty systems. Gamepad input, multi-slot screenshots, crafting, advanced platforming, equipment-driven weapon skins, recorded orchestral audio, multiple castle rooms, and expanded NPC stories are deferred. The current raster sheets establish a coherent production foundation but remain first-pass atlases rather than final hand-authored frame polish.

## Deployment

The project is static-host friendly and has no private backend. Build the protected GitHub Pages output with `npm run build:pages`; the complete static site is emitted to `dist-pages/`. The existing Pages workflow publishes that directory. The separate `npm run build` command remains available for the Vinext/Cloudflare-compatible output.

## Credits and licensing

Game design, writing, UI, CSS pixel artwork and code are original. The Gothic Great Hall, Haunted Forest, and raster atlas source imagery were generated specifically for this project with OpenAI image generation, then keyed, integrated and animated for the game; they are stored under `src/assets/`. No third-party game sprites, maps, music, fonts, ripped assets, or proprietary franchise material are included.

Music, ambience, and sound effects are original runtime synthesis authored in `src/core/AudioManager.ts`; provenance is documented in `src/assets/audio/README.md`. Future recorded audio must be original, public-domain, or accompanied by its license record before inclusion.
