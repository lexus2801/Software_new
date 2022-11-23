import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter} from "../../../utils/emitter";

class ModalCreateProvince extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            parentId: '',
            provinceKind: '',
            kind: '',
            status: '',
        }

        this.listenToEmitter();
        this.onChangeValue=this.onChangeValue.bind(this);
    }

    onChangeValue(event){
        this.setState({
            provinceKind: event.target.value,
        })
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () =>{
            //reset state
            this.setState({
                name: '',
                parentId: '',
                provinceKind: '',
                kind: '',
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
        let arrInput = ['name','provinceKind','status'];
        
        for(let i = 0; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewProvince = () => {
        let isValid = this.checkValideInput();
        if(isValid === true){
            //call api create modal
            this.props.createNewProvince(this.state);
        }
    }   

    render() {
        return (
            <Modal                 
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-province-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Create Province</ModalHeader>
                <ModalBody>
                    <div className="modal-province-body">
                        <div className="input-container">
                            <label>Name</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "name")}}
                                value={this.state.name}
                            />
                        </div>
                        <div className="input-container">
                            <label>Parent Id</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "parentId")}}
                                value={this.state.parentId}
                            />
                        </div>
                        <div >
                            <div>
                                <div className="fix1">
                                <label>Kind</label>
                                    <form>
                                    <div onChange={this.onChangeValue} className="fix1">
                                        <input type="radio" value="0" name="provinceKind" /> Province
                                        <input type="radio" value="1" name="provinceKind" /> District
                                        <input type="radio" value="2" name="provinceKind" /> Commune
                                    </div>
                                    </form>
                                </div>
                            </div>
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
                        onClick={()=>{this.handleAddNewProvince()}}>Create</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateProvince);
