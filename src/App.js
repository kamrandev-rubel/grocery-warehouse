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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/updateinventory/:id' element={<UpdateInventory />} />
        <Route path='/manageinventory' element={<ManageInventory />} />
        <Route path='/additem' element={<AddItem />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
