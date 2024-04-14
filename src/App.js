import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCustom from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomForm from './components/form/Form';

import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarCustom/>
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Vamos a iluminar tu vida con los tonos más coloridos!"}/>}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/category/:categoryId" element={ <ItemListContainer greeting="Categoria: " />} />
          <Route path="/form" element={ <CustomForm/> } />
          <Route path='/cart' element={ <Cart/> }/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
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
