import { Controller,Post,Body, Get } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './interfaces/admin.interface';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
   constructor(private readonly adminServices: AdminsService){} 

   @Post('register')
    Register(@Body() createAdminDto: CreateAdminDto ): Promise<Admin>{
      return this.adminServices.Register(createAdminDto)
   }
   
   @Get()
   Findall(): Promise<Admin[]>{
       return this.adminServices.Findall()
   }

   @Post('login')
   async Login(@Body() data){
      const dbpassword = await this.adminServices.Login(data);
      if(!dbpassword){
        return {message: 'no email such that'}
      }else{
        return dbpassword; 
      }
      
   }
   
}
