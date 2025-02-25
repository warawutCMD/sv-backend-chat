import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config'; // แก้ชื่อเป็น ConfigModule จาก @nestjs/config
import databaseConfig from 'src/configuration/database.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [databaseConfig], // โหลด database config
      isGlobal: true, // ทำให้สามารถใช้ config ได้ทุก module
    }),
  ],
})
export class ConfigModule {}
