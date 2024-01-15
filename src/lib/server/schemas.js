import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
	id: text("id").primaryKey().notNull().unique(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	avatar: text("avatar").default("https://robohash.org/johndoe"),
	role: text("role").default("Agent"),
	password: text("password").notNull(),
	dateJoined: text("joined").default(sql`CURRENT_TIMESTAMP`),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
	properties: many(propertiesTable),
}));

export const propertiesTable = sqliteTable("properties", {
	id: text("id").primaryKey().notNull().unique(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	type: text("type").notNull(),
	location: text("location").notNull(),
	photo: text("photo").notNull(),
	price: integer("price").notNull(),
	dateAdded: text("added").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated").default(sql`CURRENT_TIMESTAMP`),
	agentId: text("agent_id")
		.notNull()
		.references(() => usersTable.id, { onDelete: "set null" }),
});

export const propertiesRelations = relations(propertiesTable, ({ one }) => ({
	agent: one(usersTable, {
		fields: [propertiesTable.agentId],
		references: [usersTable.id],
	}),
}));
