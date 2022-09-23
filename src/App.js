import Home from './Components/pages/Home/Home.jsx'
import About from './Components/pages/About/About.jsx'
import Skills from './Components/pages/Skills/Skills.jsx'
import Projects from './Components/pages/Projects/Projects.jsx'
import Contact from './Components/pages/Contact/Contact.jsx'
import NavBar from './Components/organisms/NavBar/NavBar.jsx';

function App() {
  return (
    <>

      <NavBar />
      <main className='main'>
       <Home />
       <Skills />
       <Projects />
      </main>

    </>
  );
}

export default App;
