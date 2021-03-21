import { PrimeIcons } from 'primereact/api'
import React from 'react'

import './styles.scss'
import { ListBillsService } from '@/application/services'

type Props = {
  listBillsUseCase: ListBillsService
}

const menuItems = [
  { label: 'Lançamentos', icon: PrimeIcons.MONEY_BILL },
  { label: 'Relatórios', icon: PrimeIcons.CHART_BAR },
]

export const BillsPage: React.FunctionComponent<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>MENU</nav>
      </header>

      <main className="container">
        <section className="p-mt-5">GRID</section>
      </main>
    </div>
  )
}
