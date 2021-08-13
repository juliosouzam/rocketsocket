import { ChatRoomRepository } from '../protocols/ChatRoomRepository';

export class GetChatRoomByUsersService {
  constructor(private readonly chatRoomsRepository: ChatRoomRepository) {}

  async execute(users_id: string[]) {
    return this.chatRoomsRepository.findOneByUsers(users_id);
  }
}
