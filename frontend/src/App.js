import { Button } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  document.title = 'FRAÎCHE';
  return (
    <BrowserRouter>
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
