import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { LoginRequestDto } from './dto/request/login-request.dto';
import { JwtPayload } from './interface/jwt-payload.interface';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { UsersService } from '../users/users.service';
import { RegisterRequestDto } from './dto/request/register-request.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async register(registerDto: RegisterRequestDto): Promise<User> {
    const { username, email, password } = registerDto;

    // Check if user already exists by email
    const existingUser = await this.userRepository.findOne({ email });
    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user entity
    const user = this.userRepository.create({
      name: registerDto.name,
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database using save
    await this.userRepository.insert(user);

    return user;
  }

  // ตรวจสอบการเข้าสู่ระบบ
  async login(loginDto: LoginRequestDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ email });
    console.info('user: ', user);

    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const payload: JwtPayload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  // ค้นหาผู้ใช้จาก email
  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }
}
