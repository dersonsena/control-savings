import React from 'react'
import { Menubar } from 'primereact/menubar'
import { PrimeIcons } from 'primereact/api'

import { ListBillsService } from '@/application/services'
import { BillGrid } from './components/bill-grid'

import './styles.scss'

type Props = {
  listBillsUseCase: ListBillsService
}

const menuItems = [{ label: 'Lançamentos', icon: 'pi pi-align-center' }, { label: 'Relatórios' }]

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
