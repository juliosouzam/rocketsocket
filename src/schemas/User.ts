import { model, Document, Schema } from 'mongoose';

type User = Document & {
  email: String;
  socket_id: String;
  name: String;
  avatar: String;
};

const UserSchema = new Schema({
  email: String,
  socket_id: String,
  name: String,
  avatar: String,
});

const User = model<User>('Users', UserSchema);

export { User };
