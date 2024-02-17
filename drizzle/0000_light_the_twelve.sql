DO $$ BEGIN
 CREATE TYPE "theme" AS ENUM('light', 'dark', 'system');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"theme" "theme" DEFAULT 'system' NOT NULL,
	"planner_state" jsonb
);
