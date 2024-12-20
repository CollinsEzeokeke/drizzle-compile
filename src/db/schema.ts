import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  last_login: timestamp('last_login'),
});




// import { 
//   serial,
//   text,
//   boolean,
//   jsonb,
//   date,
//   decimal,
//   uuid,
//   bytea,
//   array,
//   interval,
//   time,
//   real,
//   doublePrecision,
//   inet,
//   json
// } from "drizzle-orm/pg-core";

// export const extendedUsersTable = pgTable("users", {
//   // Identification
//   id: serial('id').primaryKey(),        // Auto-incrementing ID
//   uuid: uuid('uuid').defaultRandom(),   // UUID for public IDs
  
//   // Basic Info
//   username: text('username').notNull(),  // Unlimited length text
//   bio: text('bio'),                     // Optional text field
//   isActive: boolean('is_active').default(true), // Boolean flag
  
//   // Rich Data
//   metadata: jsonb('metadata'),          // JSON data storage
//   settings: json('settings'),           // JSON without indexing
  
//   // Numeric
//   balance: decimal('balance', { precision: 10, scale: 2 }), // Money
//   rating: real('rating'),              // Float
//   score: doublePrecision('score'),     // Double precision float
  
//   // Dates and Time
//   birthDate: date('birth_date'),       // Date only
//   loginTime: time('login_time'),       // Time only
//   sessionDuration: interval('session'), // Time intervals
  
//   // Arrays and Binary
//   roles: array('roles').element(text('role')), // Array of strings
//   profilePic: bytea('profile_pic'),    // Binary data
  
//   // Network
//   ipAddress: inet('ip_address'),       // IP addresses
  
//   // Timestamps (already shown)
//   createdAt: timestamp('created_at').defaultNow(),
//   updatedAt: timestamp('updated_at')
// });