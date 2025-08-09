import { ConverterFunction } from "@/types/common";
import {
  SokerTeam,
  SokkerAdvert,
  SokkerAdvertDetail,
  SokkerCountriesDetail,
  SokkerCountry,
  SokkerCurrentDay,
  SokkerJunior,
  SokkerJuniorDetail,
  SokkerLeague,
  SokkerLeagueInfo,
  SokkerLeagueTeam,
  SokkerPlayer,
  SokkerPlayerDetail,
  SokkerPlayersDetail,
  SokkerRegion,
  SokkerRegionsDetail,
  SokkerTeamDetail,
  SokkerTrainer,
  SokkerTrainersDetail,
  SokkerTransfer,
  SokkerTransferDetail,
  SokkerUser,
  TrainingType,
} from "./types";

export const convertTeamDetail: ConverterFunction<SokkerTeamDetail> = (data) => ({
  team: convertTeam(data.team),
  user: convertUser(data.user),
});

export const convertTeam: ConverterFunction<SokerTeam> = (data) => ({
  teamID: Number(data.teamID),
  name: data.name,
  countryID: data.countryID,
  regionID: data.regionID,
  dateCreated: data.dateCreated,
  rank: Number(data.rank),
  national: Boolean(Number(data.nation)),
  colShirtKeep: Number(data.colShirtKeep),
  colShirt: Number(data.colShirt),
  colShirt2: Number(data.colShirt2),
  colTraus: Number(data.colTraus),
  colTraus2: Number(data.colTraus2),
  colTrausKeep: Number(data.colTrausKeep),
  arenaName: data.arenaName,
  money: Number(data.money),
  fanclubCount: Number(data.fanclubCount),
  fanclubMood: Number(data.fanclubMood),
  trainingType: Number(data.trainingType) as TrainingType,
});

export const convertUser: ConverterFunction<SokkerUser> = (data) => ({
  userID: data.userID,
  login: data.login,
});

export const convertCurrentDay: ConverterFunction<SokkerCurrentDay> = (data) => ({
  week: Number(data.week),
  day: Number(data.day),
});

export const convertAdvertDetail: ConverterFunction<SokkerAdvertDetail> = (data) => ({
  teamID: Number(data.teamID),
  report: data.report.map(convertAdvert),
});

export const convertAdvert: ConverterFunction<SokkerAdvert> = (data) => ({
  reportID: Number(data.reportID),
  type: Number(data.type),
  playerID: Number(data.playerID),
  date: new Date(data.date),
  value: Number(data.value),
  week: Number(data.week),
});

export const convertPlayersDetail: ConverterFunction<SokkerPlayersDetail> = (data) => ({
  players: data.player.map(convertPlayer),
});
export const convertPlayerDetail: ConverterFunction<SokkerPlayerDetail> = (data) => ({
  player: convertPlayer(data.player),
});

export const convertPlayer: ConverterFunction<SokkerPlayer> = (data) => ({
  ID: Number(data.ID),
  name: data.name,
  surname: data.surname,
  countryID: Number(data.countryID),
  age: Number(data.age),
  height: Number(data.height),
  weight: Number(data.weight),
  bmi: Number(data.BMI),
  teamID: Number(data.teamID),
  youthTeamID: Number(data.youthTeamID),
  value: Number(data.value),
  wage: Number(data.wage),
  statistics: {
    cards: Number(data.cards),
    goals: Number(data.goals),
    matches: Number(data.matches),
    assists: Number(data.assists),
  },
  ntStatistics: {
    cards: Number(data.ntCards),
    goals: Number(data.ntGoals),
    matches: Number(data.ntMatches),
    assists: Number(data.ntAssists),
  },
  injuryDays: Number(data.injuryDays),
  national: Boolean(Number(data.national)),
  trainingPosition: Number(data.trainingPosition),
  isTraining: data.isInTrainingSlot == "true",
  isTransferListed: Boolean(Number(data.transferList)),
  skills: {
    form: Number(data.skillForm),
    experience: Number(data.skillExperience),
    teamwork: Number(data.skillTeamwork),
    discipline: Number(data.skillDiscipline),
    stamina: Number(data.skillStamina),
    pace: Number(data.skillPace),
    technique: Number(data.skillTechnique),
    passing: Number(data.skillPassing),
    keeper: Number(data.skillKeeper),
    defending: Number(data.skillDefending),
    playmaking: Number(data.skillPlaymaking),
    scoring: Number(data.skillScoring),
  },
});

export const convertJuniorDetail: ConverterFunction<SokkerJuniorDetail> = (data) => ({
  juniors: data.junior.map(convertJunior),
});

export const convertJunior: ConverterFunction<SokkerJunior> = (data) => ({
  ID: Number(data.ID),
  name: data.name,
  surname: data.surname,
  age: Number(data.age),
  height: Number(data.height),
  weight: Number(data.weight),
  bmi: Number(data.BMI),
  skill: Number(data.skill),
  formation: Boolean(Number(data.formation)),
  weeks: Number(data.weeks),
});

export const convertTrainersDetail: ConverterFunction<SokkerTrainersDetail> = (data) => ({
  trainers: data.trainer.map(convertTrainer),
});

export const convertTrainer: ConverterFunction<SokkerTrainer> = (data) => ({
  ID: Number(data.ID),
  name: data.name,
  surname: data.surname,
  countryID: Number(data.countryID),
  age: Number(data.age),
  teamID: Number(data.teamID),
  wage: Number(data.wage),
  contracted: Boolean(Number(data.signedContract)),
  job: Number(data.job),
  skills: {
    stamina: Number(data.skillStamina),
    pace: Number(data.skillPace),
    technique: Number(data.skillTechnique),
    passing: Number(data.skillPassing),
    keeper: Number(data.skillKeeper),
    defending: Number(data.skillDefending),
    playmaking: Number(data.skillPlaymaking),
    scoring: Number(data.skillScoring),
    coach: Number(data.skillCoach),
  },
});

export const convertTransfersDetail: ConverterFunction<SokkerTransferDetail> = (data) => ({
  teamID: Number(data.teamID),
  transfers: data.transfer.map(convertTransfer),
});

export const convertTransfer: ConverterFunction<SokkerTransfer> = (data) => ({
  ID: Number(data.ID),
  seller: {
    ID: Number(data.sellerTeamID),
    name: data.sellerTeamName,
  },
  buyer: {
    ID: Number(data.buyerTeamID),
    name: data.buyerTeamName,
  },
  playerID: Number(data.playerID),
  date: new Date(data.date),
  price: Number(data.price),
  value: Number(data.playerValue),
});

export const convertCountriesDetail: ConverterFunction<SokkerCountriesDetail> = (data) => ({
  countries: data.country.map(convertCountry),
});

export const convertCountry: ConverterFunction<SokkerCountry> = (data) => ({
  countryID: Number(data.countryID),
  name: data.name,
  currencyName: data.currencyName,
  currencyRate: Number(data.currencyRate),
});

export const convertRegionsDetail: ConverterFunction<SokkerRegionsDetail> = (data) => ({
  regions: data.region.map(convertRegion),
});

export const convertRegion: ConverterFunction<SokkerRegion> = (data) => ({
  regionID: Number(data.regionID),
  countryID: Number(data.countryID),
  name: data.name,
  weather: Number(data.weather),
});

export const convertLeague: ConverterFunction<SokkerLeague> = (data) => ({
  info: convertLeagueInfo(data.info),
  teams: data.teams.team.map(convertLeagueTeam),
});

export const convertLeagueInfo: ConverterFunction<SokkerLeagueInfo> = (data) => ({
  leagueID: Number(data.leagueID),
  name: data.name,
  countryID: Number(data.countryID),
  division: Number(data.division),
  round: Number(data.round),
  season: Number(data.season),
  type: Number(data.type),
  isOfficial: Boolean(Number(data.isOfficial)),
  isCup: Boolean(Number(data.isCup)),
});

export const convertLeagueTeam: ConverterFunction<SokkerLeagueTeam> = (data) => ({
  teamID: Number(data.teamID),
  round: Number(data.round),
  points: Number(data.points),
  winds: Number(data.wins),
  draws: Number(data.draws),
  losses: Number(data.losses),
  goalsScored: Number(data.goalsScored),
  goalsAgainst: Number(data.goalsLost),
  rankTotal: Number(data.rankTotal),
});
