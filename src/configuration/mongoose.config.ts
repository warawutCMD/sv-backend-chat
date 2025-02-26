import { MongooseModuleOptions } from '@nestjs/mongoose';
import config from './index'; // นำเข้าฟังก์ชัน config

export const mongooseConfig: MongooseModuleOptions = {
  uri: config().databaseMongo.uri, // ใช้ค่าจาก .env
};
