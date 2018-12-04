import * as mongoose from 'mongoose';

export const CalenderSchema = new mongoose.Schema({
    date: Date,
    available: Boolean,
    schoolName: String,
})