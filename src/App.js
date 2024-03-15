import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCustom from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavbarCustom/>
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting={"Vamos a iluminar tu vida con los tonos más coloridos!"}/>}/>
        <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
        <Route path="/category/:categoryId" element={ <ItemListContainer greeting="Categoria: " />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <NavbarCustom/>
    //   <Container>
    //   {/* <FetchContainer/> */}
    //     <ItemListContainer greeting={"Vamos a iluminar tu vida con los tonos más coloridos!"}/>
    //     <ItemDetailContainer/>
    //   </Container>
    // </div>
  );
}

export default App;
