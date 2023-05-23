import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*PIPES
  app.useGlobalPipes(
    new ValidationPipe({      
      transform:true,
      whitelist:true,        
      forbidNonWhitelisted:true,
    })
  )*/
  await app.listen(3001); //buscar outra técnica 

}
bootstrap();
