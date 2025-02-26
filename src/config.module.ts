import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config'; // แก้ชื่อเป็น ConfigModule จาก @nestjs/config
import configuration from 'src/configuration'; // โหลด configuration จากไฟล์ configuration

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [configuration], // โหลด database config
      // isGlobal: true, // ทำให้สามารถใช้ config ได้ทุก module
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
