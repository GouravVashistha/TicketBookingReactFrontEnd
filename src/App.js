import { Routes, Route } from 'react-router-dom'
import Home from './MainComp/Home';
import About from './MainComp/About';
import Login from './Componenets/Login/Login';
import Registration from './Componenets/Login/Registration'
import Headerfile from './Componenets/Header/Navbar';
import Shows from './MainComp/Shows';
import Adminlogin from './admin/Adminlogin';
import AdminHome from './admin/AdminHome';
import Homepage from './MainComp/Homepage';
import AddMovies from './admin/AddMovie';
import Addshows from './admin/Addshow';
import Addhall from './admin/Addhall';
import Addhallcap from './admin/Addcap';
import Booking from './MainComp/Booking'
// import HomePage from './MainComp/HomePage';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/booking" element={<Booking />} />


        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/addmovie" element={<AddMovies />} />
        <Route path="/admin/addshow" element={<Addshows />} />
        <Route path="/admin/addhall" element={<Addhall />} />
        <Route path="/admin/hallcap" element={<Addhallcap />} />


      </Routes>


    </div>
  );
}

export default App;
