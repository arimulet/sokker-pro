import mongoose, { type Mongoose } from "mongoose";

import Teams from "./models/teams";

const initialize = async () => {
  try {
    console.log("trying to connect to database....");

    const db = await mongoose.connect(`${process.env.DATABASE_HOST}`, {
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASS,
    });

    console.log("database connected");
  } catch (error) {
    console.error(error);
  }
};

initialize();

export { Teams };
