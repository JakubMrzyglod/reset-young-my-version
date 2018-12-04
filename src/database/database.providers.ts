import * as mongoose from 'mongoose';

const {MONGODB_URI} = process.env;

export const databaseProviders = [{
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(MONGODB_URI),
    }]