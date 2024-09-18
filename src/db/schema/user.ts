import { serial, varchar, real, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: serial("id"),
    name: varchar("name", { length: 64 }).notNull(),
    email: varchar("email", { length: 128}).notNull(),
    salary: real("salary").default(0.0),
})
