import { server } from './http';

import './websocket/chat-service';

server.listen(3333, () => console.log('Running server'));
