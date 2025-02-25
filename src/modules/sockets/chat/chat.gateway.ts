import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WsResponse,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer() server: Server;

  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): WsResponse<string> {
    console.log('Received message: ', message);
    return { event: 'message', data: 'Message received: ' + message };
  }

  @SubscribeMessage('join')
  handleJoin(@MessageBody() room: string, client: Socket): void {
    client.join(room);
    console.log(`Client joined room: ${room}`);
  }

  @SubscribeMessage('leave')
  handleLeave(@MessageBody() room: string, client: Socket): void {
    client.leave(room);
    console.log(`Client left room: ${room}`);
  }
}
