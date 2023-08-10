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
import AdminRoutes from './Routes/AdminRoutes';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/dashboard' element={<PrivateRoutes />}>
        <Route path='user' element={<Dashboardpage />} />
        <Route path='user/profile' element={<Profile />} />
        <Route path='user/orders' element={<Orders />} />

      </Route>
      <Route path='/dashboard' element={<AdminRoutes />}>
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='admin/create-category' element={<CreateCategory />} />
        <Route path='admin/create-products' element={<CreateProduct />} />
        <Route path='admin/users' element={<Users />} />

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
