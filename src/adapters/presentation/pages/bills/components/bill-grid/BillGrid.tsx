import React from 'react';
import '@/adapters/presentation/pages/bills/components/bill-grid/styles.css';
import { BillRow } from '@/adapters/presentation/pages/bills/components/bill-grid/BillRow';
import { BillViewModel } from '@/adapters/presentation/pages/bills/view-model/bill';

type Props = {
  bills: BillViewModel[];
};

export const BillGrid: React.FunctionComponent<Props> = ({ bills }) => (
  <>
    {bills.length > 0 ? (
      bills.map((bill) => <BillRow key={bill.id} bill={bill} />)
    ) : (
      <BillRowEmpty />
    )}
  </>
);

const BillRowEmpty: React.FunctionComponent = () => (
  <div className="p-p-4 p-text-center" style={{ fontSize: '1.5em', color: '#999' }}>
    Nenhuma movimentação no filtro selecionado.
  </div>
);
