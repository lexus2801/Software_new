import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter} from "../../../utils/emitter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ModalCustomer extends Component {

    constructor(props){
        super(props);
        this.state = {
            customerFullName: '',
            customerUsername: '',
            customerEmail: '',
            customerAddress: '',
            customerPhone: '',
            birthday: '',
            customerPassword: '',
            gender: '',
            isLoyalty: '',
            loyaltyLevel: '',
            saleOff: '',
            status: '',
        }

        this.listenToEmitter();
        this.onChangeValue=this.onChangeValue.bind(this);
    }

    onChangeValue(event){
        this.setState({
            gender: event.target.value,
        })
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () =>{
            //reset state
            this.setState({
                customerFullName: '',
                customerUserName: '',
                customerEmail: '',
                customerAddress: '',
                customerPhone: '',
                birthday: '',
                customerPassword: '',
                gender: '',
                isLoyalty: '',
                loyaltyLevel: '',
                saleOff: '',
                status: '',
            })
        })
    }

    componentDidMount() {
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
        let i=0
        let arrInput = ['customerFullName','customerEmail','customerPhone','birthday','gender','isLoyalty','status','customerUsername'];
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

    handleAddNewCustomer = () => {
        let isValid = this.checkValideInput();
        if(isValid === true){
            //call api create modal
            this.props.createNewCustomer(this.state);
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
                <ModalHeader toggle={()=>{this.toggle()}}>Create Customer</ModalHeader>
                <ModalBody>
                    <div className="modal-customer-body">
                        <div className="input-container">
                            <label>Full Name</label>
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
                            <label>User Name</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "customerUsername")}}
                                value={this.state.customerUsername}
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
                        <div >
                            <div>
                                <div className="fix1">
                                <label>Gender</label>
                                    <form>
                                    <div onChange={this.onChangeValue} className="fix1">
                                        <input type="radio" value="1" name="gender" /> Male
                                        <input type="radio" value="0" name="gender" /> Female
                                    </div>
                                    </form>
                                </div>
                            </div>
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
                        disabled={this.props.is}
                        color="primary" 
                        className="px-3" 
                        onClick={()=>{this.handleAddNewCustomer()}}>Create</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalCustomer);
