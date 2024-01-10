import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

// require("dotenv").config();
// const pgp = require("pg-promise")({
//   noWarnings: true,
// });

// const username = process.env.DB_USER;
// const password = process.env.DB_PASS;
// const host = process.env.DB_HOST;
// const port = process.env.DB_PORT;
// const database = process.env.DB;

// const createSingleton = (name, create) => {
//   const s = Symbol.for(name);
//   let scope = global[s];
//   if (!scope) {
//     scope = { ...create() };
//     global[s] = scope;
//   }
//   return scope;
// };

// const cs = `postgres://${username}:${password}@${host}:${port}/${database}`;

// const db = pgp(cs);
// // const db = createSingleton('my-app-db', () => pgp(cs));

// module.exports = db;
