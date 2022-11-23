import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../services/customerService'
import {getAllOrders,getAllOrdersDetail,createNewOrdersClient,editOrdersService} from '../../services/ordersService';
import {getProductClient,getAllProduct,deleteProduct, getProduct, createNewProductService, editProductService, getProductByCategory} from '../../services/productService';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BuyProduct.scss';
import { Link } from 'react-router-dom';
class BuyProductPageBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createOrdersDetailFormList: [{ ordersDetailAmount: '',productId:'' }],
            customerId:'',
            ordersAddress:'', // Dia chi giao hang
            ordersReceiverName:'', // Ten nguoi nhan
            ordersReceiverPhone:'', // Sdt nguoi nhan 
            ordersSaleOff:'0',
            email:'',
            paymentMethod:'', // Phương thức thanh toán: 1: COD, 2: Online
        }
    }
    

    async componentDidMount() {
        await this.getCustomerInfo()
        await this.getOneProductFromReact()
    }

    getCustomerInfo = async () => {
        let response = await getProfile();
        if (response && response.result) {
            this.setState({
                customerId: response.data.id,
                ordersReceiverName: response.data.fullName,
                email: response.data.email,
                ordersReceiverPhone: response.data.phone,
                ordersAddress: response.data.addressCustomer,
            })
        }
    }

    getOneProductFromReact = async () => {
        let product = await getProductClient(this.props.id)
        this.setState({
            createOrdersDetailFormList: [{ordersDetailAmount: '1',productId:product.data.productId }],
            productName: product.data.productName,
            productPrice: product.data.productPrice,
            productImage: product.data.productImage,
            productDescription: product.data.productDescription,
            productSaleOff: product.data.productSaleOff,
        })
    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['ordersReceiverName','ordersReceiverPhone', 'ordersAddress','paymentMethod'];
        let arrInput1 = ['Tên Người Nhận','Số điện thoại','địa chỉ', 'phương thức thanh toán'];
        for(let i = 0; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid = false;
                toast.success('Đặt hàng không thành công vì thiếu info' , {
                    position: "bottom-center",
                    width:400,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                break;
            }
        }
        return isValid;
    }

    handleCreateOrder = async () => {
        let isValid = this.checkValideInput();
        if(isValid === true){
            let response = await createNewOrdersClient(this.state)
            if(response && response.result){
                toast.success('Đặt hàng thành công', {
                    position: "bottom-center",
                    width:400,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
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
    }

    render() {

        return (
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-7">
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
                    <div class="col-md-5">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Order Information</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-12"><label class="labels">Recipient's name</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChangeInput(event,"ordersReceiverName")}}  
                                        class="form-control" 
                                        value={this.state.ordersReceiverName} 
                                /></div>
                               
                            </div>
                                
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Phone</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChangeInput(event,"ordersReceiverPhone")}}  
                                        class="form-control" 
                                        value={this.state.ordersReceiverPhone}
                                /></div>
                                <div class="col-md-12"><label class="labels">Delivery address</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChangeInput(event,"ordersAddress")}}  
                                        class="form-control" 
                                        value={this.state.ordersAddress} 
                                /></div>
                                <div class="col-md-12"><label class="labels">Email</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChangeInput(event,"email")}} 
                                        class="form-control" 
                                        value={this.state.email} 
                                /></div>
                                <div class="col-md-12"><label class="labels">Payment methods</label><br/>
                                        <input 
                                            type="radio" 
                                            value= {1}
                                            className="gender-profile"
                                            onChange={(event) => {this.handleOnChangeInput(event,"paymentMethod")}}
                                            checked={this.state.paymentMethod == 1}
                                             /> Cod
                                        <input 
                                            type="radio" 
                                            value={2}
                                            className="gender-profile female-radio"
                                            onChange={(event) => {this.handleOnChangeInput(event,"paymentMethod")}}
                                            checked={this.state.paymentMethod == 2}
                                             /> Online
                                </div>
                            </div>
                            <div className='message-update-profile'>{this.state.messageUpdate}</div>
                            <div class="mt-5 text-center">
                                {/* <Link className="btn btn-primary btn-block"  onClick={() => {this.handleCreateOrder()}} to='/product' >Đặt hàng</Link> */}
                                    <button class="btn btn-primary btn-block" 
                                        type="button"
                                        onClick={() => {this.handleCreateOrder()}}
                                    >Confirm
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyProductPageBody);