import { Controller , Get , Post , Put , Delete , Body , Param } from '@nestjs/common';
import { CreatCarsDto } from './dto/create-cars.dto';
import { CarsService } from './cars.service';
import { Cars } from './interfaces/cars.interface';
@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}
    @Get()
    async findAll(): Promise<Cars[]> {
        return this.carsService.findAll(); 
    }
    
    @Get(':id')
     findOne(@Param('id') id): Promise<Cars> {
        return this.carsService.findOne(id);
    }

    @Post()
     create(@Body() createCarsDto: CreatCarsDto  ): Promise<Cars> {
        return this.carsService.create(createCarsDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Cars> {
        return this.carsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateCarsDto: CreatCarsDto , @Param('id') id): Promise<Cars> {
        return this.carsService.update(id, updateCarsDto);
    }

}
