import { Controller, Post, Get, Body } from '@nestjs/common';
import { BfhlService } from './bfhl.service';

@Controller('bfhl')
export class BfhlController {
  constructor(private readonly bfhlService: BfhlService) {}

  @Post()
  async post(@Body() data: any): Promise<any> {
    return this.bfhlService.processData(data);
  }

  @Get()
  async get(): Promise<any> {
    return { operation_code: 1 };
  }
}
