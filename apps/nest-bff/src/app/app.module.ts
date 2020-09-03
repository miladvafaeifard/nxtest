import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { FruitService } from './fruit/fruit.service';
import { ColorService } from './color/color.service';
import { FruitResolver } from './fruit/fruit.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, 'schema', 'schema.gql'),
      sortSchema: true
    }),
  ],
  controllers: [AppController],
  providers: [ColorService, FruitService, FruitResolver],
})
export class AppModule {}
