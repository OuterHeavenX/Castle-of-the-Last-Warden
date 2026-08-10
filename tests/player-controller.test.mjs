import assert from "node:assert/strict";
import test from "node:test";
import { PlayerController, interactionAt } from "../dist-movement/player-controller.js";

const run=(controller,seconds,fps)=>{for(let i=0;i<seconds*fps;i++)controller.step(1/fps)};
const jumpStats=(fps,releaseAt=Infinity)=>{const p=new PlayerController();p.input.pressJump();let peak=0,air=0;for(let i=0;i<fps*2;i++){if(i/fps>=releaseAt)p.input.releaseJump();p.step(1/fps);peak=Math.max(peak,p.state.y);if(!p.state.grounded)air+=1/fps;if(i>2&&p.state.grounded)break}return{peak,air}};

test("accelerates, decelerates, reverses, and respects walls",()=>{const p=new PlayerController();p.input.keyDown("d");run(p,.5,60);assert.ok(p.state.vx>200);const movingX=p.state.x;p.input.keyUp("d");run(p,.2,60);assert.ok(Math.abs(p.state.vx)<1);assert.ok(p.state.x>movingX);p.input.keyDown("a");run(p,.25,60);assert.ok(p.state.vx<0);run(p,10,60);assert.equal(p.state.x,50);assert.equal(p.state.vx,0)});

test("jump uses gravity, lands, and supports variable height",()=>{const full=jumpStats(60),short=jumpStats(60,.09);assert.ok(full.peak>100);assert.ok(short.peak<full.peak*.75);assert.ok(full.air>.55&&full.air<1.2)});

test("buffers jump before landing",()=>{const p=new PlayerController();p.state.grounded=false;p.state.y=3;p.state.vy=-100;p.input.pressJump();run(p,.05,60);assert.equal(p.state.grounded,false);assert.ok(p.state.vy>0)});

test("allows and expires coyote time",()=>{const allowed=new PlayerController();allowed.state.grounded=false;allowed.state.y=20;allowed.state.coyoteRemaining=.05;allowed.input.pressJump();allowed.step(.016);assert.ok(allowed.state.vy>0);const denied=new PlayerController();denied.state.grounded=false;denied.state.y=20;denied.state.coyoteRemaining=0;denied.input.pressJump();denied.step(.016);assert.ok(denied.state.vy<0)});

test("travel and jump remain stable at 30, 60, and 120 fps",()=>{const distances=[],jumps=[];for(const fps of [30,60,120]){const p=new PlayerController();p.input.keyDown("d");run(p,2,fps);distances.push(p.state.x);jumps.push(jumpStats(fps))}assert.ok(Math.max(...distances)-Math.min(...distances)<3);assert.ok(Math.max(...jumps.map(x=>x.peak))-Math.min(...jumps.map(x=>x.peak))<5);assert.ok(Math.max(...jumps.map(x=>x.air))-Math.min(...jumps.map(x=>x.air))<.05)});

test("caps a resumed 500 ms frame",()=>{const p=new PlayerController();p.input.keyDown("d");p.step(.5);assert.ok(p.state.x<230)});

test("combines direction and jump without dropping either input",()=>{const p=new PlayerController();p.input.holdDirection(11,1);p.input.pressJump();run(p,.1,60);assert.ok(p.state.x>220);assert.ok(p.state.y>0);p.input.releaseJump();run(p,.1,60);assert.ok(p.state.vx>0);p.input.releasePointer(11);run(p,.3,60);assert.ok(Math.abs(p.state.vx)<1)});

test("clearing interrupted input prevents stuck movement",()=>{const p=new PlayerController();p.input.holdDirection(21,-1);run(p,.2,60);assert.ok(p.state.vx<0);p.input.clear();run(p,.2,60);assert.equal(p.state.inputDirection,0);assert.ok(Math.abs(p.state.vx)<1)});

test("world interactions only appear inside their proximity zones",()=>{assert.equal(interactionAt(130,false),"elara");assert.equal(interactionAt(500,false),"map");assert.equal(interactionAt(810,false),"bell");assert.equal(interactionAt(940,false),"sealed");assert.equal(interactionAt(350,false),null);assert.equal(interactionAt(940,true),"western")});
