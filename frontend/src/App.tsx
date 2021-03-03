import 'primeflex/primeflex.css';

import { Menubar } from 'primereact/menubar';

const menuItems = [{ label: 'Lançamentos' }, { label: 'Relatórios' }];

const App = () => (
  <div className="App">
    <Menubar model={menuItems} />
    <h1>Control Savings App !!</h1>
  </div>
);

export default App;
