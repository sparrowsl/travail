import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const generateId = () => crypto.randomUUID().replaceAll("-", "_");

export const usersTable = sqliteTable("users", {
	id: text("id").primaryKey().notNull().unique().$defaultFn(generateId),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	avatar: text("avatar").default("https://robohash.org/johndoe"),
	password: text("password").notNull(),
	joined: text("joined").default(sql`CURRENT_TIMESTAMP`),
});

// export const usersRelations = relations(usersTable, ({ many }) => ({
// 	properties: many(propertiesTable),
// }));

export const agentsTable = sqliteTable("agents", {
	id: text("id").primaryKey().notNull().unique().$defaultFn(generateId),
	name: text("name"),
	username: text("name").notNull().unique(),
	email: text("email").unique(),
	contact: text("contact"),
	avatar: text("avatar").default("https://robohash.org/johndoe"),
	role: text("role").default("Agent"),
	password: text("password").notNull(),
	// properties:
	joined: text("joined").default(sql`CURRENT_TIMESTAMP`),
});

export const agentsRelations = relations(agentsTable, ({ many }) => ({
	properties: many(propertiesTable),
}));

export const propertiesTable = sqliteTable("properties", {
	id: text("id").primaryKey().notNull().unique().$defaultFn(generateId),
	title: text("title").notNull(),
	description: text("description").notNull(),
	type: text("type").notNull(),
	location: text("location").notNull(),
	photo: text("photo").notNull(),
	price: integer("price").notNull(),
	dateAdded: text("added").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
	agentId: text("agent_id")
		.notNull()
		.references(() => agentsTable.id, { onDelete: "set null" }),
});

export const propertiesRelations = relations(propertiesTable, ({ one }) => ({
	agent: one(agentsTable, {
		fields: [propertiesTable.agentId],
		references: [agentsTable.id],
	}),
}));
