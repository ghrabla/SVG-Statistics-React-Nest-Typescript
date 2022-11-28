import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Detail } from './interfaces/details.interface';
import { DetailsService } from './details.service';
import { CreateDetailDto } from './dto/create-details.dto';

@Controller('details')
export class DetailsController {
    constructor(private readonly details:DetailsService){}

    @Get()
    findall(): Promise<Detail[]>{
       return this.details.findall();
    }

    @Post()
    create(@Body() data: CreateDetailDto): Promise<Detail>{
        return this.details.create(data);
    }

    @Get(":_id")
    findone(@Param() id): Promise<Detail>{
        return this.details.findone(id._id);
    }

    @Delete(":_id")
    delete(@Param() id){
        return this.details.delete(id);
    }

    @Put(":_id")
    update(@Param() id,@Body() data): Promise<Detail>{
        return this.details.update(id,data);
    }




}
