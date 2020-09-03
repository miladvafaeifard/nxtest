import { tsShared } from '@nxtest/ts-shared';

export function bffShared(): string {
  return `bff-shared which is using ${tsShared()}`;
}
