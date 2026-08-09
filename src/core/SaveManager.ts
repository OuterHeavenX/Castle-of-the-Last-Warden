import type { SaveData } from "../game/types";
const KEY="last-warden-save-v1";
export const freshSave=():SaveData=>({version:1,name:"The Warden",level:1,xp:0,jp:80,hp:100,maxHp:100,gold:120,castleXp:0,castleLevel:1,weapon:"Warden Sword",relic:"Bloodstone",learned:[],inventory:["Warden Sword","Pilgrim Coat","Bloodstone","Red Tonic"],bestiary:{},relationship:1,defenses:{},westernHall:false,playtime:0,savedAt:new Date().toISOString()});
export const SaveManager={
  load():SaveData|null{try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):null}catch{return null}},
  save(data:SaveData){localStorage.setItem(KEY,JSON.stringify({...data,savedAt:new Date().toISOString()}))},
  has(){return typeof window!=="undefined"&&!!localStorage.getItem(KEY)},
};
