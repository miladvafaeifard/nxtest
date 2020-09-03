import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Color } from './color.model';

const colors = [{
  id: '1',
  name: 'Green',
  colorCode: 'green'
}, {
  id: '2',
  name: 'Yellow',
  colorCode: 'yellow'
}, {
  id: '3',
  name: 'Red',
  colorCode: 'red'
}, {
  id: '4',
  name: 'Blue',
  colorCode: 'blue'
}];

@Injectable()
export class ColorService {
  async findOneById(id: string): Promise<Color | null> {
    return of(colors.find(color => color.id === id) || null).pipe(delay(1000)).toPromise()
  }
}
