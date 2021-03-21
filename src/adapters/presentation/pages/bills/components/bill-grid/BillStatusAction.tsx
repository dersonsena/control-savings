import { Button } from 'primereact/button'
// import { PrimeIcons } from 'primereact/api'
import React from 'react'
import { BillStatus } from '../../../../../../domain/entities'
import { BillViewModel } from '../../view-model/bill'

type Props = {
  bill: BillViewModel
  onClick: () => void
}

export const BillStatusAction: React.FunctionComponent<Props> = ({ bill, onClick }) => {
  const color = bill.status.name === BillStatus.OPENED ? '#999' : '#56caa4'

  return (
    <Button
      title="Pagar/Receber esta conta"
      onClick={onClick}
      // icon={PrimeIcons.CHECK_CIRCLE}
      style={{ padding: 0, color }}
      className="p-button-link"
    />
  )
}
