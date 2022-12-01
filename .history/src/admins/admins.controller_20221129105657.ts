import { Controller,Post,Body, Get } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './interfaces/admin.interface';
import { AdminsService } from './admins.service';
import * as bcrypt from 'bcrypt';

@Controller('admins')
export class AdminsController { 
   constructor(private readonly adminServices: AdminsService){} 

   @Post('register')
    async Register(@Body() createAdminDto: CreateAdminDto ){
      if(!createAdminDto){
        return {message: "please enter valid data"}
      }else{
        const saltOrRounds = await bcrypt.genSalt();
        const password = createAdminDto.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        const data = {
        fullname: createAdminDto.fullname,
        email: createAdminDto.email,
        password: hash
         }
        return this.adminServices.Register(data)
      }
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
        const password = dbpassword.password;
        const validepassword = await bcrypt.compare(data.password,password);
        if(validepassword){
            return dbpassword;
        }else{
            return {message: 'password is not correct'}  
        }
      }
      
   }
   
}
