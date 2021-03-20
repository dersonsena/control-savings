import { ListBillsRepository } from '../../application/contracts';
import { BillModel } from '../../application/model';
import { billsCollection } from '../data-sources';
import { billModelFactory } from '../factories';

export class FakeListBillsRepository implements ListBillsRepository {
  async load(filters?: object): Promise<BillModel[]> {
    return billsCollection.map((record) => billModelFactory(record));
  }
}
