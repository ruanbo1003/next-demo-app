CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL,
	"name" varchar(64) NOT NULL,
	"email" varchar(128) NOT NULL,
	"salary" real DEFAULT 0
);
