import { Bill } from '../entities';

export interface ListBills {
  handle: () => Promise<Bill[]>;
}
