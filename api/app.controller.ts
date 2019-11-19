import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './dto/hello.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiResponse({ status: 200, type: HelloDto})
  getHello(): HelloDto {
    const message = this.appService.getHello();
    return { message };
  }
}
