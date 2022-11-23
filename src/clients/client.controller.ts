import { Controller,Post,Body, Get } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './interfaces/client.interface';
import { ClientService } from './client.service';
import * as bcrypt from 'bcrypt';

@Controller('clients')
export class ClientController { 
   constructor(private readonly clientServices: ClientService){} 

   @Post('register')
    async Register(@Body() createAdminDto: CreateClientDto ): Promise<Client>{
      const saltOrRounds = await bcrypt.genSalt();
      const password = createAdminDto.password;
      const hash = await bcrypt.hash(password, saltOrRounds);
      const data = {
          fullname: createAdminDto.fullname,
          email: createAdminDto.email,
          password: hash
      }
      return this.clientServices.Register(data)
   }
   
   @Get() 
   Findall(): Promise<Client[]>{
       return this.clientServices.Findall()
   }

   @Post('login')
   async Login(@Body() data){
      const dbpassword = await this.clientServices.Login(data);
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
