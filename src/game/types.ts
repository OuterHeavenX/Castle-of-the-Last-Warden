export type Scene = "title" | "castle" | "forest" | "defense";
export type EnemyKind = "wretch" | "hound" | "shade" | "knight" | "bat" | "bellbeast";
export type SaveData = {
  version: 1; name: string; level: number; xp: number; jp: number; hp: number; maxHp: number;
  gold: number; castleXp: number; castleLevel: number; weapon: string; relic: string;
  learned: string[]; inventory: string[]; bestiary: Record<string, number>; relationship: number;
  defenses: Record<string, number>; westernHall: boolean; playtime: number; savedAt: string;
};
export type Enemy = { id: number; kind: EnemyKind; x: number; hp: number; maxHp: number; speed: number; damage: number; color: string };
