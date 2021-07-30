import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  constructor(private service: MessagesService) {}

  @Get()
  listMessages() {
    return this.service.findAll();
  }

  @Post()
  createMessage(@Body() { content }: CreateMessageDto) {
    return this.service.create(content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.service.findOne(id);
    if (!message) throw new NotFoundException(`message not found`);
    return message;
  }
}
