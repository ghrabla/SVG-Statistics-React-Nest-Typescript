import { Injectable } from '@nestjs/common';
import { Cars } from './interfaces/cars.interface';

@Injectable()
export class CarsService {
    private readonly cars: Cars[] = [
        {
            id: 1,
            name: 'BMW',
            img: 'https://www.bmw.com/content/dam/bmw/common/all-models/5-series/2018/at-a-glance/bmw-5-series-sedan-2018-model-01.jpg/_jcr_content/renditions/cq5dam.resized.img.585.low.time1564569001903.jpg',
            description: 'BMW 5 Series is a mid-size luxury car manufactured by BMW since 1972. It is the successor to the New Class Sedans and is currently in its seventh generation.',
            price: 50000,
            qty: 10
        },
        {
            id: 2,
            name: 'Mercedes',
            img: 'https://www.mercedes-benz.com/en/vehicles/passenger-cars/mercedes-benz-cars/models/mercedes-benz-c-class/saloon/c180-avantgarde/_jcr_content/root/slider/slidercontainer/slides/slide_0/image.MQ6.12.20190228150610.jpeg',
            description: "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marques lineup until the W168 A-Class arrived in 1997.",
            price: 40000,
            qty: 10
        },

    ];

    findAll(): Cars[] {
        return this.cars;
    }
    
}
