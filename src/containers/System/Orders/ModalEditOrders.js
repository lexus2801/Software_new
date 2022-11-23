import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {getAllOrders,getAllOrdersDetail} from '../../../services/ordersService';
import { useState } from 'react'
import './OrdersManage.scss'
import _ from 'lodash'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ModalEditOrders extends Component {
    constructor(props){
        super(props);
        this.state = {
          //updateOrdersDetailFormList: [],
           // customerId:'',
            ordersAddress:'', // Dia chi giao hang
            ordersId:'',
            ordersReceiverName:'', // Ten nguoi nhan
            ordersReceiverPhone:'', // Sdt nguoi nhan 
           // ordersSaleOff:'',
            //paymentMethod:'', // Phương thức thanh toán: 1: COD, 2: Online      
           
        }
    }
   async componentDidMount() {     
    let orders = this.props.EditOrdersDetail;
    console.log('did_mount :',orders);
    if(orders&& !_.isEmpty(orders))
    {
        this.setState({
          //  customerId:orders.customerId,
            ordersAddress:orders.ordersAddress, // Dia chi giao hang
            ordersId:orders.ordersId,
            ordersReceiverName:orders.ordersReceiverName, // Ten nguoi nhan
            ordersReceiverPhone:orders.ordersReceiverPhone, // Sdt nguoi nhan 
         
        })
    }
    }
    checkValideInput = () => {
        let isValid = true;
        let i=0;
        let arrInput = ['ordersAddress','ordersId','ordersReceiverName','ordersReceiverPhone'];
        
        for(i = 0; i < arrInput.length; i++){
            //console.log('check inside loop', this.state[arrInput[i],arrInput[i]])
            if(!this.state[arrInput[i]]){
                isValid = false;
                toast.success('Đăng ký không thành công vì thiếu info' , {
                    position: "bottom-center",
                    width: 400,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                break;
            }
        }
        return isValid;
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleUpdateOrders=()=>{
        let isValid = this.checkValideInput();
        if (isValid === true) {
      this.props.updateOrders(this.state)
        }
    }
    

  
  handleOnChangeInput = (event, id) => {

    let copyState = {...this.state};
    copyState[id] = event.target.value;
    this.setState({
        ...copyState
    })
    
}
    render() {
      
        return (
            
            <Modal               
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-orders-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Create product</ModalHeader>
                <ModalBody>                                  
                    <div className="modal-orders-body">
                                       
                        <div className="input-container">
                            <label>ordersAddress</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersAddress")}}
                                value={this.state.ordersAddress}
                            />
                        </div>
                        <div className="input-container">
                            <label>ordersId</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersId")}}
                                value={this.state.ordersId}
                            />
                        </div>
                        <div className="input-container">
                            <label>ordersReceiverName</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersReceiverName")}}
                                value={this.state.ordersReceiverName}
                            />
                        </div>
                        <div className="input-container">
                            <label>ordersReceiverPhone</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersReceiverPhone")}}
                                value={this.state.ordersReceiverPhone}
                            />
                        </div>
                       
                
                       
           
                    </div>
                </ModalBody>
                <ModalFooter                 
                    // isCreate={this.props.isCreate}
                    // isEdit={this.props.isEdit}

                >
                    
                    <Button 
                        color="primary" 
                        className="px-3" 
                        onClick={()=>{this.handleUpdateOrders()}}>Update</Button>{' '}
                    
                    <Button color="secondary" className="px-3" onClick={()=>{this.toggle()}}>Cancel</Button>

                </ModalFooter>
            </Modal>
        )
    }
  }
const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditOrders);
