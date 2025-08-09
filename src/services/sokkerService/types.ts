export enum SokkerAuthenticationReason {
  OK = 0,
  BAD_PASSWORD = 1,
  NO_TEAM = 3,
  USER_BANNED = 4,
  USER_BANKRUPT = 5,
  USER_BLACKLISTED = 6,
}

export type SokkerAuthentication = {
  authenticated: boolean;
  team_id?: number;
  reason: SokkerAuthenticationReason;
};

export type SokerTeam = {
  teamID: number;
  name: string;
  countryID: number;
  regionID: number;
  dateCreated: Date | string;
  rank: number;
  national: boolean;
  colShirtKeep: number;
  colTrausKeep: number;
  colShirt: number;
  colTraus: number;
  colShirt2: number;
  colTraus2: number;
  arenaName: string;
  money: number;
  trainingType: TrainingType;
  fanclubCount: number;
  fanclubMood: number; // typilize?
};

export enum TrainingType {
  Condition = 1,
  Goalkeeper = 2,
  Technique = 5,
  Pace = 8,
}

export enum TrainingPosition {
  Goalkeeper = 0,
  Defender = 1,
  Midfielder = 2,
  Scorer = 3,
}

export enum TrainerJob {
  Trainer = 1,
  Assistant = 2,
  Junior = 3,
}

export enum LeagueType {
  League = 0,
  Cup = 1,
  Clasification = 2,
  Friendly = 3,
  WorldCupGroup = 4,
  WorldCupFinals = 6,
  JuniorLeague = 7,
  InternationalClubCup = 9,
  InternationalFriendly = 10,
}

export type SokkerUser = {
  userID: string;
  login: string;
};

export type SokkerTeamDetail = {
  team: SokerTeam;
  user: SokkerUser;
};

export type SokkerCurrentDay = {
  week: number;
  day: number;
};

export type SokkerAdvert = {
  reportID: number;
  type: number;
  playerID: number;
  date: Date | string;
  value: number;
  week: number;
};

export type SokkerAdvertDetail = {
  report: SokkerAdvert[];
  teamID: number;
};

export type SokkerPlayersDetail = {
  players: SokkerPlayer[];
};

export type SokkerPlayerDetail = {
  player: SokkerPlayer;
};

export type SokkerPlayer = {
  ID: number;
  name: string;
  surname: string;
  countryID: number;
  age: number;
  height: number;
  weight: number;
  bmi: number;
  teamID: number;
  youthTeamID: number;
  value: number;
  wage: number;
  statistics: SokkerPlayerStatistics;
  ntStatistics: SokkerPlayerStatistics;
  injuryDays: number;
  national: boolean;
  trainingPosition: TrainingPosition;
  isTraining: boolean;
  isTransferListed: boolean;
  skills: SokkerPlayerSkills;
};

export type SokkerPlayerStatistics = {
  cards: number;
  goals: number;
  assists: number;
  matches: number;
};

export type SokkerPlayerSkills = {
  form: number;
  experience: number;
  teamwork: number;
  discipline: number;
  stamina: number;
  pace: number;
  technique: number;
  passing: number;
  keeper: number;
  defending: number;
  playmaking: number;
  scoring: number;
};

export type SokkerJuniorDetail = {
  juniors: SokkerJunior[];
};

export type SokkerJunior = {
  ID: number;
  name: string;
  surname: string;
  age: number;
  height: number;
  weight: number;
  bmi: number;
  skill: number;
  formation: boolean;
  weeks: number;
};

export type SokkerTrainersDetail = {
  trainers: SokkerTrainer[];
};

export type SokkerTrainer = {
  ID: number;
  name: string;
  surname: string;
  countryID: number;
  age: number;
  teamID: number;
  wage: number;
  contracted: boolean;
  job: TrainerJob;
  skills: SokkerTrainerSkills;
};

export type SokkerTrainerSkills = {
  stamina: number;
  pace: number;
  technique: number;
  passing: number;
  keeper: number;
  defending: number;
  playmaking: number;
  scoring: number;
  coach: number;
};

export type SokkerTransferDetail = {
  teamID: number;
  transfers: SokkerTransfer[];
};

export type SokkerTransfer = {
  ID: number;
  seller: SokkerTransferTeam;
  buyer: SokkerTransferTeam;
  playerID: number;
  date: Date | string;
  price: number;
  value: number;
};

export type SokkerTransferTeam = {
  ID: number;
  name: string;
};

export type SokkerCountriesDetail = {
  countries: SokkerCountry[];
};

export type SokkerCountry = {
  countryID: number;
  name: string;
  currencyName: string;
  currencyRate: number;
};

export type SokkerRegionsDetail = {
  regions: SokkerRegion[];
};

export type SokkerRegion = {
  regionID: number;
  countryID: number;
  name: string;
  weather: number;
};

export type SokkerLeague = {
  info: SokkerLeagueInfo;
  teams: SokkerLeagueTeam[];
};
export type SokkerLeagueInfo = {
  leagueID: number;
  name: string;
  countryID: number;
  division: number;
  round: number;
  season: number;
  type: LeagueType;
  isOfficial: boolean;
  isCup: boolean;
};

export type SokkerLeagueTeam = {
  teamID: number;
  round: number;
  points: number;
  winds: number;
  draws: number;
  losses: number;
  goalsScored: number;
  goalsAgainst: number;
  rankTotal: number;
};
