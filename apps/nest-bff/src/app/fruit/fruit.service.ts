import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { tsShared } from '@nxtest/ts-shared';
import { bffShared } from '@nxtest/bff-shared';

const fruits = [{
  id: '1',
  name: 'Apple',
  colorId: '1'
}, {
  id: '2',
  name: 'Banana',
  colorId: '2'
}, {
  id: '3',
  name: 'Strawberry',
  colorId: '3'
}, {
  id: '4',
  name: `${tsShared()} fruit`,
  colorId: '4'
}, {
  id: '5',
  name: `${bffShared()} fruit`,
  colorId: '5'
}];


@Injectable()
export class FruitService {
  async findOneById(id: string) {
    return of(fruits.find(fruit => fruit.id === id) || null).pipe(
      delay(1000)
    );
  }

  async findAll() {
    return of(fruits).pipe(
      delay(1000)
    );
  }
}
