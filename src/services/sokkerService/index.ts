import axios from "axios";
import { SOKKER_API_URL, SOKKER_XML_API_URL } from "@/constants/sokker";

import {
  SokkerAuthenticationReason,
  SokkerAuthentication,
  SokkerTeamDetail,
  SokkerCurrentDay,
  SokkerAdvertDetail,
  SokkerPlayersDetail,
  SokkerPlayer,
  SokkerJuniorDetail,
  SokkerTrainersDetail,
  SokkerTransferDetail,
  SokkerCountriesDetail,
  SokkerCountry,
  SokkerRegionsDetail,
  SokkerRegion,
  SokkerLeague,
} from "./types";
import transformXML from "./transform";
import {
  convertAdvertDetail,
  convertCountriesDetail,
  convertCountry,
  convertCurrentDay,
  convertJuniorDetail,
  convertLeague,
  convertPlayer,
  convertPlayerDetail,
  convertPlayersDetail,
  convertRegion,
  convertRegionsDetail,
  convertTeamDetail,
  convertTrainersDetail,
  convertTransfersDetail,
} from "./converters";

class SokkerService {
  static async authenticate(username: string, password: string): Promise<SokkerAuthentication> {
    try {
      if (!username || !password) throw new Error("No User and Pass given");

      const result = await axios.post<string>(
        `${SOKKER_API_URL}/start.php?session=xml`,
        {
          ilogin: username,
          ipassword: "password",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log({ result });
      const [authStatus, errorno] = result.data.split(" ");

      if (authStatus === "FAILED") {
        // Get error number and return proper status
        const [_, nro] = errorno.split("=");
        return {
          authenticated: false,
          reason: Number(nro) as SokkerAuthenticationReason,
          team_id: undefined,
        };
      } else {
        // Get Team ID
        const [_, team_id] = errorno.split("=");
        return {
          authenticated: true,
          reason: SokkerAuthenticationReason.OK,
          team_id: Number(team_id),
        };
      }
    } catch (error) {
      throw error;
    }
  }

  static async getTeam(team_id: number): Promise<any> {
    const path = "http://localhost:3000/xml/team.xml"; // `${SOKKER_XML_API_URL}/team-${team_id}.xml`;
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const team = await transformXML<SokkerTeamDetail>(result.data, convertTeamDetail);

    return team;
  }

  static async getPlayers(team_id: number): Promise<SokkerPlayersDetail> {
    const path = "http://localhost:3000/xml/players.xml"; //`${SOKKER_XML_API_URL}/players-${team_id}.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const players = await transformXML(result.data, convertPlayersDetail);

    return players;
  }

  static async getPlayer(player_id: number): Promise<SokkerPlayer> {
    const path = "http://localhost:3000/xml/player.xml"; //`${SOKKER_XML_API_URL}/player-${player_id}.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const player = await transformXML(result.data, convertPlayer);

    return player;
  }

  static async getJuniors(): Promise<SokkerJuniorDetail> {
    const path = "http://localhost:3000/xml/juniors.xml"; // `${SOKKER_XML_API_URL}/juniors.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const juniors = await transformXML(result.data, convertJuniorDetail);

    return juniors;
  }

  static async getTrainers(): Promise<SokkerTrainersDetail> {
    const path = "http://localhost:3000/xml/trainers.xml"; //`${SOKKER_XML_API_URL}/trainers.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const trainers = await transformXML(result.data, convertTrainersDetail);

    return trainers;
  }

  static async getAdverts(): Promise<SokkerAdvertDetail> {
    const path = "http://localhost:3000/xml/reports.xml"; //`${SOKKER_XML_API_URL}/reports.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const adverts = await transformXML<SokkerAdvertDetail>(result.data, convertAdvertDetail);
    return adverts;
  }

  static async getCurrentDay(): Promise<SokkerCurrentDay> {
    const path = "http://localhost:3000/xml/vars.xml";
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const currentDay = transformXML<SokkerCurrentDay>(result.data, convertCurrentDay);

    return currentDay;
  }

  static async getTransfers(): Promise<SokkerTransferDetail> {
    const path = "http://localhost:3000/xml/transfers.xml"; // `${SOKKER_XML_API_URL}/transfers.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const transfers = await transformXML(result.data, convertTransfersDetail);

    return transfers;
  }

  static async getCountries(): Promise<SokkerCountriesDetail> {
    const path = "http://localhost:3000/xml/countries.xml"; //`${SOKKER_XML_API_URL}/countries.xml`;
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const countries = await transformXML(result.data, convertCountriesDetail);

    return countries;
  }

  static async getCountry(country_id: number): Promise<SokkerCountry> {
    const path = "http://localhost:3000/xml/country.xml"; //`${SOKKER_XML_API_URL}/country-${country_id}.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const country = await transformXML(result.data, convertCountry);

    return country;
  }

  static async getRegions(country_id: number): Promise<SokkerRegionsDetail> {
    const path = "http://localhost:3000/xml/regions.xml"; //`${SOKKER_XML_API_URL}/regions-${country_id}.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const regions = await transformXML(result.data, convertRegionsDetail);

    return regions;
  }

  static async getRegion(region_id: number): Promise<SokkerRegion> {
    const path = "http://localhost:3000/xml/region.xml"; //`${SOKKER_XML_API_URL}/region-${region_id}.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const region = await transformXML(result.data, convertRegion);

    return region;
  }

  static async getLeagueByID(league_id: number): Promise<SokkerLeague> {
    const path = "http://localhost:3000/xml/league.xml"; //`${SOKKER_XML_API_URL}/league-${league_id}.xml`
    const result = await axios.get<string>(path, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    const league = await transformXML(result.data, convertLeague);

    return league;
  }
  static async getLeague(country_id: number, division: number, nro: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/league-${country_id}-${division}-${nro}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getMatchesByLeague(league_id: number, round: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/matches-league-${league_id}-${round}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getMatchesByTeam(team_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/matches-team-${team_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getMatch(match_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/match-${match_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }
}

export default SokkerService;
