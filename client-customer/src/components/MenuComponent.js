import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}>{item.name}</Link></li>
      );
    });
    return (
      <div className="border-bottom">
        <div className="float-left">
          <ul className="menu">
            <li className="menu"><Link to='/'>TRANG CHỦ</Link></li>
            <li className="menu"><Link to='/gmap'>VỊ TRÍ CỬA HÀNG</Link></li>
          {cates}
          </ul>
        </div>
        <div style={{display:"inline"}} class="form-switch">
            <input class="form-check-input" type="checkbox" onChange={(e) => this.cbkChangeMode(e)}/>&nbsp; Chế độ sáng/tối
        </div>
        <div className="float-right">
          <form className="search">
           <input type="search" placeholder="Nhập sản phẩm cần tìm" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
           <input type="submit" value="TÌM KIẾM" onClick={(e) => this.btnSearchClick(e)} />
          </form>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
    // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  cbkChangeMode(e){
    if (e.target.checked){
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    }else{
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);
