import { Module } from '@nestjs/common';
import { CalendersService } from './calenders.service';
import { DatabaseModule } from 'src/database/database.module';
import { CalendersController } from './calenders.controller';
import { calendersProviders } from './calenders.provaiders';

@Module({
  imports: [DatabaseModule],
  controllers: [CalendersController],
  providers: [CalendersService, ...calendersProviders]
})
export class CalendersModule {}
