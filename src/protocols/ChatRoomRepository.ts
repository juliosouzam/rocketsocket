import { CreateChatRoomDTO } from '../dtos/CreateChatRoomDTO';
import { ChatRoom } from '../schemas/ChatRoom';

export interface ChatRoomRepository {
  save(data: CreateChatRoomDTO): Promise<ChatRoom>;
  findOneByUsers(users_id: string[]): Promise<ChatRoom>;
}
