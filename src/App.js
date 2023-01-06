import './App.css';
import {Routes,BrowserRouter, Route, Outlet, Navigate} from 'react-router-dom'
import Home from './Component/HomeComponent/Home';
import AboutUs from './Component/HomeComponent/comp/Aboutus';
import Grandpa from './Component/HomeComponent/comp/Grandpaa';
import Kems from './Component/HomeComponent/comp/Kems';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/grandpa' element={<Grandpa/>}/>
    <Route path="/kems" element={<Kems/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
