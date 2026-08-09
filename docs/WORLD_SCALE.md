# Canonical World Scale

Version 0.1 uses a single 48×64 conceptual actor cell. The generated source atlases are higher-resolution masters, cropped as fixed 8-column grids and rendered with `image-rendering: pixelated`.

| Element | Character units | Target rendered height |
| --- | ---: | ---: |
| Warden | 1.00 | 72 CSS px desktop; 64 CSS px phone landscape |
| Elara / humanoid NPC | 0.98–1.05 | 70–76 px |
| Grave Wretch / Rust Knight | 0.95–1.15 | 68–83 px |
| Briar Hound / Moon Bat | 0.75–0.90 | 54–65 px |
| Hollow Shade | 1.10 | 79 px |
| Bell Tower Beast | 1.80 | 130 px |
| Door / sealed gate | 2.10 | 151 px |
| Anvil | 0.52 | 37 px |
| Crossbow turret | 0.90 | 65 px |
| Fire Crystal / Holy Statue | 0.95–1.15 | 68–83 px |
| Night Bell assembly | 1.65 | 119 px |

Actors share one floor baseline. Contact shadows sit two pixels below the sprite cell. World positioning is rounded to whole CSS pixels and raster sheets never use bilinear filtering.
