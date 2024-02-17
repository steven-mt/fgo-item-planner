import { migrate } from "drizzle-orm/postgres-js/migrator";
import { client, db } from "./db";

(async () => {
  console.log("migrating db");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("db migrated");

  client.end();
})();
