import { Bill } from '../../../../../domain/entities';

export class BillViewModel {
  id?: number;
  dueDate?: string;
  description?: string;
  type?: BillType;
  category?: BillCategory;
  amount?: string;
  status?: BillStatus;

  static map(entity: Bill): BillViewModel {
    return {
      ...entity,
      dueDate: entity.dueDate.toISOString(),
      type: { name: entity.type },
      category: { id: entity.category.id, name: entity.category.name },
      amount: String(entity.amount).replace('.', ','),
      status: { name: entity.status },
    };
  }

  static collection(entities: Bill[]): BillViewModel[] {
    return entities.map((entity) => BillViewModel.map(entity));
  }
}

export type BillCategory = {
  id: number;
  name: string;
};

export type BillType = {
  name: string;
};

export type BillStatus = {
  name: string;
};
