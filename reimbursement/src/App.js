import React from 'react';
import logo from './logo.svg';
import { BrowserRouter ,Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CreateEmployee from './pages/createEmployee';
import {NotificationContainer} from 'react-notifications'
import 'react-notifications/lib/notifications.css';
import Login from './pages/login';
import Tryme from './pages/try';
import CreateManager from './pages/createManager';
import GetAllEmployee from './pages/getAllEmployee';
import LogOut from './pages/logout';
import CreateReimbursement from './pages/createReimbursement';
import GetUserReimbursement from './pages/userReimbursement';
import GetAllReimbursement from './pages/getAllReimbursement';
import Update from './pages/updateReimbursement';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './pages/navigation';
import { Form, Button, Col, Container } from 'react-bootstrap';
import Home from './pages/Welcome';
import GetUserReimbursementProcess from './pages/reimburseProcess';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Tryme/>
    
  
     <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path ="/createEmployee" element={<CreateEmployee/>}/>
        <Route path ="/createManager" element={<CreateManager/>}/>
        <Route path='/getAll' element={<GetAllEmployee/>} />
        <Route path='/logout' element= {<LogOut/>} />
        <Route path='/reimburse/create' element={<CreateReimbursement/>} />
        <Route path='/reimburse/get' element={<GetUserReimbursement/>} />
        <Route path='/reimburse/getAll' element ={<GetAllReimbursement/>} />
        <Route path='/reimburse/update' element={<Update/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/process" element={<GetUserReimbursementProcess/>} />

      </Routes>
   
     <NotificationContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
