import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Inventory from './Pages/Home/Inventory/Inventory';
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddItem from './Pages/AddItem/AddItem';
import MyItem from './Pages/MyItem/MyItem';
import PrivetRoute from './Pages/Login/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/updateinventory/:id' element={
          <PrivetRoute>
            <UpdateInventory />
          </PrivetRoute>
        } />
        <Route path='/manageinventory' element={
          <PrivetRoute>
            <ManageInventory />
          </PrivetRoute>
        } />
        <Route path='/additem' element={
          <PrivetRoute>
            <AddItem />
          </PrivetRoute>
        } />
        <Route path='/myitem' element={
          <PrivetRoute>
            <MyItem />
          </PrivetRoute>
        } />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
