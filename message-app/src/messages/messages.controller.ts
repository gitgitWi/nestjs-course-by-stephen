import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMessageDto } from './dtos/create-message.dto';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log({ body });
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log({ id });
    return { id };
  }
}
