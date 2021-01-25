
import { Tyre } from './tyre.model';
export interface StoragePoint {
  id: number;
  code: string;
  rimCapsCount: number;
  licensePlate: string;
  mountedTyres: Tyre[];
  storedTyres: Tyre[];
}
