import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
/** cookieSession은 TS 지원이 잘되지 않아 import 못씀 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({ keys: ['hashingKey'] }));
  app.useGlobalPipes(
    new ValidationPipe({
      /** @description DTO에 정의된 property만 활용하도록 filtering */
      whitelist: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
