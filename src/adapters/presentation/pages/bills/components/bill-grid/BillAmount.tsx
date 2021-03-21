import React from 'react'
import { getBillColorByType } from './BillRow'
import { BillViewModel } from '../../view-model/bill'

type Props = {
  bill: BillViewModel
}

export const BillAmount: React.FunctionComponent<Props> = ({ bill }) => (
  <span style={{ color: getBillColorByType(bill.type) }}>{bill.amount}</span>
)
