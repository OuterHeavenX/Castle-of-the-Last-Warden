import type { CSSProperties } from "react";
import wardenAtlas from "../assets/characters/warden/warden-atlas.png";
import elaraAtlas from "../assets/characters/elara/elara-atlas.png";
import enemyAtlas from "../assets/enemies/enemy-atlas.png";
import defenseAtlas from "../assets/defenses/defense-atlas.png";

const sources={warden:wardenAtlas,elara:elaraAtlas,enemies:enemyAtlas,defenses:defenseAtlas};
export function RasterSprite({sheet,className="",label}:{sheet:keyof typeof sources;className?:string;label?:string}){
  return <span role={label?"img":undefined} aria-label={label} aria-hidden={label?undefined:true} className={`raster-sprite sheet-${sheet} ${className}`} style={{"--atlas":`url(${sources[sheet]})`} as CSSProperties}><i className="sprite-fallback"/></span>;
}
