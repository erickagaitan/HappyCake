import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './views/Home.jsx'
import Contacto from './views/Contacto.jsx';
import NotFound from './views/NotFound';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar></Navbar>

  

   <Routes>
<Route path='/' element={ <Home />}></Route>
<Route path='/contacto'element={<Contacto/>}></Route>
<Route path='*' element={<NotFound />}></Route>
   </Routes>


   </BrowserRouter>
    </div>
  );
}

export default App;
