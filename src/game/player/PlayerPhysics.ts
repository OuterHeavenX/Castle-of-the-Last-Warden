import { PLAYER_MOVEMENT } from "./PlayerConfig";
import type { PlayerState } from "./PlayerState";

const approach=(value:number,target:number,amount:number)=>value<target?Math.min(target,value+amount):Math.max(target,value-amount);

export function simulatePlayer(state:PlayerState,rawDt:number){
  const dt=Math.min(Math.max(rawDt,0),PLAYER_MOVEMENT.maxFrameDt);
  const input=state.inputDirection;
  if(input)state.facing=input<0?"left":"right";

  const target=input*PLAYER_MOVEMENT.maxSpeed;
  const turning=input!==0&&state.vx!==0&&Math.sign(state.vx)!==input;
  const acceleration=state.grounded?(turning?PLAYER_MOVEMENT.turnAcceleration:input?PLAYER_MOVEMENT.groundAcceleration:PLAYER_MOVEMENT.groundDeceleration):PLAYER_MOVEMENT.airAcceleration;
  state.vx=approach(state.vx,target,acceleration*dt);

  state.coyoteRemaining=state.grounded?PLAYER_MOVEMENT.coyoteTime:Math.max(0,state.coyoteRemaining-dt);
  state.jumpBufferRemaining=Math.max(0,state.jumpBufferRemaining-dt);
  if(state.jumpRequested){state.jumpBufferRemaining=PLAYER_MOVEMENT.jumpBuffer;state.jumpRequested=false}
  if(state.jumpBufferRemaining>0&&(state.grounded||state.coyoteRemaining>0)){
    state.vy=PLAYER_MOVEMENT.jumpVelocity;state.grounded=false;state.coyoteRemaining=0;state.jumpBufferRemaining=0;
  }

  if(!state.grounded){
    const fallMultiplier=state.vy<0?PLAYER_MOVEMENT.fallGravityMultiplier:1;
    state.vy-=PLAYER_MOVEMENT.gravity*fallMultiplier*dt;
    state.y+=state.vy*dt;
    if(state.y<=PLAYER_MOVEMENT.floorY){state.y=PLAYER_MOVEMENT.floorY;state.vy=0;state.grounded=true}
  }
  state.x=Math.max(PLAYER_MOVEMENT.worldMinX,Math.min(PLAYER_MOVEMENT.worldMaxX,state.x+state.vx*dt));
  if((state.x===PLAYER_MOVEMENT.worldMinX&&state.vx<0)||(state.x===PLAYER_MOVEMENT.worldMaxX&&state.vx>0))state.vx=0;
  state.movementMode=!state.grounded?(state.vy>=0?"jump":"fall"):Math.abs(state.vx)>8?"walk":"idle";
  return dt;
}

export function cutJump(state:PlayerState){if(!state.grounded&&state.vy>0)state.vy*=PLAYER_MOVEMENT.jumpCutMultiplier}
