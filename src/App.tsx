import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

import { Menubar } from 'primereact/menubar';
import { PrimeIcons } from 'primereact/api';
import { BillsPage } from './presentation/pages/financial/bills';
import { ListBillsService } from './application/services';
import { FakeListBillsRepository } from './infra/repositories/fake-list-bills';

const menuItems = [
  { label: 'Lançamentos', icon: PrimeIcons.MONEY_BILL },
  { label: 'Relatórios', icon: PrimeIcons.CHART_BAR },
];

const fakeListBillRepo = new FakeListBillsRepository();
const listBillsService = new ListBillsService(fakeListBillRepo);

const App = () => (
  <div className="App">
    <header className="App-header">
      <nav>
        <Menubar model={menuItems} />
      </nav>
    </header>

    <main className="container">
      <section className="p-mt-5">
        <BillsPage listBillsUseCase={listBillsService} />
      </section>
    </main>
  </div>
);

export default App;
