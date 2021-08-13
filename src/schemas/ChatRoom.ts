import { model, Document, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { User } from './User';

type ChatRoom = Document & {
  user_id: User[];
  chat_room_id: String;
};

const ChatRoomSchema = new Schema({
  user_id: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
  chat_room_id: {
    type: String,
    default: uuid(),
  },
});

const ChatRoom = model<ChatRoom>('ChatRooms', ChatRoomSchema);

export { ChatRoom };
