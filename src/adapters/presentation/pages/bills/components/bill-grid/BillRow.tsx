import React from 'react'
import classNames from 'classnames'
import { BillStatusAction, BillAmount, BillBullet } from './'
import { BillViewModel, BillType as Type } from '../../view-model/bill'
import { BillType } from '@/domain/entities'

type Props = {
  bill: BillViewModel
}

export const BillRow: React.FunctionComponent<Props> = ({ bill }) => {
  const overdue = new Date(bill.dueDate) >= new Date()

  return (
    <div key={bill.id} className={classNames('bill-row p-grid p-pb-2 p-pt-2', { overdue })}>
      <div className="p-col">
        <BillBullet bill={bill} />
        <span className="p-ml-4">{bill.description}</span>
      </div>
      <div className="p-col-2 p-text-center">{bill.category.name}</div>
      <div className="p-col-2 p-text-center">
        <BillAmount bill={bill} />
      </div>
      <div className="p-col-1 p-text-center">
        <BillStatusAction
          bill={bill}
          onClick={() => console.log('Alterar status da conta', bill)}
        />
      </div>
    </div>
  )
}

export const getBillColorByType = (billType: Type): string => {
  return billType.name === BillType.EXPENSE ? '#FF7E7C' : '#56caa4'
}
