import { io } from '../http';
import { ChatRoomsRepository } from '../repositories/ChatRoomsRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import { CreateChatRoomService } from '../services/CreateChatRoomService';
import { CreateUserService } from '../services/CreateUserService';
import { GetAllUsersService } from '../services/GetAllUsersService';
import { GetChatRoomByUsersService } from '../services/GetChatRoomByUsersService';
import { GetUserBySocketIdService } from '../services/GetUserBySocketIdService';

io.on('connect', (socket) => {
  socket.on('start', async (data) => {
    const { name, email, avatar } = data;

    const usersRepository = new UsersRepository();
    const createUserService = new CreateUserService(usersRepository);

    const user = await createUserService.execute({
      name,
      email,
      avatar,
      socket_id: socket.id,
    });

    socket.broadcast.emit('new_user', user);

    socket.on('get_users', async (callback) => {
      const usersRepository = new UsersRepository();
      const getAllUsersService = new GetAllUsersService(usersRepository);

      const users = await getAllUsersService.execute();

      callback(users);
    });

    socket.on('start_chat', async (data, callback) => {
      const usersRepository = new UsersRepository();
      const getUserBySocketIdService = new GetUserBySocketIdService(
        usersRepository
      );
      const user = await getUserBySocketIdService.execute(socket.id);

      const chatRoomRepository = new ChatRoomsRepository();
      const getChatRoomByUsersService = new GetChatRoomByUsersService(
        chatRoomRepository
      );

      let room = await getChatRoomByUsersService.execute([
        user.id,
        data.user_id,
      ]);
      if (!room) {
        const createChatRoomService = new CreateChatRoomService(
          chatRoomRepository
        );

        room = await createChatRoomService.execute([user.id, data.user_id]);
      }

      console.log({ room });
      callback({ room });
    });
  });
});
