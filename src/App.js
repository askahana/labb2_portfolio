import './App.css';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Education from './pages/Education';
import GitHub from './pages/Github';
import NotFound from './pages/NotFound';
import Loading from './pages/Loading';
import Skills from './pages/Skills';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/education" element= {<Education/>}/>
        <Route path="/experience" element= {<Experience/>}/>
        <Route path="/github" element= {<GitHub/>}/>
        <Route path="/loading" element= {<Loading/>}/>
        <Route path="/notfound" element= {<NotFound/>}/>
        <Route path="/skill" element= {<Skills/>}/>
      </Routes>
      <Footer/>
    </div>
  </HashRouter>
  );
}

export default App;
