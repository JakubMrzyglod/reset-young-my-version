import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import { Calender } from "./interface/calender.interface";
@Injectable()
export class CalendersService {
    constructor(@Inject('CalenderModelToken') private readonly calenderModel: Model<Calender>) {}
    async findAll(): Promise<Calender[]>{
        return this.calenderModel.find().exec();
    }
}