import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const bootstrap = async () => {
  const app = await NestFactory.create(MessagesModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle(`Simple JSON Message App API`)
    .setVersion(`1.0`)
    .build();

  const swaggerDocs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/swagger', app, swaggerDocs);

  await app.listen(3000);
};

bootstrap();
