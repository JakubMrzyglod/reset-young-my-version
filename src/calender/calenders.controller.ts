import { Controller, Get } from '@nestjs/common';
import { CalendersService } from './calenders.service';
import { Calender } from './interface/calender.interface';

@Controller('calender')
export class CalendersController {
    constructor(private readonly clendersService: CalendersService){}

    @Get()
    async findAll():Promise<Calender[]>{
        return this.clendersService.findAll();
    }
}
