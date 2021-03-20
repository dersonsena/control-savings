import { ListBills } from '../../domain/usecases';
import { ListBillsRepository } from '../contracts';
import { Bill } from '../../domain/entities';

export class ListBillsService implements ListBills {
  constructor(private readonly listBillsRepository: ListBillsRepository) {}

  async handle(): Promise<Bill[]> {
    const bills = await this.listBillsRepository.load();
    return bills;
  }
}
