import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { Server } from 'socket.io';

import './database';

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(socket.id);
});

app.use(express.static(path.resolve(__dirname, '..', 'public')));

export { server, io };
