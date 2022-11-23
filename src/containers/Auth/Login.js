import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import {handleLoginApi} from '../../services/userService'
import { FormattedMessage } from 'react-intl';
import { cnpmConstant } from '../../utils/constant.js';
import RegisterModal  from './RegisterModal.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { emitter} from "../../utils/emitter";
//import { emitter} from "../../../package-lock.json"

import {RegisterService} from '../../services/customerService.js'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            message: '',
            isOpenModalRegister: false,
        
        }
    }
    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }


    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            message: ''
        })
        let response = await handleLoginApi(this.state.username,this.state.password)
        if(response.data && response.data.token){
            this.setState({
                message: response.message
            })
            localStorage.setItem('token',response.data.token)
            this.props.userLoginSuccess(response.data)
        }
        else{
            this.setState({
                message: response.message
            })
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    handleRegister = async(data)=>{
        //let ret =await getAllOrdersDetail(data.ordersId);
        // console.log('click save product:',ret.data);
         this.setState ({
        isOpenModalRegister:true,
        // ListOrdersDetail:data.ordersId,
         })
    }
    toggleRegisterModal = () =>{
        this.setState ({
            isOpenModalRegister: !this.state.isOpenModalRegister,
            //ListOrdersDetail:null
        })
    }
    RegisterOrders= async (data) => {
        // let response = await editStateOrdersService(data);
        // let response = await RegisterService(data);
        // console.log('respones create cus: ', response)
        try{
            let response = await RegisterService(data);
            console.log('Thong bao :',response.result)
            if(response.result == true)
            {
            toast.success('tạo tài khoản thành công', {
                            position: "bottom-center",
                            width: 400,
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                 else{
                    toast.success('Tạo tài khoản thất bại', {
                        position: "bottom-center",
                        width: 400,
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    this.setState({
                        isOpenModalRegister: false,
                    })
                 }
            if(response && response.response===false){
                        alert(response.message)
                    }else{
                        //await this.getAllOrdersFromReact();
                        this.setState({
                            isOpenModalRegister: false,
                        })
                        
                        emitter.emit('EVENT_CLEAR_MODAL_DATA')
                        
                    }
                }catch(e){
                    this.setState({
                        isOpenModalRegister: false,
                    })
                    toast.success('Tạo tài khoản thất bại', {
                        position: "bottom-center",
                        width: 400,
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log(e)
                }    

     }
    render() {
        return (

            
            <div className='login-background'>
                {this.state.isOpenModalRegister&&<RegisterModal
                        isOpen={this.state.isOpenModalRegister}
                        toggleFromParent={this.toggleRegisterModal}
                        RegisterOrders={this.RegisterOrders}
                        //currenListOrdersDetail = {this.state.ListOrdersDetail}
                    />
                }
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter your username'
                                value={this.state.username} 
                                onChange={(e) => this.handleOnChangeUsername(e)}/>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'} className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(e) => this.handleOnChangePassword(e)}/>
                                
                                <span
                                    onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ?  "fa fa-eye" : 'fa fa-eye-slash'} aria-hidden="true" ></i>
                                </span>
                            </div>
                            
                        </div>
                        <div className='col-12' style={{color:'red'}}>
                            {this.state.message}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span  onClick={() => this.handleRegister()}  className='forgot-password'>
                                Register
                            </span>
                        </div>
                        <div className='col-12'></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
