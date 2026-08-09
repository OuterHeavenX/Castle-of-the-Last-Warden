# Warden Movement 2.0

The Warden uses an authoritative world-space controller. Input feeds `PlayerController`, physics updates at a fixed 120 Hz inside `requestAnimationFrame`, and rendering observes the resulting position and movement mode. Animation never changes gameplay position.

## Coordinate and collision model

- World X range: 50–950 units; presentation converts ten world units to one percent of stage width.
- Floor: Y = 0; positive Y is above the floor.
- Collider: 26 × 58 world units, independent of the sprite dimensions.
- Current flat rooms share the world bounds. Forge, Great Hall, and Courtyard thresholds live in `PlayerConfig.ts`; interactions use world-space positions and radii.
- Live physics is transient and is deliberately excluded from save data. Loading uses the configured spawn point.

## Tuning

All constants live in `src/game/player/PlayerConfig.ts`:

- Maximum speed: 240 units/s
- Ground acceleration: 1,800 units/s²
- Ground deceleration: 2,200 units/s²
- Turn acceleration: 2,800 units/s²
- Air acceleration: 900 units/s²
- Gravity: 1,800 units/s² (1.18× while falling)
- Jump velocity: 650 units/s
- Early-release jump cut: 0.48× upward velocity
- Coyote time: 100 ms
- Jump buffer: 130 ms
- Maximum accepted frame delta: 50 ms

## Input safety

Keyboard and touch update the same `PlayerInput` abstraction. Touch pointers are tracked independently and captured per button. Pointer up, pointer cancel, lost capture, blur, visibility loss, and orientation changes clear stale held input.

## Diagnostics and tests

Append `?debugMovement=1` to show position, velocity, grounded state, facing, input, FPS, delta time, and room. Run `npm run test:movement` for controller tests and 30/60/120 FPS consistency checks.
