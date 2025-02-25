# ใช้ Node.js image เวอร์ชันที่เหมาะสม (ใช้ Alpine เป็น base image เพื่อขนาดเล็ก)
FROM node:20-alpine

# สร้าง directory สำหรับโปรเจกต์
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json (หากมี)
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source code ทั้งหมด
COPY . .

# สร้างโปรเจกต์ NestJS
RUN npm run build

# เปิดพอร์ตที่โปรเจกต์ NestJS รันอยู่
EXPOSE 3000

# รันโปรเจกต์
CMD ["npm", "run", "start:prod"]
