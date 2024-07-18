
import { Schema, model} from 'mongoose';

export interface User  {
    name: string;
    email: string;
    page?: number
    limit?: number
}

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true }
});

export const UserModel = model<User>('User', UserSchema);

export interface UserCreationParams {
    name?: string;
    email?: string;
}


