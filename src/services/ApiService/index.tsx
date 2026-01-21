import axios from "axios";
import AppService from "../AppService";

class ApiService {
    static async getPlayers() {
        try {
            const result = await axios.get("/api/players")
            return result.data
        } catch (error) {
            console.error(error)
            return {}             
        }
    }

    static async updatePlayers() {
        try {
            const result = await axios.post("/api/players/update")
            return result.data
        } catch (error) {
            console.error(error)
            return {}             
        }
    }
}

export default ApiService