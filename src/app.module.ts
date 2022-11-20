import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import config from './config/keys';  

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI), AdminsModule, AuthModule, ],  
  controllers: [],  
  providers: [],
})
export class AppModule {}
