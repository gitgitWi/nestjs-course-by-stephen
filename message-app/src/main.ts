import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { MessagesModule } from './messages/messages.module';

const bootstrap = async () => {
  const app = await NestFactory.create(MessagesModule);

  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle(`Simple JSON Message App API`)
    .setVersion(`1.0`)
    .build();

  const swaggerDocs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/swagger', app, swaggerDocs);

  await app.listen(3000);
};

bootstrap();
