import './App.css';
import {Routes,Route,Link,NavLink} from 'react-router-dom'
import About from './Components/About';
import Contactinformation from './Components/Contactinformation';
import Workexamples from './Components/Workexamples';
function App() {
  return (
    <div className="App">
      <div className='link'>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contactinformation">Contactinformation</NavLink>
      <NavLink to="/workexamples">Workexamples</NavLink>
      </div>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/contactinformation' element={<Contactinformation/>} />
        <Route path='/workexamples'element={<Workexamples/>}/>
      </Routes>
    </div>
  );
}

export default App;


