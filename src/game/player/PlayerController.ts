import { PLAYER_MOVEMENT } from "./PlayerConfig";
import { cutJump, simulatePlayer } from "./PlayerPhysics";
import { PlayerInput } from "./PlayerInput";
import { createPlayerState, type PlayerState } from "./PlayerState";

export class PlayerController {
  readonly input=new PlayerInput();
  readonly state:PlayerState;
  private accumulator=0;
  private readonly fixedStep=1/120;
  constructor(x=PLAYER_MOVEMENT.spawnX){this.state=createPlayerState(x)}
  step(rawDt:number){const dt=Math.min(Math.max(rawDt,0),PLAYER_MOVEMENT.maxFrameDt);this.state.inputDirection=this.input.direction();if(this.input.consumeJumpPress())this.state.jumpRequested=true;if(this.input.consumeJumpRelease())cutJump(this.state);this.accumulator+=dt;while(this.accumulator+1e-9>=this.fixedStep){simulatePlayer(this.state,this.fixedStep);this.accumulator-=this.fixedStep}return dt}
  reset(x=PLAYER_MOVEMENT.spawnX){Object.assign(this.state,createPlayerState(x));this.accumulator=0;this.input.clear()}
  setEnabled(enabled:boolean){if(!enabled)this.input.clear()}
  snapshot(){return{...this.state}}
}

export { interactionAt } from "./RoomDefinitions";
