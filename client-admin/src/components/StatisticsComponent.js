import axios from 'axios';
import React, {Component} from 'react';
import MyContext from '../contexts/MyContext';
class Statistics extends Component{
    static contextType = MyContext;
    constructor(props){
        super(props);
        this.state = {
            noCategories:0,
            noProducts:0,
            noOrders:0,
            noOrdersPending:0,
            noOrdersApproved:0,
            noOrdersCanceled:0,
            noOrdersRevenue:0,
            noCustomers:0
        };
    }
    render(){
        return(
            <div className="text-center">
                <h2 className="text-center">THỐNG KÊ</h2>
                <table className="align-center">
                    <tbody>
                        <tr>
                            <td align="right">Số lượng danh mục</td>
                            <td></td>
                            <td>{this.state.noCategories}</td>
                        </tr>
                        <tr>
                            <td align="right">Số lượng sản phẩm:</td>
                            <td></td>
                            <td>{this.state.noProducts}</td>
                        </tr>
                        <tr>
                            <td align="right">Số đơn đặt hàng:</td>
                            <td></td>
                            <td>{this.state.noOrders}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align='right'>Số đơn hàng chờ duyệt: &ensp;</td>
                            <td>{this.state.noOrdersPending}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align='right'>Số đơn hàng đã duyệt: &ensp;</td>
                            <td>{this.state.noOrdersApproved}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align='right'>Số đơn hàng đã hủy: &ensp;</td>
                            <td>{this.state.noOrdersCanceled}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align='right'>Doanh thu: &ensp;</td>
                            <td>{this.state.noOrdersRevenue}</td>
                        </tr>
                        <tr>
                            <td align='right'>Số lượng tài khoản khách:</td>
                            <td></td>
                            <td>{this.state.noCustomers}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    componentDidMount(){
        this.apiGetStatistics();
    }
    apiGetStatistics(){
        const config = {headers:{'x-access-token':this.context.token}};
        axios.get('/api/admin/statistics', config).then((res) =>{
            const result = res.data;
            this.setState({
                noCategories:result.noCategories,
                noProduct:result.noProduct,
                noOrders:result.noOrders,
                noOrdersPending:result.noOrdersPending,
                noOrdersApproved:result.noOrdersApproved,
                noOrdersCanceled:result.noOrdersCanceled,
                noOrdersRevenue:result.noOrdersRevenue,
                noCustomers:result.noCustomers
            });
        });
    }
}
export default Statistics;
