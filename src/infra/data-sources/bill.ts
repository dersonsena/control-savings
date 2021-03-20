export const billsCollection = [
  {
    id: 1,
    dueDate: '2021-03-01 00:00:00',
    type: 'EXPENSE',
    description: 'Alto Falantes MacBook (Lene)',
    category: { id: 1, name: 'Empréstimos' },
    amount: -185,
    status: 'OPENED',
  },
  {
    id: 2,
    dueDate: '2021-03-01 00:00:00',
    type: 'EXPENSE',
    description: 'Buffet (Lene)',
    category: { id: 1, name: 'Empréstimos' },
    amount: -98,
    status: 'PAYED',
  },
  {
    id: 3,
    dueDate: '2021-03-01 00:00:00',
    type: 'EXPENSE',
    description: 'Esquinão plástico (Lene)',
    category: { id: 1, name: 'Empréstimos' },
    amount: -124.8,
    status: 'OPENED',
  },
  {
    id: 4,
    dueDate: '2021-03-05 00:00:00',
    type: 'EXPENSE',
    description: 'Plano de Saúde UNIMED',
    category: { id: 2, name: 'Plano de Saúde' },
    amount: -748.2,
    status: 'PAYED',
  },
  {
    id: 5,
    dueDate: '2021-03-05 00:00:00',
    type: 'EXPENSE',
    description: 'ENEL',
    category: { id: 3, name: 'Luz' },
    amount: -333.57,
    status: 'OPENED',
  },
  {
    id: 6,
    dueDate: '2021-03-15 00:00:00',
    type: 'INCOME',
    description: 'Salário Kilderson',
    category: { id: 4, name: 'Salário' },
    amount: 8816.14,
    status: 'RECEIVED',
  },
];