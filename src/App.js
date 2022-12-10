
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=' container mx-auto'>
      <h1 className='text-5xl bg-orange-400'>My Portfolio</h1>
      <Header></Header>
      <AboutMe></AboutMe>
      <Experience></Experience>
      
      <Contact></Contact>
      
      <Toaster/>
    </div>
  );
}

export default App;
