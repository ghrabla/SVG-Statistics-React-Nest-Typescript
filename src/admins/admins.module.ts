import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Module({
  providers: [AdminsService],
  exports: [AdminsService]
})
export class AdminsModule {}
