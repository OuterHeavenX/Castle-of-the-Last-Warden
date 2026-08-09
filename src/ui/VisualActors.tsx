import type { ActorPhase, EnemyKind } from "../game/types";
import { RasterSprite } from "./RasterSprite";

export type WardenPhase="idle"|"walk"|"jump"|"fall"|"land"|"attack"|"hurt"|"death";
export function WardenSprite({phase="idle",attacking}:{phase?:WardenPhase;attacking?:boolean}){
  const state=attacking?"attack":phase;
  return <RasterSprite sheet="warden" label="The Warden" className={`warden-sprite anim-${state}`}/>;
}
export function ElaraSprite({talking=false,working=true}:{talking?:boolean;working?:boolean}){return <RasterSprite sheet="elara" label="Elara the blacksmith" className={`elara-sprite ${talking?"anim-talk":working?"anim-hammer":"anim-idle"}`}/>}
export function EnemySprite({kind,phase="move"}:{kind:EnemyKind;phase?:ActorPhase}){return <RasterSprite sheet="enemies" label={kind} className={`enemy-${kind} anim-${phase}`}/>}
export function DefenseSprite({kind,firing=false}:{kind:string;firing?:boolean}){return <RasterSprite sheet="defenses" label={kind} className={`defense-${kind} anim-defense ${firing?"is-firing":""}`}/>}
export function BellSprite({ringing=false}:{ringing?:boolean}){return <RasterSprite sheet="defenses" label="Night Bell" className={`bell-sprite ${ringing?"anim-ringing":""}`}/>}
