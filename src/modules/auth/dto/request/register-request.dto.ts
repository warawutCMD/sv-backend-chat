import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterRequestDto {
  @ApiProperty({ description: 'ชื่อของผู้ใช้', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'ชื่อผู้ใช้ (username)', example: 'johndoe' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'อีเมลของผู้ใช้',
    example: 'johndoe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'รหัสผ่าน (อย่างน้อย 6 ตัวอักษร)',
    example: 'mypassword123',
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
