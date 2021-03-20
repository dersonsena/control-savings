import React from 'react';
import './styles.css';
import { BillRow } from './BillRow';
import { BillViewModel } from '../../view-model/bill';

type Props = {
  bills: BillViewModel[];
};

const BillRowEmpty: React.FunctionComponent = () => (
  <div className="p-p-4 p-text-center" style={{ fontSize: '1.5em', color: '#999' }}>
    Nenhuma movimentação no filtro selecionado.
  </div>
);

export const BillGrid: React.FunctionComponent<Props> = ({ bills }) => (
  <>
    {bills.length > 0 ? (
      bills.map((bill) => <BillRow key={bill.id} bill={bill} />)
    ) : (
      <BillRowEmpty />
    )}
  </>
);
