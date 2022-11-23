import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {getAllOrders,getAllOrdersDetail} from '../../../services/ordersService';
import { useState } from 'react'
import './OrdersManage.scss'
import _ from 'lodash'

class ModalEditStateOrders extends Component {
    constructor(props){
        super(props);
        this.state = {       
            id:'',
            state:'', // Dia chi giao hang
        }
    }
   async componentDidMount() {     
    let orders = this.props.EditStateOrdersDetail;
    console.log('did_mount :',orders);
    if(orders&& !_.isEmpty(orders))
    {
        this.setState({
          //  customerId:orders.customerId,
          id:orders.ordersId, // Dia chi giao hang
          //state:orders.ordersState, // Dia chi giao hang                 
        })
    }
    }
    
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleUpdateStateOrders = async(data)=>{
    await this.setState({state:data.state})  
        console.log('ID:',this.state.id);  
        console.log('State',this.state.state);  
        this.props.updateStateOrders(this.state);
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
                <ModalHeader toggle={()=>{this.toggle()}}>Update State</ModalHeader>
                <ModalBody>                                  
                    <div className="modal-orders-body">
                    <div className="input-container">
                            <label>ID :</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "id")}}
                                value={this.state.id}
                            />
                             <label>State :</label>
                        </div>
                        
                                                                                          
                        </div>
                        <Form
                            handleUpdateStateOrders={this.handleUpdateStateOrders}
                            />
                                    
                </ModalBody>
               
            </Modal>
        )
    }
  }
  const RadioInput = ({label, value, checked, setter}) => {
	return (
	  <label class="container">
	    <input type="radio"  checked={checked == value}
	           onChange={() => setter(value)} />
	    <span class="checkmark">{label}</span>
	  </label>
	);
};
   
const Form = props => {
	const [state, setState] = React.useState();
	
	const handleSubmit = e => {
		e.preventDefault();
		const data = {state};
		//const json = JSON.stringify(data, null, 4);
		//console.clear();
		//console.log(json);
        
        props.handleUpdateStateOrders(data);
	};
	return (
	  <form onSubmit={handleSubmit}>      
	      
	      <RadioInput label=" Hoàn thành" value="1" checked={state} setter={setState}  />
          
	      <RadioInput label=" Hủy " value="2" checked={state} setter={setState} />
          
          <button type="submit" >Submit</button>
	      
	  </form>
	);
};
const mapStateToProps = state => {
    return {
    };
};
const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalEditStateOrders);
