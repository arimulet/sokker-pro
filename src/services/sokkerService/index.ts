import axios from "axios";
import { SOKKER_API_URL, SOKKER_XML_API_URL } from "@/constants/sokker";

import { SokkerAuthenticationReason, SokkerAuthentication } from "./types";

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

  static async getTeam(team_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/team-${team_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getPlayers(team_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/players-${team_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getPlayer(player_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/player-${player_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getJuniors(): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/juniors.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getTrainers(): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/trainers.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getReports(): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/reports.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getVars(): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/vars.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getTransfers(): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/transfers.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getCountries(): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/countries.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getCountry(country_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/country-${country_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getRegions(country_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/regions-${country_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getRegion(region_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/region-${region_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
  }

  static async getLeagueByID(league_id: number): Promise<boolean> {
    const result = await axios.get<string>(`${SOKKER_XML_API_URL}/league-${league_id}.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
    });

    return true;
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
