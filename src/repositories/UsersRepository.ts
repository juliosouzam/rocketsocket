import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserRepository } from '../protocols/UserRepository';
import { User } from '../schemas/User';

export class UsersRepository implements UserRepository {
  async all(): Promise<User[]> {
    return User.find();
  }

  async findBySocketId(socket_id: string): Promise<User> {
    return User.findOne({ socket_id }).exec();
  }

  async findByEmail(email: string): Promise<User> {
    return User.findOne({ email }).exec();
  }

  async findById(id: string): Promise<User> {
    return User.findById(id).exec();
  }

  async save({ name, email, avatar, socket_id }: CreateUserDTO): Promise<User> {
    return User.create({ name, email, avatar, socket_id });
  }

  async update(
    user_id: string,
    { name, avatar, socket_id }: CreateUserDTO
  ): Promise<User> {
    const user = await User.findOneAndUpdate(
      { _id: user_id },
      {
        $set: {
          name,
          avatar,
          socket_id,
        },
      },
      { new: true }
    );

    return user;
  }
}
