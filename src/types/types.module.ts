import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeSchema } from './schemas/type.schema';


@Module({
  imports: [MongooseModule.forFeature([{name:"Types", schema: TypeSchema}])],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
