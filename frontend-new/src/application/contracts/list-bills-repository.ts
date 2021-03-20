import { BillModel } from '../model';

export interface ListBillsRepository {
  load: (filters?: object) => Promise<BillModel[]>;
}
