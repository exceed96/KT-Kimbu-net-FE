export type TPitcherInfo = {
  팀명: string;
  name: string;
  image: string;
  ERA: string;
  G: string;
  CG: string;
  SHO: string;
  W: string;
  L: string;
  SV: string;
  HLD: string;
  WPCT: string;
  TBF: string;
  NP: string;
  IP: string;
  H: string;
  "2B": string;
  "3B": string;
  HR: string;
  SAC: string;
  SF: string;
  BB: string;
  IBB: string;
  SO: string;
  WP: string;
  BK: string;
  R: string;
  ER: string;
  BSV: string;
  WHIP: string;
  AVG: string;
  QS: string;
  WAR: string;
  FIP: string;
};

export type THitterInfo = {
  팀명: string;
  name: string;
  image: string;
  order: string;
  AVG: string;
  G: string;
  PA: string;
  AB: string;
  R: string;
  H: string;
  "2B": string;
  "3B": string;
  HR: string;
  TB: string;
  RBI: string;
  SB: string;
  CS: string;
  SAC: string;
  SF: string;
  BB: string;
  IBB: string;
  HBP: string;
  SO: string;
  GDP: string;
  SLG: string;
  OBP: string;
  E: string;
  "SB%": string;
  MH: string;
  OPS: string;
  RISP: string;
  "PH-BA": string;
  "WRC+": string;
  WAR: string;
};

export type TselectHitter = {
  selectTeam: "KT" | "OPPONENT" | null;
  selectHitter: THitterInfo;
  selectPitcher: TPitcherInfo;
};

export type TUseSelectHitterState = {
  select: TselectHitter;
  setSelectHitter: (selectHitter: TselectHitter) => void;
};