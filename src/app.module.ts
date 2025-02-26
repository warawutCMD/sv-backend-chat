import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from './config.module';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { MessagesModule } from './modules/messages/messages.module';
import { ChatGateway } from './modules/sockets/chat/chat.gateway';
// import { SocketIoModule } from 'ngx-socket-io';
import { AuthModule } from './modules/auth/auth.module';
import { OrmModule } from './orm.module';
import mikroOrmConfig from './configuration/mikro-orm.config';
import { mongooseConfig } from './configuration/mongoose.config';

@Module({
  imports: [
    ConfigModule, // Import ConfigModule

    // SQL Database (MySQL)
    MikroOrmModule.forRoot(mikroOrmConfig), // MikroORM config

    // MongoDB
    MongooseModule.forRoot(mongooseConfig.uri), // ใช้ค่า uri จาก mongooseConfig

    // WebSockets
    // SocketIoModule.forRoot({
    //   cors: {
    //     origin: '*',
    //   },
    // }),

    UsersModule,
    MessagesModule,
    AuthModule,
    OrmModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
