import { model, Document, Schema } from 'mongoose';

type Message = Document & {
  to: String;
  text: String;
  created_at: Date;
  room_id: String;
};

const MessageSchema = new Schema({
  to: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  text: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  room_id: {
    type: String,
    ref: 'ChatRooms',
  },
});

const Message = model<Message>('Messages', MessageSchema);

export { Message };
