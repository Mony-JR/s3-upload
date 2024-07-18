// src/models/TestUser.ts
import { Schema, model, models, Document } from 'mongoose';

export interface TestUser extends Document {
  name: string;
  email: string;
  age?: number; // Optional age field for testing
}

const testUserSchema = new Schema<TestUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required:true}, // Optional age field in the schema
});

export const TestUserModel = models.User || model<TestUser>('testuser', testUserSchema);
