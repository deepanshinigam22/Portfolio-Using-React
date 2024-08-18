
import  './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MyWork from './Components/MyWork/MyWork';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <MyWork/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
