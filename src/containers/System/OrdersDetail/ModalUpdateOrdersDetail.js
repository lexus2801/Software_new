import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter} from "../../../utils/emitter";
import _ from 'lodash';

class ModalUpdateOrdersDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            price: '',
            amount: '',
            productId: '',
            ordersId: '',
        }
    }

    componentDidMount() {
        let ordersDetail = this.props.currentProvince;
        if (ordersDetail && !_.isEmpty(ordersDetail))
        {
            this.setState({
                id: ordersDetail.id,
                price: ordersDetail.price,
                amount: ordersDetail.amount,
            })
        }
        //console.log('check: ',this.props.currentOrdersDetail)
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
        let arrInput = ['name','status'];
        
        for(let i = 0; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    
    handleUpdateProvince = () => {
        let isValid = this.checkValideInput();
        if(isValid === true){
            //call api create modal
            this.props.updateProvince(this.state);
        }
        
    }    

    render() {
        return (
            <Modal                 
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal ordersDetail-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Update Province</ModalHeader>
                <ModalBody>
                <div className="modal ordersDetail-body">
                        <div className="input-container">
                            <label>Name</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "name")}}
                                value={this.state.name}
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
                        onClick={()=>{this.handleUpdateProvince()}}>Update</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateOrdersDetail);
