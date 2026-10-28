import type { Server } from "http";
import colors from "colors";
import app from "./app";
import config from "./config";
import prisma from "./config/prisma";

let server: Server | undefined;

async function main() {
  server = app.listen(Number(config.port), config.ip, () => {
    console.log(
      colors.italic.green.bold(
        `Server is running on http://${config.ip}:${config.port}`,
      ),
    );
  });
  prisma
    .$connect()
    .then(() => {
      console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
      console.error(" Database connection issue:", err.message);
    });
}

main().catch((err) => {
  console.error("Error starting server:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});
