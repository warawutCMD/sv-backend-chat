import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/request/login-request.dto';
import { RegisterRequestDto } from './dto/request/register-request.dto';
import { User } from '../users/entities/user.entity';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiBody({ type: RegisterRequestDto })
  @ApiResponse({ status: 201, description: 'สมัครสมาชิกสำเร็จ' })
  @ApiResponse({ status: 400, description: 'ข้อมูลไม่ถูกต้อง' })
  async register(@Body() registerDto: RegisterRequestDto): Promise<User> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiBody({ type: LoginRequestDto })
  @ApiResponse({
    status: 200,
    description: 'เข้าสู่ระบบสำเร็จ',
    schema: { example: { accessToken: 'jwt_token_string' } },
  })
  @ApiResponse({ status: 401, description: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' })
  async login(
    @Body() loginDto: LoginRequestDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(loginDto);
  }
}
