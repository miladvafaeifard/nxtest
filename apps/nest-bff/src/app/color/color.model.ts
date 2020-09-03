import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Color {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({
    nullable: true,
    description: 'The HTML color code of the fruit'
  })
  colorCode: string | null;
}
