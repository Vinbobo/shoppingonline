import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';
class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: 'sonkk',
      txtPassword: '123'
    };
  }
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">ĐĂNG NHẬP</h2>
        <form>
          <table className="align-center">
            <tbody>
              <tr>
                <td>Tên tài khoản</td>
                <td><input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} /></td>
              </tr>
              <tr>
                <td>Mật khẩu</td>
                <td><input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Đăng nhập" onClick={(e) => this.btnLoginClick(e)} /></td>
                <td><Link to='/resetpwd'>Quên mật khẩu?</Link></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      // alert('Please input username and password');
      toast.warning('Hãy nhập tên tài khoản và mật khẩu!!!');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
        localStorage.setItem('customer_token',result.token);
        toast.success('Chào mừng bạn đến với FashionSốp');
      } else {
        // alert(result.message);
        toast.error(result.message);
      }
    });
  }
}
export default withRouter(Login);