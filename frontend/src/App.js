import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import data from './data';
import { useState } from 'react';
  const linksAraay = ['Products', 'Services', 'Overviwe', 'Conenct Us'];

function App() {
  document.title = 'FRAÎCHE';
  const [searchTerm,setSearchTerm]=useState("");

  return (
    
    <BrowserRouter>
    
   
      <div className="nav">
        <Navbar links={linksAraay} />
      </div>
      
     

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        
    </BrowserRouter>
  );
}

export default App;
