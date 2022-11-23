import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter} from "../../../utils/emitter";
import _ from 'lodash';

class ModalUpdateCustomer extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            customerFullName: '',
            customerEmail: '',
            customerAddress: '',
            customerPhone: '',
            birthday: '',
            customerPassword: '',
            isLoyalty: '',
            loyaltyLevel: '',
            saleOff: '',
            status: '',
        }
    }


    
    componentDidMount() {
        let customer = this.props.currentCustomer;
        if(customer && !_.isEmpty(customer))
        {
            this.setState({
                id: customer.id,
                customerFullName: customer.fullName,
                customerEmail: customer.email,
                customerAddress: customer.addressCustomer,
                customerPhone: customer.phone,
                birthday: customer.birthdayCustomer,
                isLoyalty: customer.isLoyaltyCustomer,
                loyaltyLevel: customer.loyaltyLevelCustomer,
                saleOff: customer.saleOffCustomer,
                status: customer.status,
            })
        }

        console.log('check: ',this.props.currentCustomer)
    }

    toggle = () => {
        this.props.toggleFromParent();
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

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['customerFullName','customerEmail','customerPhone', 'birthday','isLoyalty'];
        
        for(let i = 0; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    
    handleUpdateCustomer = () => {
        let isValid = this.checkValideInput();
        if(isValid === true){
            //call api create modal
            this.props.updateCustomer(this.state);
        }
        
    }    

    render() {
        return (
            <Modal                 
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-customer-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Update Customer</ModalHeader>
                <ModalBody>
                    <div className="modal-customer-body">
                        <div className="input-container">
                            <label>Name</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "customerFullName")}}
                                value={this.state.customerFullName}
                            />
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "customerEmail")}}
                                value={this.state.customerEmail}
                            />
                        </div>
                        <div className="input-container">
                            <label>Address</label>
                               <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "customerAddress")}}
                                value={this.state.customerAddress}
                            />
                        </div>
                        <div className="input-container">
                            <label>Phone</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "customerPhone")}}
                                value={this.state.customerPhone}
                            />
                        </div>
                        <div className="input-container">
                            <label>Birthday</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "birthday")}}
                                value={this.state.birthday}
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input 
                                type="password" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "customerPassword")}}
                                value={this.state.customerPassword}
                            />
                        </div>
                        <div className="input-container">
                            <label>isLoyalty</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "isLoyalty")}}
                                value={this.state.isLoyalty}
                            />
                        </div>
                        <div className="input-container">
                            <label>Loyalty Level</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "loyaltyLevel")}}
                                value={this.state.loyaltyLevel}
                            />
                        </div>
                        <div className="input-container">
                            <label>Sale Off</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "saleOff")}}
                                value={this.state.saleOff}
                            />
                        </div>
                        <div className="input-container">
                            <label>Status</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "status")}}
                                value={this.state.status}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        className="px-3" 
                        onClick={()=>{this.handleUpdateCustomer()}}>Update</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateCustomer);
