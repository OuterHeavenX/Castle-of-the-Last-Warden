export class PlayerInput {
  private keys=new Set<string>();
  private pointers=new Map<number,-1|1>();
  private jumpHeld=false;
  private jumpPress=false;
  private jumpRelease=false;

  keyDown(key:string){this.keys.add(key.toLowerCase())}
  keyUp(key:string){this.keys.delete(key.toLowerCase())}
  direction(){const left=this.keys.has("a")||this.keys.has("arrowleft")||[...this.pointers.values()].includes(-1);const right=this.keys.has("d")||this.keys.has("arrowright")||[...this.pointers.values()].includes(1);return (left===right?0:left?-1:1) as -1|0|1}
  holdDirection(pointerId:number,direction:-1|1){this.pointers.set(pointerId,direction)}
  releasePointer(pointerId:number){this.pointers.delete(pointerId)}
  pressJump(){if(!this.jumpHeld)this.jumpPress=true;this.jumpHeld=true}
  releaseJump(){if(this.jumpHeld)this.jumpRelease=true;this.jumpHeld=false}
  consumeJumpPress(){const value=this.jumpPress;this.jumpPress=false;return value}
  consumeJumpRelease(){const value=this.jumpRelease;this.jumpRelease=false;return value}
  isJumpHeld(){return this.jumpHeld}
  clear(){this.keys.clear();this.pointers.clear();this.jumpHeld=false;this.jumpPress=false;this.jumpRelease=false}
}
