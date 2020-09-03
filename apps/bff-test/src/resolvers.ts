import { tsShared } from '@nxtest/ts-shared';
import { bffShared } from '@nxtest/bff-shared';
import { testTypes } from '@nxtest/schema';

const fruits: testTypes.Fruit[] = [{
  id: '1',
  name: 'Apple'
}, {
  id: '2',
  name: 'Banana'
}, {
  id: '3',
  name: 'Strawberry'
}, {
  id: '4',
  name: `${tsShared()} fruit`
}, {
  id: '5',
  name: `${bffShared()} fruit`
}];

export const resolvers: testTypes.Resolvers = {
  Query: {
    fruits: async (): Promise<testTypes.Fruit[]> =>
      new Promise(resolve => resolve(fruits))
  }
};
