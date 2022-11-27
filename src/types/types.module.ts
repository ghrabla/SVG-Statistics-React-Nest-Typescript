import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';

@Module({
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
