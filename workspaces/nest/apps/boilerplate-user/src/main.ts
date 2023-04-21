import { NestFactory } from '@nestjs/core';
import { BoilerplateUserModule } from './boilerplate-user.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  require('custom-env').env(process.env.APP_ENV, process.cwd());

  const app = await NestFactory.create(BoilerplateUserModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Boilerplate User API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.APP_BOILERPLATE_USER_API_PORT);

}
bootstrap();
