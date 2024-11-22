import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BfhlController } from './bfhl.controller';
import { BfhlService } from './bfhl.service';

@Module({
  imports: [],
  controllers: [AppController, BfhlController],
  providers: [AppService, BfhlService],
})
export class AppModule {}
