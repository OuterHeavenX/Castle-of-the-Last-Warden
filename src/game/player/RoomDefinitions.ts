import { INTERACTIONS, ROOM_GEOMETRY } from "./PlayerConfig";
import type { StageRoom } from "../../ui/WorldStage";

export const worldToPercent=(x:number)=>x/10;
export const roomAt=(x:number):StageRoom=>x<ROOM_GEOMETRY.forge.maxX?"forge":x<ROOM_GEOMETRY.hall.maxX?"hall":"courtyard";
export const near=(x:number,target:{x:number;radius:number})=>Math.abs(x-target.x)<=target.radius;
export const interactionAt=(x:number,westernHall:boolean)=>near(x,INTERACTIONS.elara)?"elara":near(x,INTERACTIONS.nightBell)?"bell":near(x,INTERACTIONS.westernHall)?westernHall?"western":"sealed":near(x,INTERACTIONS.castleMap)?"map":null;
