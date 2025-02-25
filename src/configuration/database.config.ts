import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  mysql: {
    type: 'mysql',
    host: process.env.DB_HOST || 'db-sql', // ใช้ 'db-sql' แทน localhost
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin1234',
    database: process.env.DB_NAME || 'chat_db',
    autoLoadEntities: true,
    synchronize: process.env.DB_SYNC === 'true', // ป้องกันการ reset schema
  },
  mongo: {
    uri:
      process.env.MONGO_URI ||
      'mongodb://root:root1234@db-mongo:27017/chatdb?authSource=admin',
  },
}));
