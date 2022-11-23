import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { getProduct } from '../../../services/productService';
import { emitter} from "../../../utils/emitter";

class ModalCreateOrdersDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            price: '',
            amount: '',
            productId: '',
            ordersId: '',
        }

        this.listenToEmitter();
        this.onChangeValue=this.onChangeValue.bind(this);
    }

    onChangeValue(event){
        this.setState({
            ordersdetailKind: event.target.value,
        })
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () =>{
            //reset state
            this.setState({
                price: '',
                amount: '',
                productId: '',
                ordersId: '',
            })
        })
    }

    componentDidMount() {
    }

    // async componentDidMount() {
    //     await this.getProductFromReact();;

    // }

    getProductFromReact = async () => {
        let response = await getProduct();
        this.setState({
            price: response.data.productPrice,
        })
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

    handleOnChangeInputProductId = (event, id) => {
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
        let arrInput = ['id','price','amount', 'productId', 'ordersId'];
        
        for(let i = 0; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewOrdersDetail = () => {
        let isValid = this.checkValideInput();
        if(isValid === true){
            //call api create modal
            this.props.createNewOrdersDetail(this.state);
        }
    }   

    render() {
        return (
            <Modal                 
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-ordersdetail-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Create OrdersDetail</ModalHeader>
                <ModalBody>
                    <div className="modal-ordersdetail-body">
                        <div className="input-container">
                            <label>Product Id</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "productId")}}
                                value={this.state.productId}
                            />
                            <button className="btn btn-primary btn-block" onClick={()=>this.handleProductType()} >Get Price</button>
                        </div>
                        <div className="input-container">
                            <label>Price</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "price")}}
                                value={this.state.price}
                            />
                        </div>
                        <div className="input-container">
                            <label>Amount</label>
                            <input 
                                type="text"
                                onChange={(event)=> {this.handleOnChangeInput(event, "amount")}}
                                value={this.state.amount}
                            />
                        </div>
                        <div className="input-container">
                            <label>Orders Id</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersId")}}
                                value={this.state.ordersId}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        disabled={this.props.is}
                        color="primary" 
                        className="px-3" 
                        onClick={()=>{this.handleAddNewOrdersDetail()}}>Create</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateOrdersDetail);
