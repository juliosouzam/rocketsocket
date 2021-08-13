import { CreateChatRoomDTO } from '../dtos/CreateChatRoomDTO';
import { ChatRoomRepository } from '../protocols/ChatRoomRepository';
import { ChatRoom } from '../schemas/ChatRoom';

export class ChatRoomsRepository implements ChatRoomRepository {
  async save({ user_ids }: CreateChatRoomDTO): Promise<ChatRoom> {
    return ChatRoom.create({ user_id: user_ids });
  }

  async findOneByUsers(users_id: string[]): Promise<ChatRoom> {
    return ChatRoom.findOne({
      user_id: {
        $all: users_id,
      },
    }).exec();
  }
}
