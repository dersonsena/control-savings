import React, { useEffect, useState } from 'react';
import { BillGrid } from './components/BillGrid';
import { ListBills } from '../../../../domain/usecases';
import { BillViewModel } from './view-model/bill';

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
