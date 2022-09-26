import React, { useState } from 'react'
import Home from './Components/pages/Home/Home.jsx'
import Skills from './Components/pages/Skills/Skills.jsx'
import Projects from './Components/pages/Projects/Projects.jsx'
import Contact from './Components/pages/Contact/Contact.jsx'
import NavBar from './Components/organisms/NavBar/NavBar.jsx';
import ScrollUp from './Components/organisms/ScrollUp/ScrollUp.jsx';

function App() {
  let [darkmode, setDarkmode] = useState('light')
  return (
    <>
      <NavBar setDarkmode={setDarkmode} darkmode={darkmode}/>
      <main className='main'>
        <Home darkmode={darkmode} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollUp />
    </>
  );
}

export default App;
