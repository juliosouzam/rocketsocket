import { UserRepository } from '../protocols/UserRepository';

export class GetAllUsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async execute() {
    return this.usersRepository.all();
  }
}
