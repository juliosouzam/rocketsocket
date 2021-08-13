import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserRepository } from '../protocols/UserRepository';

export class CreateUserService {
  constructor(private readonly usersRepository: UserRepository) {}

  async execute({ name, email, avatar, socket_id }: CreateUserDTO) {
    const userByEmailAlreadyExists = await this.usersRepository.findByEmail(
      email
    );

    if (userByEmailAlreadyExists) {
      const user = await this.usersRepository.update(
        userByEmailAlreadyExists.id,
        {
          name,
          avatar,
          socket_id,
        }
      );

      return user;
    }

    const user = await this.usersRepository.save({
      name,
      avatar,
      email,
      socket_id,
    });

    return user;
  }
}
