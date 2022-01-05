import { Routes, Route } from 'react-router-dom'
import Home from './MainComp/Home';
import About from './MainComp/About';
import Login from './Componenets/Login/Login';
import Registration from './Componenets/Login/Registration'
import Headerfile from './Componenets/Header/Navbar';

function App() {
  return (
    <div className="App">
      <Headerfile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

      </Routes>

    </div>
  );
}



export default App;
