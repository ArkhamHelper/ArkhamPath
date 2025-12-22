import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import {
  GraphPublisher,
  type PublishGraphOptions,
} from '@nestjs/devtools-integration';

async function bootstrap() {
  const shouldPublishGraph = process.env.PUBLISH_GRAPH === 'true';

  const app = await NestFactory.create(AppModule, {
    preview: shouldPublishGraph,
  });

  if (shouldPublishGraph) {
    await publishGraphAndCloseApp(app);
  }

  addSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

async function publishGraphAndCloseApp(app: INestApplication) {
  await app.init();

  const publishOptions: PublishGraphOptions = {
    apiKey: process.env.DEVTOOLS_API_KEY ?? '',
    repository: process.env.REPOSITORY_NAME ?? '',
    owner: process.env.GITHUB_REPOSITORY_OWNER ?? '',
    sha: process.env.COMMIT_SHA ?? '',
    target: process.env.TARGET_SHA,
    trigger: process.env.GITHUB_BASE_REF ? 'pull' : 'push',
    branch: process.env.BRANCH_NAME ?? '',
  };

  const graphPublisher = new GraphPublisher(app);
  await graphPublisher.publish(publishOptions);

  await app.close();
}

function addSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Your API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
