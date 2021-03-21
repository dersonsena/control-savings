import React from 'react'
import ReactDOM from 'react-dom'

import { BillsPage } from '@/adapters/presentation/pages/bills'
import { FakeListBillsRepository } from '@/infra/repositories'
import { ListBillsService } from '@/application/services'

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/mdc-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const fakeListBillRepo = new FakeListBillsRepository()
const listBillsService = new ListBillsService(fakeListBillRepo)

ReactDOM.render(
  <React.StrictMode>
    <BillsPage listBillsUseCase={listBillsService} />
  </React.StrictMode>,
  document.getElementById('root'),
)
