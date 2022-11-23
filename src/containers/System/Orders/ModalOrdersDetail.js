import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {getAllOrders,getAllOrdersDetail} from '../../../services/ordersService';
import _ from 'lodash'
import PropTypes from 'prop-types';
class ModalOrdersDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrDetailOrders:[],
        }
    }

    async componentDidMount() { 
        await this.getAllProductFromReact();
    }
    getAllProductFromReact = async () => {
       // let response = await this.props.currenListOrdersDetail;;
        let response = await getAllOrdersDetail( this.props.currenListOrdersDetail);
        console.log('did_mount :',response);
        this.setState({
            arrDetailOrders: response.data
        })
        console.log('eric check map ', response.data)
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
   render() {
        console.log('pop produc :',this.props.currenListOrdersDetail)
        // window.location.reload();
        let arrDetailOrders =this.state.arrDetailOrders.data

        return (
            <Modal                 
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-product-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Create product</ModalHeader>
                <ModalBody>

                <div className="customers-table mt-3 mx-1">
                        <table id="customers">
                            <tbody>
                <tr>
                                    <th>ordersDetailId</th>
                                    <th>ordersDetailPrice</th>
                                    <th>ordersDetailAmount</th>
                                    <th>productName</th>
                                    
                                
                                </tr>
                {
                                    arrDetailOrders && arrDetailOrders.map((ss, index) => {
                                        //console.log('eric check map ', item, index)
                                        return (
                                            
                                            <tr className="divClass">
                                                
                                                    <td>{ss.ordersDetailId}</td>
                                                    <td>{ss.ordersDetailPrice}</td>
                                                    <td>{ss.ordersDetailAmount}</td>
                                                    <td>{ss.productName}</td>
                                                  
                                            </tr>
                                        )
                                    }) 
                                }
                   </tbody>
                        </table>
                    </div>
                </ModalBody>
                <ModalFooter                 
                >
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalOrdersDetail);
