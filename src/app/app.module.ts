import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyModule } from './dummy.module';

@Module({
  imports: [
    DummyModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: false,
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
