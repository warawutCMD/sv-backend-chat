import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; // ✅ ถูก

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {} // ✅ ใช้ 'jwt' strategy
