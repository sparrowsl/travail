import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const generateId = () => crypto.randomUUID().replaceAll("-", "_");

export const usersTable = sqliteTable("users", {
	id: text("id").primaryKey().notNull().unique().$defaultFn(generateId),
	name: text("name").notNull(),
	username: text("username").notNull().unique(),
	email: text("email").notNull().unique(),
	contact: text("contact"),
	role: text("role").default("Admin"),
	avatar: text("avatar").default("https://robohash.org/johndoe"),
	password: text("password").notNull(),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
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
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
	userId: text("agent_id") // TODO: change agent_id to user_id
		.notNull()
		.references(() => usersTable.id, { onDelete: "set null" }),
});
export const propertiesRelations = relations(propertiesTable, ({ one }) => ({
	agent: one(usersTable, {
		fields: [propertiesTable.userId],
		references: [usersTable.id],
	}),
}));

// TODO: add property types table
