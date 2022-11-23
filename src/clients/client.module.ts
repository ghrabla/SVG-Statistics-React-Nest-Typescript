import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientShcema } from './schemas/client.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Client', schema: ClientShcema }])],
  controllers: [ClientController], 
  providers: [ClientService],
})
export class ClientModule {}

