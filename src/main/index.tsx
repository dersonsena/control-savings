import React from 'react'
import ReactDOM from 'react-dom'

import { BillsPage } from '@/adapters/presentation/pages/bills'
import { FakeListBillsRepository } from '@/infra/repositories'
import { ListBillsService } from '@/application/services'

const fakeListBillRepo = new FakeListBillsRepository()
const listBillsService = new ListBillsService(fakeListBillRepo)

ReactDOM.render(
  <React.StrictMode>
    <BillsPage listBillsUseCase={listBillsService} />
  </React.StrictMode>,
  document.getElementById('root'),
)
