import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  try {
    const PORT = process.env.PORT || 9002;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Первый сервер со swagger')
      .setDescription('Документация REST API')
      .setVersion('0.0.1')
      .addTag('NiChe')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
