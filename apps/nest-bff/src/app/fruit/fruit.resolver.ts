import { Resolver, Args, ResolveField, Parent, Query } from '@nestjs/graphql';
import { Fruit } from './fruit.model';
import { FruitService } from './fruit.service';
import { ColorService } from '../color/color.service';
import { Color } from '../color/color.model';

@Resolver(of => Fruit)
export class FruitResolver {
  constructor(private fruitService: FruitService, private colorService: ColorService) {}

  @Query(returns => Fruit)
  async getFruit(@Args('id') id: string) {
    return this.fruitService.findOneById(id);
  }

  @Query(returns => [Fruit])
  async getAllFruits() {
    return this.fruitService.findAll();
  }

  @ResolveField('color', returns => Color)
  async color(@Parent() fruit: any) {
    return this.colorService.findOneById(fruit.colorId);
  }
}
