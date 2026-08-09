import { PLAYER_MOVEMENT } from "./PlayerConfig";

export type Facing = "left" | "right";
export type MovementMode = "idle" | "walk" | "jump" | "fall";

export type PlayerState = {
  x: number; y: number; vx: number; vy: number;
  grounded: boolean; facing: Facing; movementMode: MovementMode;
  inputDirection: -1 | 0 | 1; jumpRequested: boolean;
  coyoteRemaining: number; jumpBufferRemaining: number;
};

export const createPlayerState = (x=PLAYER_MOVEMENT.spawnX):PlayerState => ({
  x, y: PLAYER_MOVEMENT.floorY, vx: 0, vy: 0, grounded: true,
  facing: "right", movementMode: "idle", inputDirection: 0,
  jumpRequested: false, coyoteRemaining: PLAYER_MOVEMENT.coyoteTime,
  jumpBufferRemaining: 0,
});
