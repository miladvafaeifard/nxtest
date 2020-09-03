import { Field, ObjectType } from '@nestjs/graphql';
import { Color } from '../color/color.model';

@ObjectType()
export class Fruit {
  @Field()
  id: string;

  @Field({
    description: 'Name of the fruit'
  })
  name: string;

  @Field(type => Color, {
    description: 'The color of the fruit'
  })
  color: Color;
}
