import { Connection } from "mongoose";
import { CalenderSchema } from "./schema/calender.schema";

export const calendersProviders = [
    {
        provide: 'CalenderModelToken',
        useFactory:(conection:Connection) => conection.model('Calender',CalenderSchema),
        inject: ['DbConnectionToken']
    },
];