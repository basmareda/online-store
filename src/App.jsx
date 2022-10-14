//import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Details from './Components/Details';

import Thefooter from './Components/Footer';
import Login from './Components/Login';
import Products from './Components/Products';
import Home from './Components/Slider';

import MNavbar from './Components/Thenav';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MNavbar/>
              <Routes>
        <Route exact path='/' element={<Home/>}  ></Route>
          <Route exact path='/home' element={<Home/>}  ></Route>
          <Route path='/products' element={<Products/>}  ></Route>
          <Route path='/details' element={<Details/>}  ></Route>
          <Route path='/about' element={<About/>}  ></Route>
          <Route path='/contact' element={<Login/>}  ></Route>
          </Routes>
      <Thefooter/> 
          {/* <div className='fw-bold'>fffffff</div> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
