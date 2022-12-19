import { Button } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
const linksAraay=["Products","Services","Overviwe","Conenct Us"];
function App() {
  document.title = 'FRAÎCHE';
  return (
    <BrowserRouter>
      <div className="nav">
        <Navbar links={linksAraay}/>
      </div>
      <div className="ui">
        <Button>ui</Button>
      </div>
      <div>
        <header>
          <Link to="/">FRAÎCHE</Link>
        </header>
        {/*  test */}
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
