import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Introduce from './components/Introduce';
import Product from './components/Product';
import News from './components/News';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Intro from './components/Intro';
import MenuContactTop from './components/MenuContactTop'
import MainMenu from './components/MainMenu'
import ContactInfo from './components/ContactInfo';
import Menu from './components/Menu';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          {/* menu-contact */}
          <MenuContactTop />
          {/* intro */}
          <Intro />
          {/* main-menu */}
          <MainMenu />
          <div id="top-up" className="bg-green">
            <i className="fas fa-angle-up" />
          </div>
        </header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/gioithieu' element={<Introduce />}></Route>
          <Route path='/sanpham' element={<Products />}></Route>
          <Route path='/dichvu' ></Route>
          <Route path='/hotrokhachang'></Route>
          <Route path='/tintuc' element={<News />}></Route>
          <Route path='/lienhe' element={<Contact />}></Route>
          <Route path='/sanpham/chitietsanpham' element={<Product></Product>}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <footer>
          
          <div className="content">
            {/* menu */}
            <Menu />
            {/* contact */}
            <ContactInfo />
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
