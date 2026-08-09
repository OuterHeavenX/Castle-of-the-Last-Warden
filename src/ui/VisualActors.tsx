import type { EnemyKind } from "../game/types";
import { RasterSprite } from "./RasterSprite";

export function WardenSprite({attacking,jumping=false,moving=false,hurt=false,dead=false}:{attacking:boolean;jumping?:boolean;moving?:boolean;hurt?:boolean;dead?:boolean}){
  const state=dead?"death":hurt?"hurt":attacking?"attack":jumping?"jump":moving?"walk":"idle";
  return <RasterSprite sheet="warden" label="The Warden" className={`warden-sprite anim-${state}`}/>;
}
export function ElaraSprite({talking=false}:{talking?:boolean}){return <RasterSprite sheet="elara" label="Elara the blacksmith" className={`elara-sprite ${talking?"anim-talk":"anim-hammer"}`}/>}
export function EnemySprite({kind,hurt=false,dead=false}:{kind:EnemyKind;hurt?:boolean;dead?:boolean}){return <RasterSprite sheet="enemies" label={kind} className={`enemy-${kind} ${hurt?"anim-hurt":dead?"anim-death":"anim-enemy"}`}/>}
export function DefenseSprite({kind}:{kind:string}){return <RasterSprite sheet="defenses" label={kind} className={`defense-${kind} anim-defense`}/>}
export function BellSprite({ringing=false}:{ringing?:boolean}){return <RasterSprite sheet="defenses" label="Night Bell" className={`bell-sprite ${ringing?"anim-ringing":""}`}/>}
