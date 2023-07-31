import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Registerpage from './auth/Registerpage';
import Loginpage from './auth/Loginpage';
import Dashboardpage from './pages/user/Dashboardpage';
import PrivateRoutes from './Routes/PrivateRoutes';
import ForgotPassword from './auth/ForgotPassword';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/dashboard' element={<PrivateRoutes />}>
        <Route path='' element={<Dashboardpage />} />
      </Route>
      <Route path='/login' element={<Loginpage />} />
      <Route path='/forget-password' element={<ForgotPassword />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
