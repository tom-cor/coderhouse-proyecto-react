import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from './components/navbar/Navbar'

import ItemListContainer from './components/itemListContainer/ItemListContainer';
import FetchContainer from './components/fetchContainer/FetchContainer';
import { Container } from 'react-bootstrap';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavbarCustom/>
      <Container>
      {/* <FetchContainer/> */}
        <ItemListContainer greeting={"Vamos a iluminar tu vida con los tonos más coloridos!"}/>
        <ItemDetailContainer/>
      </Container>
    </div>
  );
}

export default App;
