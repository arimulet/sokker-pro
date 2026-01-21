import { getModelForClass, prop } from "@typegoose/typegoose";

export class Player {
  @prop()
  player_id: number;

  @prop()
  name: string;

  @prop()
  surname: string;

  @prop()
  skill: number;

  @prop()
  age: number;

  @prop()
  weeks: number;
}

export const PlayerModel = getModelForClass(Player);

