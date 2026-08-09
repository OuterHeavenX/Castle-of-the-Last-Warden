export type StageRoom="forge"|"hall"|"courtyard"|"gate"|"forest";
import { RasterSprite } from "./RasterSprite";

export function WorldStage({room,night=false,restored=false}:{room:StageRoom;night?:boolean;restored?:boolean}){
  return <div className={`stage-art stage-${room} ${night?"stage-night":""} ${restored?"stage-restored":""}`} aria-hidden="true">
    <div className="sky-layer"><i className="pixel-moon"/><i className="cloud cloud-a"/><i className="cloud cloud-b"/><i className="distant-castle"/></div>
    <div className="back-layer"><i className="arch arch-a"/><i className="arch arch-b"/><i className="arch arch-c"/><i className="banner banner-a"/><i className="banner banner-b"/><i className="chandelier"/></div>
    <div className="prop-layer"><i className="forge-fire"/><i className="anvil"/><i className="weapon-rack"/><i className="barrels"/><i className="statue statue-a"/><i className="statue statue-b"/><i className="fountain"/><i className="gate-art"/><RasterSprite sheet="defenses" className="prop-gate"/><RasterSprite sheet="defenses" className="prop-chest"/></div>
    <div className="light-layer"><i/><i/><i/><i/><i/></div><div className="dust-layer"/><div className="foreground-layer"><i className="column-left"/><i className="column-right"/><i className="chain"/></div>
  </div>;
}
