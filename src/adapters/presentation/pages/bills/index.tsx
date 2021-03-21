import React, { useEffect } from 'react';
import { BillGrid } from '@/adapters/presentation/pages/bills/components/bill-grid/BillGrid';
import { ListBills } from '@/domain/usecases';

type Props = {
  listBillsUseCase: ListBills;
};

export const BillsPage: React.FunctionComponent<Props> = ({ listBillsUseCase }) => {
  useEffect(() => {
    console.log('olá');
  });

  return (
    <>
      <BillGrid bills={[]} />
    </>
  );
};
