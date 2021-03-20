import {
  BillCategoryModel,
  BillModel,
  BillStatusModel,
  BillTypeModel,
} from '../../application/model';

export const billModelFactory = (record: Record<string, unknown>): BillModel => ({
  id: record.id as number,
  dueDate: new Date(record.dueDate as string),
  type: record.type as BillTypeModel,
  description: record.description as string,
  category: record.category as BillCategoryModel,
  amount: record.amount as number,
  status: record.status as BillStatusModel,
});
