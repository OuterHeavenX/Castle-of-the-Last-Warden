export const SKILLS = [
  {id:"guard", discipline:"KNIGHT", name:"Guard", cost:50, text:"Reduce incoming damage by 35%."},
  {id:"power", discipline:"KNIGHT", name:"Power Strike", cost:100, text:"A heavy attack that deals double damage."},
  {id:"fire", discipline:"BLACK MAGIC", name:"Fire", cost:75, text:"Launch a piercing ember."},
  {id:"lore", discipline:"HUNTER", name:"Monster Lore", cost:60, text:"Research grows twice as fast."},
];
export const DEFENSES = [
  {id:"crossbow", name:"Crossbow Turret", icon:"♜", cost:40, text:"Fast physical bolts"},
  {id:"spikes", name:"Spike Trap", icon:"♒", cost:30, text:"Damages enemies at the gate"},
  {id:"fire", name:"Fire Crystal", icon:"♦", cost:55, text:"Piercing fire damage"},
  {id:"holy", name:"Holy Statue", icon:"†", cost:65, text:"Slows shades and heals the Warden"},
];
export const BESTIARY: Record<string,{name:string; weak:string; drop:string; lore:string}> = {
  wretch:{name:"Grave Wretch",weak:"Fire",drop:"Grave Dust",lore:"The soil remembers every broken oath."},
  hound:{name:"Briar Hound",weak:"Steel",drop:"Black Pelt",lore:"Forest predators remade by bell-song."},
  shade:{name:"Hollow Shade",weak:"Holy",drop:"Pale Thread",lore:"A silhouette searching for its owner."},
  knight:{name:"Rust Knight",weak:"Magic",drop:"Old Rivet",lore:"Armor still obeying a forgotten command."},
  bat:{name:"Moon Bat",weak:"Crossbow",drop:"Night Wing",lore:"Harmless alone. Hungry in a choir."},
  bellbeast:{name:"Bell Tower Beast",weak:"Fire / Holy",drop:"Gargoyle Heart",lore:"The old belfry gave its grief a body."},
};
