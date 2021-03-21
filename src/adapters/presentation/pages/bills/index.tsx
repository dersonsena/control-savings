import React from 'react'
import { Menubar } from 'primereact/menubar'
import { PrimeIcons } from 'primereact/api'

import { ListBillsService } from '@/application/services'
import { BillGrid } from './components/bill-grid'

import './styles.css'

type Props = {
  listBillsUseCase: ListBillsService
}

const menuItems = [
  { label: 'Lançamentos', icon: PrimeIcons.MONEY_BILL },
  { label: 'Relatórios', icon: PrimeIcons.ALIGN_JUSTIFY },
]

export const BillsPage: React.FunctionComponent<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Menubar model={menuItems} />
        </nav>
      </header>

      <div className="container">
        <section className="p-mt-5">
          <BillGrid bills={[]} />
        </section>
      </div>
    </div>
  )
}
