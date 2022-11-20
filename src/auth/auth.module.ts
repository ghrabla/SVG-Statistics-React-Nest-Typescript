import { Module } from '@nestjs/common';
import { AdminsModule } from 'src/admins/admins.module';
import { AuthService } from './auth.service';

@Module({
  imports: [AdminsModule],
  providers: [AuthService]
})
export class AuthModule {}
