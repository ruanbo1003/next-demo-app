"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.user = (0, pg_core_1.pgTable)("user", {
    id: (0, pg_core_1.serial)("id"),
    name: (0, pg_core_1.varchar)("name", { length: 64 }).notNull(),
    email: (0, pg_core_1.varchar)("email", { length: 128 }).notNull(),
    salary: (0, pg_core_1.real)("salary").default(0.0),
});
