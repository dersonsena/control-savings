import React from 'react';
import { getBillColorByType } from './BillRow';
import { BillViewModel } from '../../view-model/bill';

type Props = {
  bill: BillViewModel;
};

export const BillBullet: React.FunctionComponent<Props> = ({ bill }) => {
  return (
    <i
      className="pi pi-circle-on"
      style={{ fontSize: '.6em', color: getBillColorByType(bill.type) }}
    />
  );
};
