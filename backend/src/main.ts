// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips properties not defined in the DTO
      forbidNonWhitelisted: true, // Throws an error if non-whitelisted properties are included
      transform: true, // Automatically transforms payload to DTO class instances
    }),
  );
  app.enableCors({
    origin: '*',  // Allow all origins (you can replace '*' with specific domains like 'http://localhost:4200')
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Accept',  // Allowed headers
  });
  await app.listen(3000);
}
void bootstrap();
