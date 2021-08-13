import { ChatRoomRepository } from '../protocols/ChatRoomRepository';

export class CreateChatRoomService {
  constructor(private readonly chatRoomsRepository: ChatRoomRepository) {}

  async execute(user_ids: string[]) {
    const chatRoom = await this.chatRoomsRepository.save({ user_ids });

    return chatRoom;
  }
}
