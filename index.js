import { createServer } from "node:http";
import "dotenv/config";
import { createApplication } from "./src/app.js";
import { connect } from "node:http2";
import { connectDB } from "./src/db/connectDB.js";

const PORT = process.env.PORT;

const main = async () => {
  const server = createServer(createApplication());

  await connectDB();

  server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

main();
