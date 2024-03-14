import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from './components/navbar/Navbar'

import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavbarCustom/>
      <ItemListContainer greeting={"Vamos a iluminar tu vida con los tonos más coloridos!"}/>
    </div>
  );
}

export default App;
