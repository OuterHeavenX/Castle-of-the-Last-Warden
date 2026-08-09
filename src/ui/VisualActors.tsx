import type { EnemyKind } from "../game/types";

export function WardenSprite({attacking,jumping=false}:{attacking:boolean;jumping?:boolean}){
  return <span className={`pixel-actor warden-sprite ${attacking?"is-attacking":""} ${jumping?"is-jumping":""}`} aria-hidden="true"><i className="actor-shadow"/><i className="coat-back"/><i className="leg leg-a"/><i className="leg leg-b"/><i className="body"/><i className="belt"/><i className="head"/><i className="hair"/><i className="shoulder"/><i className="arm"/><i className="sword"/><i className="crest"/></span>;
}

export function ElaraSprite(){return <span className="pixel-actor elara-sprite" aria-hidden="true"><i className="actor-shadow"/><i className="leg leg-a"/><i className="leg leg-b"/><i className="body"/><i className="apron"/><i className="head"/><i className="hair"/><i className="arm"/><i className="hammer"/></span>}

export function EnemySprite({kind,hurt=false}:{kind:EnemyKind;hurt?:boolean}){
  return <span className={`pixel-enemy enemy-${kind} ${hurt?"is-hurt":""}`} aria-hidden="true"><i className="enemy-shadow"/><i className="enemy-core"/><i className="enemy-head"/><i className="enemy-eye"/><i className="enemy-limb limb-a"/><i className="enemy-limb limb-b"/><i className="enemy-extra"/></span>;
}

export function DefenseSprite({kind}:{kind:string}){
  return <span className={`defense-sprite defense-${kind}`} aria-hidden="true"><i className="defense-base"/><i className="defense-body"/><i className="defense-detail"/><i className="defense-glow"/></span>;
}

export function BellSprite({ringing=false}:{ringing?:boolean}){
  return <span className={`bell-sprite ${ringing?"is-ringing":""}`} aria-hidden="true"><i className="bell-frame left"/><i className="bell-frame right"/><i className="bell-beam"/><i className="bell-metal"/><i className="bell-clapper"/><i className="bell-rope"/><i className="bell-crest"/></span>;
}
