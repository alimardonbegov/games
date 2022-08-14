import axios from "axios";

export default class GameService {
    static async getPSGames() {
        try {
            const response = await axios.get(" https://api.sampleapis.com/playstation/games");
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async getXboxGames() {
        try {
            const response = await axios.get(" https://api.sampleapis.com/xbox/games");
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async getSwitchGames() {
        try {
            const response = await axios.get(" https://api.sampleapis.com/switch/games");
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }
}
