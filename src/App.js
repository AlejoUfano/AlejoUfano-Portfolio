import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home/Home.jsx'
import Skills from './Components/pages/Skills/Skills.jsx'
import Projects from './Components/pages/Projects/Projects.jsx'
import Contact from './Components/pages/Contact/Contact.jsx'
import NavBar from './Components/organisms/NavBar/NavBar.jsx';

function App() {
  return (
    <>

      <NavBar/>

      <Routes>
        <Route path='/' element={<Home />} />        
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </>
  );
}

export default App;
