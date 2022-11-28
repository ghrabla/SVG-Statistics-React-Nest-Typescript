import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
