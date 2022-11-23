import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useState } from 'react'
import './OrdersManage.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ModalOrders extends Component {
    constructor(props){
        super(props);
        this.state = {
            createOrdersDetailFormList: [],
            customerId:'',
            ordersAddress:'', // Dia chi giao hang
            ordersReceiverName:'', // Ten nguoi nhan
            ordersReceiverPhone:'', // Sdt nguoi nhan 
            ordersSaleOff:'',
            paymentMethod:'', // Phương thức thanh toán: 1: COD, 2: Online         
        }
    }
    componentDidMount() {     
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleAddNewOrders=()=>{
      //let Duy =this.state.createOrdersDetailFormList
      //console.log('data ne Duyyyy',this.state)
      let isValid = this.checkValideInput();
      if (isValid === true) {
      this.props.createNewOrders(this.state)
      }
    }
    checkValideInput = () => {
      let isValid = true;
      let i=0;
      let arrInput = ['createOrdersDetailFormList','customerId','ordersAddress','ordersReceiverName','ordersReceiverPhone','ordersSaleOff','paymentMethod'];
      
      for(i = 0; i < arrInput.length; i++){
          //console.log('check inside loop', this.state[arrInput[i],arrInput[i]])
          if(!this.state[arrInput[i]]){
              isValid = false;
              toast.success('Thêm không thành công vì thiếu info' , {
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
handleSubmit = task => {
 
    this.setState({createOrdersDetailFormList: [...this.state.createOrdersDetailFormList, task]});
   
  }

  
  handleDelete = (index) => {
    const newArr = [...this.state.createOrdersDetailFormList];
    newArr.splice(index, 1);
    this.setState({createOrdersDetailFormList: newArr});
  }
  handleOnChangeInput = (event, id) => {
    //bad code
    // this.state[id]=event.target.value;
    // this.setState({
    //      ...this.state
    // }, ()=> {
    //     console.log('check bad state: ',this.state)
    // })
    //good code
    let copyState = {...this.state};
    copyState[id] = event.target.value;
    this.setState({
        ...copyState
    })
    //console.log(event.target.value, id)
}
    render() {
        //let test=this.state.adds;
        //console.log('Duyyyyyyyyyyyyyy:',test)
        //  <InputForm tasks={this.state.tasks} onDelete={this.handleDelete} />
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
                           <div className='input-container'>
                             <Header numTodos={this.state.createOrdersDetailFormList.length} />
                             <TodoList tasks={this.state.createOrdersDetailFormList} 
                             onDelete={this.handleDelete} />
                             <SubmitForm onFormSubmit={this.handleSubmit} />
                           </div>                    
                        <div className="input-container">
                            <label>customerId</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "customerId")}}
                                value={this.state.customerId}
                            />
                        </div>
                        <div className="input-container">
                            <label>ordersAddress</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersAddress")}}
                                value={this.state.ordersAddress}
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
                        <div className="input-container">
                            <label>ordersSaleOff</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersSaleOff")}}
                                value={this.state.ordersSaleOff}
                            />
                        </div>
                        <div className="input-container">
                            <label>paymentMethod</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "paymentMethod")}}
                                value={this.state.paymentMethod}
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
                        onClick={()=>{this.handleAddNewOrders()}}>Create</Button>{' '}
                    
                    <Button color="secondary" className="px-3" onClick={()=>{this.toggle()}}>Cancel</Button>

                </ModalFooter>
            </Modal>
        )
    }

}
class SubmitForm extends React.Component {
  state = { ordersDetailAmount: '',productId:'' };
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.ordersDetailAmount  === ''|| this.state.productId  === '')
     return;
    this.props.onFormSubmit(this.state);
    this.setState({ ordersDetailAmount: '',productId:'' });
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="modal-orders-body">
        <div className="input-container">
        <label>ordersDetailAmount</label>
        <input 
          type='text'
          value={this.state.ordersDetailAmount}
          onChange={(e) => this.setState({ordersDetailAmount: e.target.value})}
        />
        </div>
        <div className="input-container">
        <label>productId</label>
        <input 
          type='text'
          value={this.state.productId}
          onChange={(e) => this.setState({productId: e.target.value})}
        />
        </div>      
        </div>          
        <button className='button'>ADD</button>
      </form>
    );
  }
}
const Header = (props) => {
  return(
    <div className='card-header'>
      <h1 className='card-header-title header'>
        You have {props.numTodos} Product
      </h1>
    </div>
  )
}
const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo 
    content1={todo.ordersDetailAmount}
    content2={todo.productId}
    key={index} 
    id={index} 
    onDelete={props.onDelete} />
  })
  return( 
<div className="customers-table mt-3 mx-1">
                        <table id="customers">
                            <tbody>
                                <tr>
                                    <th>ordersDetailAmount</th>
                                    <th>productId</th>                             
                                    </tr>
                                    {todos}                                    
                                </tbody>
                        </table>
  </div>
  );
}
const Todo = (props) => {
  return(
      <tr className="divClass">
         <td>{props.content1}</td>
            <td>{props.content2}</td>                                                   
        <td>
             <button className="btn-actions" onClick={()=>props.onDelete(props.id)}><i className="fa fa-pencil-square-o"></i></button>                                                                     
         </td>
     </tr>

  );
}
const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalOrders);
