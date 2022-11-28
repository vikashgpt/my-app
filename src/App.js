
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/About' element = {<About/>} />
        <Route path='/Contact' element = {<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
