import { Routes, Route } from 'react-router-dom'
import Home from './MainComp/Home';
import About from './MainComp/About';
import Login from './Componenets/Login/Login';
import Registration from './Componenets/Login/Registration'
import Headerfile from './Componenets/Header/Navbar';
import Shows from './MainComp/Shows';
import Adminlogin from './admin/Adminlogin';



function App() {
  return (
    <div className="App">
      <Headerfile />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/adminlogin" element={<Adminlogin />} />

      </Routes>


    </div>
  );
}

export default App;
