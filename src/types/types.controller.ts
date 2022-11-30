import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { TypesService } from './types.service';
import { Type } from './interfaces/type.interface';

@Controller('types')
export class TypesController {
    constructor(private readonly types: TypesService){}

    @Get()
    findall(): Promise<Type[]>{
        return this.types.findall();
    }

    @Get(":_id")
    findone(@Param() id): Promise<Type>{
        return this.types.findone(id);
    }

    @Post()
    create(@Body() data:CreateTypeDto): Promise<Type>{
        return this.types.create(data);
    }

    @Delete(":_id")
    delete(@Param() id){
        return this.types.delete(id);
    }
    
    @Put(":_id")
    update(@Param() id,@Body() data:CreateTypeDto): Promise<Type>{
        return this.types.update(id,data);
    }

}
