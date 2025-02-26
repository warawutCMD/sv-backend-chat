import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({
    description: 'อีเมลของผู้ใช้',
    example: 'email@email.com',
    format: 'email',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'รหัสผ่าน (อย่างน้อย 6 ตัวอักษร)',
    example: '123456',
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
