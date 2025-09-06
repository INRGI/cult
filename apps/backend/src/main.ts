import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const port  = process.env.PORT || 3000;

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: "Content-Type,Authorization",
  });
  
  await app.listen(port, '0.0.0.0');
}
bootstrap();
