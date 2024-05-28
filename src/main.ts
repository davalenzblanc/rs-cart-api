import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@codegenie/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

// let server: Handler;

// async function bootstrap(): Promise<Handler> {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors({
//     origin: (req, callback) => callback(null, true),
//   });
//   app.use(helmet());

//   await app.init();

//   const expressApp = app.getHttpAdapter().getInstance();
//   return serverlessExpress({ app: expressApp });
// }

// export const handler: Handler = async (
//   event: any,
//   context: Context,
//   callback: Callback,
// ) => {
//   server = server ?? (await bootstrap());
//   return server(event, context, callback);
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());

  await app.listen(3000);
}

bootstrap();
