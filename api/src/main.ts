import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  require('custom-env').env(process.env.APP_ENV, process.cwd());

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Boilerplate API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.APP_PORT);

}
bootstrap();
