import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './OrdersDetailManage.scss';
import {getAllOrdersDetail, getOrdersDetail, deleteOrdersDetail, updateOrdersDetail, createOrdersDetail} from '../../../services/ordersDetailService';
import ModalCreateOrdersDetail from './ModalCreateOrdersDetail';
import { emitter} from "../../../utils/emitter";
import ModalUpdateOrdersDetail from './ModalUpdateOrdersDetail';
class OrdersDetailManage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            arrOrdersDetail: [],
            isOpenModalCreateOrdersDetail: false,
            isOpenModalUpdateOrdersDetail: false,
            ordersDetailUpdate: {},
        }
    }

    async componentDidMount() {
        await this.getAllOrdersDetailFromReact();
    }

    getAllOrdersDetailFromReact = async () => {
        let response = await getAllOrdersDetail();
        if (response && response.result===true){
            this.setState({
                arrOrdersDetail: response.data
            })
        }
    }

    handleAddNewOrdersDetail = () =>{
        this.setState ({
            isOpenModalCreateOrdersDetail: true,
        })
    }

    handleUpdateOrdersDetail = async(data) =>{
        this.setState ({
            isOpenModalUpdateOrdersDetail: true,
            ordersDetailUpdate: data,
        })
    }

    doHandleUpdateOrdersDetail = async (data) =>{
        try{
            let response = await updateOrdersDetail(data);
            if(response && response.response===true){
                alert(response.message)
            }else{
                await this.getAllOrdersDetailFromReact();
                this.setState({
                    isOpenModalUpdateOrdersDetail: false,
                })
            }
        }catch(e){
            console.log(e)
        }  

    }

    toggleOrdersDetailModal = () =>{
        this.setState ({
            isOpenModalCreateOrdersDetail: !this.state.isOpenModalCreateOrdersDetail,
        })
    }

    toggleUpdateOrdersDetailModal = () =>{
        this.setState ({
            isOpenModalUpdateOrdersDetail: !this.state.isOpenModalUpdateOrdersDetail,
        })
    }

    createNewOrdersDetail = async (data) => {
        try{
            let response = await createOrdersDetail(data);
            if(response && response.response===false){
                alert(response.message)
            }else{
                await this.getAllOrdersDetailsFromReact();
                this.setState({
                    isOpenCreate: false,
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
                
            }
        }catch(e){
            console.log(e)
        }    
    }
    
    handleDeleteOrdersDetail = async (data) => {
        try{
            let response = await deleteOrdersDetail(data.id);
            if(response && response.response===false){
                alert(response.message)
            }else{
                await this.getAllOrdersDetailsFromReact();
            }
        }catch(e){
            console.log(e)
        }
    }

    render() {
        let arrOrdersDetail =this.state.arrOrdersDetail.data
        console.log("check",arrOrdersDetail)
        return (
            <div className="customers-container">
                <ModalCreateOrdersDetail
                    isOpen={this.state.isOpenModalCreateOrdersDetail}
                    toggleFromParent={this.toggleOrdersDetailModal}
                    createNewOrdersDetail={this.createNewOrdersDetail}
                />
                {
                this.state.isOpenModalUpdateOrdersDetail &&
                <ModalUpdateOrdersDetail
                    isOpen={this.state.isOpenModalUpdateOrdersDetail}
                    toggleFromParent={this.toggleUpdateOrdersDetailModal}
                    currentOrdersDetail={this.state.provinceUpdate}
                    updateOrdersDetail={this.doHandleUpdateOrdersDetail}
                />}
                <div className="title text-center">Manage orders detail</div>
                <div className="mx-1">
                    <button className="btn btn-primary px-2" onClick={()=>this.handleAddNewOrdersDetail()}>
                        <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
                        Add New OrdersDetail
                    </button>
                </div>
                <div className="customers-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Product Name</th>
                                <th>Orders Id</th>
                                <th>Actions</th>
                            </tr>
                            {
                                arrOrdersDetail && arrOrdersDetail.map((item, index) => {
                                    console.log('data', item)
                                    return (
                                        <tr key={item.ordersDetailId} className="divClass">
                                            <td>{item.ordersDetailId}</td>
                                            <td>{item.ordersDetailPrice}</td>
                                            <td>{item.ordersDetailAmount}</td>
                                            <td>{item.productName}</td>
                                            <td>{item.ordersId}</td>
                                            <td>
                                                <button className="btn-actions" onClick={()=>this.handleUpdateOrdersDetail(item)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>                                              
                                                <button className="btn-actions" onClick={()=>this.handleDeleteOrdersDetail(item)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                            </td>
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(OrdersDetailManage);