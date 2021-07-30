import { NestFactory } from '@nestjs/core';
import { NextFunction, Request } from 'express';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);

  app.use((req: Request, _, next: NextFunction) => {
    console.log(
      `[CustomLogger] ${new Date().toLocaleString()}\tRequested URL: ${
        req.url
      }`,
    );
    next();
  });

  await app.listen(3000);
}

bootstrap();
