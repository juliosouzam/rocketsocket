import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';
import { User } from '../schemas/User';

export interface UserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findBySocketId(socket_id: string): Promise<User | undefined>;
  save(data: CreateUserDTO): Promise<User>;
  update(user_id: string, data: UpdateUserDTO): Promise<User>;
  all(): Promise<User[]>;
}
