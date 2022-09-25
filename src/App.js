import Home from './Components/pages/Home/Home.jsx'
import Skills from './Components/pages/Skills/Skills.jsx'
import Projects from './Components/pages/Projects/Projects.jsx'
import Contact from './Components/pages/Contact/Contact.jsx'
import NavBar from './Components/organisms/NavBar/NavBar.jsx';
import ScrollUp from './Components/organisms/ScrollUp/ScrollUp.jsx';
import Footer from './Components/organisms/Footer/Footer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <main className='main'>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
      <ScrollUp />
    </>
  );
}

export default App;
