import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return;
  }

  @Post()
  createMessage() {
    return;
  }

  @Get('/:id')
  getMessage() {
    return;
  }
}
