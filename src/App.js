import { useEffect, useState } from 'react';
import './App.scss';
import AboutMe from './components/aboutme';
import Contact from './components/contact/Contact';
import Home from './components/home';
import NavBar from "./components/navBar";
import Resume from './components/resume';
import { debounce } from './common/commonMethods';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(0);
  const [animation,setAnimation] = useState(false);

  const debouncedDelayStopAnimation = debounce(() => {
    setAnimation(false);
  }, 500);

  const handleMouseMove = (e) => {
    if(!animation) setAnimation(true);
    console.log({ x: e.clientX, y: e.clientY });
    setPosition({ x: e.clientX, y: e.clientY });
    debouncedDelayStopAnimation();  
  };

  useEffect(() => {

    window.addEventListener('scroll', function() {
      // Get the current scroll position in the Y-direction
      const scrollY = window.scrollY;
      setScrolled(scrollY);
      // Now, 'scrollY' contains the amount scrolled in the Y-direction
      console.log(`Scrolled ${scrollY}px vertically.`);
    });
    window.addEventListener('mousemove', handleMouseMove);

    // return () => {
    //   window.removeEventListener('mousemove', handleMouseMove);
    // };
  }, []);
  return (
    <div className="App">
       <div
        className={`app__cursor-animation ${!animation ? "hide" : "active"}`}
        style={{ left: position.x, top: position.y + scrolled }}
      ></div>
     <NavBar/>
     <div style={{maxWidth: '1240px', margin: "0 80px"}}>
     <Home/>
     <AboutMe/>
     <Resume/>
     <Contact/>
     </div>
    </div>
  );
}

export default App;
