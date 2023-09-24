import './App.scss';
import AboutMe from './components/aboutme';
import Home from './components/home';
import NavBar from "./components/navBar";
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <div style={{maxWidth: '1240px', margin: "0 80px"}}>
     <Home/>
     <AboutMe/>
     <Resume/>
     </div>
    </div>
  );
}

export default App;
