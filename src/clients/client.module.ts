import { Module } from '@nestjs/common';
import { ClientService } from './client.service';

@Module({
  providers: [ClientService]
})
export class ClientModule {}
