import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { OrmModule } from 'src/orm.module';

@Module({
  imports: [OrmModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
