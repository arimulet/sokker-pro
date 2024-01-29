import { getModelForClass, prop } from "@typegoose/typegoose";

class Team {
  @prop()
  team_id: number;

  @prop()
  name: string;
}

const model = getModelForClass(Team);

export default model;
