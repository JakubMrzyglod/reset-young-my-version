import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CalendersModule } from './calender/calenders.module';
@Module({
  imports: [CalendersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
