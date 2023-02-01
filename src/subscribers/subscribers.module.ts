import { Module } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from './entities/subscriber.entity';
import { CsvModule } from 'nest-csv-parser';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber]), CsvModule],
  controllers: [SubscribersController],
  providers: [SubscribersService],
})
export class SubscribersModule {}
