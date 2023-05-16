// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import FooterTop from './components/FooterTop';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div className='w-full h-full'>
      <Header/>
    <Banner/>
    <Product/>
    <FooterTop/>
    </div> 
  );
}

export default App;




