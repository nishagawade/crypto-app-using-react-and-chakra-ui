import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router,  Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';

function App() {
  return (
    <>
    
      <Router>
        <Header/>
        <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path='/exchanges' element = {<Exchanges/>}> </Route>
        <Route path='/coins' element = {<Coins/>}> </Route>
        </Routes>
       
      </Router>
      
      <Footer/>
    
    </>
  );
}

export default App;
