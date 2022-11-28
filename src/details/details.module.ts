import { Module } from '@nestjs/common';
import { DetailSchema } from './schemas/detail.schema';
import { DetailsController } from './details.controller';
import { DetailsService } from './details.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{name: "Details", schema: DetailSchema}])],
    controllers: [DetailsController],
    providers: [DetailsService]
    
})
export class DetailsModule {}
