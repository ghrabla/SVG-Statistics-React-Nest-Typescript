import { Controller , Get , Post , Put , Delete , Body , Param } from '@nestjs/common';
import { CreatCarsDto } from './dto/create-cars.dto';
import { CarsService } from './cars.service';
import { Cars } from './interfaces/cars.interface';
@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}
    @Get()
    findAll(): Cars[] {
        return this.carsService.findAll(); ;
    }
    @Get(':id')
    findOne(@Param('id') id): string {
        return `car id: ${id}`;
    }

    @Post()
    create(@Body () createCarsDto: CreatCarsDto  ): string {
        return `Name: ${createCarsDto.name} ,  Price: ${createCarsDto.price} , Description: ${createCarsDto.description} , Image: ${createCarsDto.img} ,Quantity: ${createCarsDto.qty}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Remove car id: ${id}`;
    }

    @Put(':id')
    update(@Body() updateCarsDto: CreatCarsDto , @Param('id') id): string {
        return `Update car id: ${id} - Name: ${updateCarsDto.name} ,  Price: ${updateCarsDto.price} , Description: ${updateCarsDto.description} , Image: ${updateCarsDto.img} ,Quantity: ${updateCarsDto.qty}`;
    }

}
