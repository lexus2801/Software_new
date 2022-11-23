import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {getProductClient,getAllProduct,deleteProduct, getProduct, createNewProductService, editProductService, getProductByCategory} from '../../services/productService';
// import { emitter} from "../../../utils/emitter";
import _ from 'lodash';

class OrderDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            productId:'',
            productName: '',
            productPrice: '',
            productImage: '',
            productDescription: '',
            productSaleOff: '',
            arrOderDetail:[]
        }
    }

    async componentDidMount() {
        let orderDetail = this.props.orderDetail.ordersDetailDtoList;
        orderDetail && orderDetail.map((item,index)=>{
            this.setState({
                productName: item.productDto.productName,
                productPrice: item.productDto.productPrice,
                productImage: item.productDto.productImage,
                productSaleOff: item.productDto.productSaleOff
            })
            
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

    render() {
        return (
            <Modal style={{zIndex: '10000'}}           
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-customer-container'}
                size="lg"
                centered
            >
                <ModalHeader>Order Detail</ModalHeader>
                <ModalBody>
                    <div className="modal-customer-body">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-2.5">
                            <img class="rounded-square mt-5" width="300px" src={this.state.productImage} />
                            </div>
                        <div class="col-md-12"><label class="labels">Motorcycle's name</label>
                                <input 
                                    type="text"
                                    class="form-control" 
                                    disabled = {this.state.productName ? true : false} 
                                    value={this.state.productName} 
                                />
                                </div>
                            <div class="col-md-12"><label class="labels">Price</label>
                            <input 
                                type="text"
                                class="form-control" 
                                disabled = {this.state.productPrice ? true : false}
                                value={this.state.productPrice+'$'}
                            />
                            </div>
                            <div class="col-md-12"><label class="labels">SaleOff</label>
                            <input 
                                type="text"
                                class="form-control" 
                                disabled = {this.state.productSaleOff ? true : false} 
                                value={this.state.productSaleOff} 
                            />
                            </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" className="px-3" onClick={()=>{this.toggle()}}>Close</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
