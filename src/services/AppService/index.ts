import { PlayerModel, Player } from '@/database'


class AppService {


    static async getPlayers() {

        const players = await PlayerModel.find()


        return players
    }

    static async createPlayer(player: Player) {
        const { _id: id } =await PlayerModel.create(player)
        return await PlayerModel.findById(id).exec()
    }
}

export default AppService