import logo from './logo.svg';
import './App.css';

import { Navbar } from './components/Navbar'
import  {Footer}  from './components/Footer'
import { Welcome } from './components/Welcome';
import { About } from './components/About';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Welcome/>
    <Footer/>
    
    </>
  
  );
}

export default App;
