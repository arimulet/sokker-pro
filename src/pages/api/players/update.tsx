import { Player, PlayerModel } from '@/database';
import AppService from '@/services/AppService'
import type { NextApiRequest, NextApiResponse } from "next";

const playersToAdd: Player[] = [
    { "player_id": 29049452, "name": "Juan Pablo", "surname": "Parisier", "skill": 3, "age": 17, "weeks": 32 },
    { "player_id": 29068947, "name": "Hernando", "surname": "Bony", "skill": 2, "age": 17, "weeks": 23 },
    { "player_id": 28954446, "name": "Bryan", "surname": "Gamin", "skill": 4, "age": 16, "weeks": 20 },
    { "player_id": 29049449, "name": "Paulo", "surname": "Constantino", "skill": 4, "age": 17, "weeks": 19 },
    { "player_id": 28936608, "name": "Melvin", "surname": "beck", "skill": 6, "age": 18, "weeks": 18 },
    { "player_id": 28827672, "name": "Silvio", "surname": "Friedman", "skill": 5, "age": 17, "weeks": 18 },
    { "player_id": 28864076, "name": "Mariano", "surname": "Babino", "skill": 7, "age": 18, "weeks": 18 },
    { "player_id": 29068949, "name": "Sebastián", "surname": "Zacarías", "skill": 3, "age": 16, "weeks": 17 },
    { "player_id": 28713872, "name": "Juan Manuel", "surname": "Gamboa", "skill": 8, "age": 17, "weeks": 13 },
    { "player_id": 28808599, "name": "Edgardo", "surname": "Casey", "skill": 10, "age": 18, "weeks": 8 },
    { "player_id": 28918576, "name": "Eusebio", "surname": "Berrondo", "skill": 8, "age": 18, "weeks": 7 },
    { "player_id": 29010371, "name": "Juvenal", "surname": "Piccinini", "skill": 6, "age": 16, "weeks": 7 },
    { "player_id": 28771655, "name": "Jorge", "surname": "Severino", "skill": 9, "age": 17, "weeks": 5 },
    { "player_id": 28936605, "name": "Silvio", "surname": "Filipetto", "skill": 5, "age": 17, "weeks": 4 },
    { "player_id": 28972599, "name": "Miguel", "surname": "Well", "skill": 6, "age": 16, "weeks": 4 },
    { "player_id": 28991415, "name": "Demián", "surname": "Rocchia", "skill": 6, "age": 18, "weeks": 2 },
    { "player_id": 28529017, "name": "Alejo", "surname": "Marineli", "skill": 11, "age": 18, "weeks": 2 }
]

export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
) {

    playersToAdd.forEach(async (player: Player) => {
        await AppService.createPlayer(player)
    })
    // if (sokkerAuth.authenticated) {

    // } else {
    //   return Response.json().status
    //   }

    return res.status(200).json({ message: "created" });
}
