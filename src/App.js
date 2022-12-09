import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <div className=' container mx-auto'>
      <h1 className='text-5xl bg-orange-400'>My Portfolio</h1>
      <Header></Header>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
