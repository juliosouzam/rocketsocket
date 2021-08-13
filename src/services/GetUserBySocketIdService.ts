import { UserRepository } from '../protocols/UserRepository';

export class GetUserBySocketIdService {
  constructor(private readonly usersRepository: UserRepository) {}

  async execute(socket_id: string) {
    const user = await this.usersRepository.findBySocketId(socket_id);

    return user;
  }
}
