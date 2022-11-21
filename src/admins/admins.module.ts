import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { AdminShcema } from './schemas/admin.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Admin', schema: AdminShcema }])],
  controllers: [AdminsController], 
  providers: [AdminsService],
})
export class AdminsModule {}

