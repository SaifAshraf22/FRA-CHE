import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import data from './data';
import { useState } from 'react';
function App() {
  document.title = 'FRAÎCHE';
  const [searchTerm,setSearchTerm]=useState("");
  const linksAraay = ['Products', 'Services', 'Overviwe', 'Conenct Us'];

  return (
    
    <BrowserRouter>
    
    <div className='createSearch'>
      <div className='searchInput'>
        <input id="Input"type="text"placeholder="search here..." onChange={(event)=>{
          setSearchTerm(event.target.value);
        }}/>
      </div>
      <div className='templete'>
        {
          data
          .filter((val)=>{
            if(searchTerm===""){
              return val;
            }else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val;
          }
          })
          .map((val)=> {
            return
          })
        }
      </div>
      </div>
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
