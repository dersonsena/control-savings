export type Bill = {
  id: number;
  dueDate: Date;
  type: BillType;
  description: string;
  category: BillCategory;
  amount: number;
  status: BillStatus;
};

type BillCategory = {
  id: number;
  name: string;
};

export enum BillType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export enum BillStatus {
  OPENED = 'OPENED',
  PAYED = 'PAYED',
  RECEIVED = 'RECEIVED',
}
