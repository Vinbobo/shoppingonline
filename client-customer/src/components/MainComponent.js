import React, { Component } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './MenuComponent';
import Inform from './InformComponent';
import Product from './ProductComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './ProductDetailComponent';
import Signup from './SignupComponent';
import Active from './ActiveComponent';
import Login from './LoginComponent';
import Myprofile from './MyprofileComponent';
import Mycart from './MycartComponent';
import Myorders from './MyordersComponent';
import Gmap from './GmapComponent';
import TawkMessenger from './TawkMessengerComponent'
import Resetpwd from './ResetpwdComponent';
import axios from 'axios';
import MyContext from '../contexts/MyContext';
class Main extends Component {
  static contextTyp = MyContext;
  render() {
    return (
      <div className="body-customer">
        <Menu />
        <Inform />
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/category/:cid' element={<Product />} />
          <Route path='/product/search/:keyword' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/active' element={<Active />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/mycart' element={<Mycart />} />
          <Route path='/myorders' element={<Myorders />} />
          <Route path='/gmap' element={<Gmap/>}/>
          <Route path='/resetpwd' element={<Resetpwd/>}/>
        </Routes>
        <TawkMessenger/>
        <ToastContainer autoclose={3000}/>
      </div>
    );
  }
  componentDidMount(){
    const token = localStorage.getItem('customer_token');
    if (token) this.apiGetAccount(token);
  }
  apiGetAccount(token){
    const config = {headers:{'x-access-token':token}};
    axios.get('/api/customer/account',config).then((res)=>{
      const result = res.data;
      this.context.setToken(token);
      this.context.setCustomer(result);
    })
  }
}
export default Main;