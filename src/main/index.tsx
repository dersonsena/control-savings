import React from 'react'
import ReactDOM from 'react-dom'

import { BillsPage } from '@/adapters/presentation/pages/bills'

ReactDOM.render(
  <React.StrictMode>
    <BillsPage />
  </React.StrictMode>,
  document.getElementById('root'),
)
