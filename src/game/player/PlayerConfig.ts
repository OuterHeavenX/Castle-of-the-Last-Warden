export const PLAYER_MOVEMENT = {
  worldMinX: 50,
  worldMaxX: 950,
  spawnX: 220,
  floorY: 0,
  colliderWidth: 26,
  colliderHeight: 58,
  maxSpeed: 240,
  groundAcceleration: 1800,
  groundDeceleration: 2200,
  turnAcceleration: 2800,
  airAcceleration: 900,
  gravity: 1800,
  fallGravityMultiplier: 1.18,
  jumpVelocity: 650,
  jumpCutMultiplier: 0.48,
  coyoteTime: 0.1,
  jumpBuffer: 0.13,
  maxFrameDt: 0.05,
  worldToRenderY: 0.45,
} as const;

export const ROOM_GEOMETRY = {
  forge: { minX: 50, maxX: 319, floorY: 0 },
  hall: { minX: 320, maxX: 649, floorY: 0 },
  courtyard: { minX: 650, maxX: 950, floorY: 0 },
  gate: { minX: 50, maxX: 950, floorY: 0 },
  forest: { minX: 50, maxX: 950, floorY: 0 },
} as const;

export const INTERACTIONS = {
  elara: { x: 130, radius: 170 },
  castleMap: { x: 500, radius: 230 },
  nightBell: { x: 810, radius: 90 },
  westernHall: { x: 940, radius: 55 },
} as const;
