// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Products from './Products';
import Shirts from './Shirts';
import Jens from './Jens';
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products />}>
          <Route path='Shirts' element={<Shirts />} />
          <Route path='Jens' element={<Jens />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
