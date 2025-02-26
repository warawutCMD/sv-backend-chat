import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { MessagesModule } from './modules/messages/messages.module';
import { ChatGateway } from './modules/sockets/chat/chat.gateway';
// import { SocketIoModule } from 'ngx-socket-io';

@Module({
  imports: [
    ConfigModule, // Import ConfigModule

    // SQL Database (MySQL)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get('database.mysql');
        // console.log('DB CONFIG:', dbConfig); // 👈 เช็คค่าที่โหลดมา
        return dbConfig;
      },
    }),

    // MongoDB
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.mongo.uri'),
      }),
    }),

    // WebSockets
    // SocketIoModule.forRoot({
    //   cors: {
    //     origin: '*',
    //   },
    // }),

    UsersModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
