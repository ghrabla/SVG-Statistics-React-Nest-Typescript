import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Module({
  providers: [AdminsService]
})
export class AdminsModule {}
