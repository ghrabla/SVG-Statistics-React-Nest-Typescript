import { Controller, Get, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
    @Get()
    findall(): string{
      return 'hi admin';
    } 

}
