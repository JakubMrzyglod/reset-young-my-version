import { Document } from "mongoose";

export interface Calender extends Document{
    readonly date: Date;
    readonly available: boolean;
    readonly schoolName: string;
}