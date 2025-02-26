<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
# sv-backend-chat

## Rur Docker local
containers ในโหมด detached โดยใช้การตั้งค่าจากไฟล์ docker-compose.yml และ docker-compose.local.yml ซึ่งไฟล์ทั้งสองจะถูกรวมกันในการตั้งค่าของ containers ที่จะเริ่มต้นขึ้น
```bash
$ docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d
```
## หยุด containers
```bash
$ docker-compose down
```

## รีสตาร์ท Docker Compose
``` bash
docker-compose -f docker-compose.local.yml down
docker-compose -f docker-compose.local.yml up
```

## ตรวจสอบการเชื่อมต่อจากภายนอก
``` bash
docker exec -it chit_chat_db mysql -u admin -p
```

## สอบการตั้งค่า Docker Network
``` bash
docker network inspect app-network
```

## เข้า MySQL container
``` bash
docker exec -it chit_chat_db bash
```

### เข้า MySQL service
``` bash
mysql -u admin -p
```
ใส่รหัสผ่าน admin1234 ดูว่าเข้าสู่ MySQL ได้หรือไม่

### ตรวจสอบผู้ใช้และสิทธิ์

#### ตรวจสอบสิทธิ์ของผู้ใช้ admin
``` bash
SHOW GRANTS FOR 'admin'@'%';
```
admin มีสิทธิ์ที่เพียงพอในการเข้าถึงฐานข้อมูล chat_db หรือไม่

## ตรวจสอบการเชื่อมต่อจากภายนอก
``` bash
docker exec -it chit_chat_db mysql -u admin -p
```
pass `admin1234`

### สั่งต่างๆในการใช้ database sql 
#### แสดงฐานข้อมูลที่มีอยู่ 
``` bash
SHOW DATABASES;
```
#### แสดงตารางในฐานข้อมูล 
``` bash
SHOW TABLES;
```
#### เข้า database
``` bash
USE chat_db;
```

# Migration

## สร้าง Migration
``` bash
npm run migration:create
หรือ
npx mikro-orm migration:create
```

## รัน Migration
``` bash
npm run migration:up
หรือ
npx mikro-orm migration:up
```

## ตรวจสอบ Schema (Optional)
``` bash
npm run schema:update
```

## สร้าง Seeder (ถ้ายังไม่ได้สร้าง)
Seeder ซึ่งเป็นเครื่องมือที่ช่วยให้คุณสามารถสร้างข้อมูลต้นแบบ (sample data) ในฐานข้อมูลได้อย่างอัตโนมัติ โดยเฉพาะในกรณีที่คุณต้องการทดสอบหรือเติมข้อมูลในตารางเพื่อให้โปรเจกต์ทำงานได้ตามที่ต้องการ
Seeder ช่วยให้คุณสามารถ:

เติมข้อมูลเบื้องต้นในฐานข้อมูล เช่น ข้อมูลที่ต้องใช้ในการทดสอบ หรือข้อมูลที่ต้องมีอยู่แล้วก่อนเริ่มทำงาน
ใช้ในการพัฒนาโดยการสร้างข้อมูลทดสอบที่เหมือนกับการทำงานจริง
ใช้เพื่อเติมข้อมูลต้นแบบในฐานข้อมูลโดยอัตโนมัติ ซึ่งจะช่วยให้ไม่ต้องกรอกข้อมูลด้วยมือในแต่ละครั้งที่รีเซ็ตฐานข้อมูล
``` bash
npm run seeder:create
```
## รัน Seeder (หลังจากสร้างหรือแก้ไข Seeder)
``` bash
npm run seeder:run
```

ในการใช้ฐานข้อมูล SQL (เช่น MySQL หรือ MariaDB) คุณสามารถใช้คำสั่งต่าง ๆ ที่ช่วยในการจัดการฐานข้อมูลและทำงานกับตารางต่าง ๆ ได้ เช่น การเลือกฐานข้อมูล การสร้างตาราง การเพิ่ม แก้ไข หรือเลือกข้อมูลจากตาราง ต่อไปนี้คือคำสั่งต่าง ๆ ที่คุณจะใช้บ่อยในฐานข้อมูล SQL:

### คำสั่งในการเลือกฐานข้อมูล
- **เลือกฐานข้อมูล (USE)**
  ```sql
  USE chat_db;
  ```
  คำสั่งนี้ใช้เพื่อเลือกฐานข้อมูลที่คุณต้องการใช้งาน เช่น ในที่นี้คือ `chat_db`

### คำสั่งในการสร้างฐานข้อมูล
- **สร้างฐานข้อมูล (CREATE DATABASE)**
  ```sql
  CREATE DATABASE chat_db;
  ```
  ใช้เพื่อสร้างฐานข้อมูลใหม่ที่ชื่อ `chat_db`

### คำสั่งในการดูข้อมูลฐานข้อมูล
- **แสดงฐานข้อมูลที่มีอยู่ (SHOW DATABASES)**
  ```sql
  SHOW DATABASES;
  ```
  คำสั่งนี้จะให้รายการของฐานข้อมูลทั้งหมดที่มีในระบบ

- **แสดงตารางในฐานข้อมูล (SHOW TABLES)**
  ```sql
  SHOW TABLES;
  ```
  คำสั่งนี้ใช้ในการแสดงรายการตารางทั้งหมดในฐานข้อมูลที่เลือกอยู่

### คำสั่งในการสร้างตาราง
- **สร้างตาราง (CREATE TABLE)**
  ```sql
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
  );
  ```
  คำสั่งนี้จะสร้างตาราง `users` ที่มีคอลัมน์ `id`, `name`, และ `email`

### คำสั่งในการเพิ่มข้อมูล
- **เพิ่มข้อมูล (INSERT INTO)**
  ```sql
  INSERT INTO users (name, email) VALUES ('John Doe', 'johndoe@example.com');
  ```
  คำสั่งนี้จะเพิ่มแถวข้อมูลใหม่ลงในตาราง `users`

### คำสั่งในการเลือกข้อมูล
- **เลือกข้อมูลทั้งหมด (SELECT)**
  ```sql
  SELECT * FROM users;
  ```
  คำสั่งนี้จะเลือกข้อมูลทั้งหมดจากตาราง `users`

- **เลือกข้อมูลที่มีเงื่อนไข (SELECT with WHERE)**
  ```sql
  SELECT * FROM users WHERE email = 'johndoe@example.com';
  ```
  คำสั่งนี้จะเลือกข้อมูลเฉพาะแถวที่ตรงกับเงื่อนไข เช่น อีเมลตรงกับที่ระบุ

### คำสั่งในการอัพเดตข้อมูล
- **อัพเดตข้อมูล (UPDATE)**
  ```sql
  UPDATE users SET name = 'John Updated' WHERE id = 1;
  ```
  คำสั่งนี้จะอัพเดตข้อมูลในตาราง `users` โดยเปลี่ยนชื่อเป็น `John Updated` เฉพาะแถวที่มี `id` เท่ากับ 1

### คำสั่งในการลบข้อมูล
- **ลบข้อมูล (DELETE)**
  ```sql
  DELETE FROM users WHERE id = 1;
  ```
  คำสั่งนี้จะลบแถวข้อมูลในตาราง `users` ที่มี `id` เท่ากับ 1

### คำสั่งในการลบตาราง
- **ลบตาราง (DROP TABLE)**
  ```sql
  DROP TABLE users;
  ```
  คำสั่งนี้จะลบตาราง `users` และข้อมูลทั้งหมดในตารางนั้น

### คำสั่งในการแก้ไขตาราง
- **เพิ่มคอลัมน์ (ALTER TABLE ADD COLUMN)**
  ```sql
  ALTER TABLE users ADD COLUMN age INT;
  ```
  คำสั่งนี้จะเพิ่มคอลัมน์ `age` ให้กับตาราง `users`

- **ลบคอลัมน์ (ALTER TABLE DROP COLUMN)**
  ```sql
  ALTER TABLE users DROP COLUMN age;
  ```
  คำสั่งนี้จะลบคอลัมน์ `age` ออกจากตาราง `users`

### คำสั่งในการสร้างและจัดการ Index
- **สร้างดัชนี (CREATE INDEX)**
  ```sql
  CREATE INDEX idx_users_email ON users (email);
  ```
  คำสั่งนี้จะสร้างดัชนี (`index`) ในคอลัมน์ `email` ของตาราง `users`

- **ลบดัชนี (DROP INDEX)**
  ```sql
  DROP INDEX idx_users_email ON users;
  ```
  คำสั่งนี้จะลบดัชนี `idx_users_email` ที่ถูกสร้างขึ้นในตาราง `users`

### คำสั่งการจัดการผู้ใช้
- **สร้างผู้ใช้ (CREATE USER)**
  ```sql
  CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
  ```
  คำสั่งนี้จะสร้างผู้ใช้ใหม่ชื่อ `newuser` บนเครื่อง `localhost` และกำหนดรหัสผ่านเป็น `password`

- **มอบสิทธิ์ให้ผู้ใช้ (GRANT)**
  ```sql
  GRANT ALL PRIVILEGES ON chat_db.* TO 'newuser'@'localhost';
  ```
  คำสั่งนี้จะมอบสิทธิ์ทั้งหมดให้กับผู้ใช้ `newuser` บนฐานข้อมูล `chat_db`

- **ปฏิเสธสิทธิ์ (REVOKE)**
  ```sql
  REVOKE ALL PRIVILEGES ON chat_db.* FROM 'newuser'@'localhost';
  ```
  คำสั่งนี้จะลบสิทธิ์ทั้งหมดของผู้ใช้ `newuser` จากฐานข้อมูล `chat_db`

### คำสั่งการจัดการการเชื่อมต่อ
- **ออกจากฐานข้อมูล (EXIT)**
  ```sql
  EXIT;
  ```
  คำสั่งนี้จะออกจากการเชื่อมต่อกับฐานข้อมูล SQL

คำสั่งเหล่านี้เป็นคำสั่งพื้นฐานที่ใช้ในการจัดการฐานข้อมูล SQL ถ้าคุณต้องการทำงานที่ซับซ้อนขึ้น คุณสามารถใช้คำสั่งเพิ่มเติม เช่น การเชื่อมโยงตาราง (JOIN), การจัดกลุ่ม (GROUP BY) เป็นต้น