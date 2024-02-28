import './App.css';
import Navbar from './components/navBar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Vamos a iluminar tu vida con los tonos más coloridos!"}/>
    </div>
  );
}

export default App;
