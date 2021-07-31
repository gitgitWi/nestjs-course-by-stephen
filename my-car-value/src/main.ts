import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      /** @description DTO에 정의된 property만 활용하도록 filtering */
      whitelist: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
