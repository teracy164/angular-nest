import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// add start
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
// add end

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // add start
  // サーバーサイドのルーティングを/apiで始まるURLのみに適用
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  // /apiから始まらないURLの場合はクライアントサイドのルーティングを適用
  const clientPath = __dirname + '/../client';
  app.use(express.static(clientPath));
  app.use(/^(?!\/api).*$/, express.static(clientPath + '/index.html'));
  // add end
  
  await app.listen(3000);
}
bootstrap();
