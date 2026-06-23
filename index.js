import { createServer } from "node:http";
import "dotenv/config";
import { createApplication } from "./src/app.js";

const PORT = process.env.PORT;

const main = () => {
  const server = createServer(createApplication());

  server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

main();
