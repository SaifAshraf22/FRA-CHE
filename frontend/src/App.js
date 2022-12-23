import { Container } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
const linksAraay = ['Products', 'Services', 'Overviwe', 'Conenct Us'];

function App() {
  document.title = 'FRAÎCHE';

  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar links={linksAraay}></Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
