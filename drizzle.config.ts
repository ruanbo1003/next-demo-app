import { defineConfig , Config } from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/schema/*.ts",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
} as Config);