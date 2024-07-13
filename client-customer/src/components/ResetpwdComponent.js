import axios from 'axios';
import React, {Component} from 'react';
import {toast} from 'react-toastify';
class Resetpwd extends Component{
    constructor(props){
        super(props);
        this.state = {
            txtEmail : '',
            txtID : '',
            txtToken : '',
            txtPassword : '',
        };
    }
    render(){
        return(
            <div className='align-center'>
                <h2 className='text-center'>THAY ĐỔI MẬT KHẨU</h2>
                <form>
                    <table className='align-center'>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td><input type='text'value={this.state.txtEmail} onChange={(e)=>{this.setState({txtEmail:e.target.value})}}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type='sumbit'value="SEND EMAIL" onClick={(e) => this.btnEmailClick(e)}/></td>
                            </tr>
                            <tr>
                                <td>ID</td>
                                <td><input type='text'value={this.state.txtID} onChange={(e)=>{this.setState({txtID:e.state.value})}}/></td>
                            </tr>
                            <tr>
                                <td>Token</td>
                                <td><input type='text'value={this.state.txtToken}onChange={(e)=>{this.setState({txtToken:e.target.value})}}/></td>
                            </tr>
                            <tr>
                                <td>Mật khẩu mới</td>
                                <td><input type='text'value={this.state.txtPassword}onChange={(e)=>{this.setState({txtPassword:e.target.value})}}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type='sumbit'value="RESET" onClick={(e)=>this.btnResetClick(e)}/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
    //event-handlers
    btnEmailClick(e){
        e.preventDefault();
        const email = this.state.txtEmail;
        if (email){
            this.apiSendmail(email);
        }else{
            // alert('Please input email');
            toast.warning('Email không được để trống');
        }
    }   
    btnResetClick(e){
        e.preventDefault();
        const id = this.state.txtID;
        const token = this.state.txtToken;
        const password = this.state.txtPassword;
        if (id && token && password){
            this.apiResetpwd(id,token,password);
        }else{
            // alert('Please input id and token and password');
            toast.warning('Các trường thông tin không được để trống!!');
        }
    }
    apiSendmail(email){
        axios.get('/api/customer/sendmail/'+email).then((res)=>{
            const result = res.data;
            // alert(result.message);
            toast.error(result.message);
        });
    }
    apiResetpwd(id,token,password){
        const body = {id:id,token:token,password:password};
        axios.post('/api/customer/resetpwd',body).then((res)=>{
            const result = res.data;
            if(result){
                // alert("OK BABY!");
                toast.success('Mật khẩu mới cập nhật thành công!!');
            }else{
                toast.warning('Mật khẩu mới cập nhật không thành công!!');
            }
        });
    }
}
export default Resetpwd;