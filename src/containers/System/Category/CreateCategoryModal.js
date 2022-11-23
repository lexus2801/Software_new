import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter} from "../../../utils/emitter";

class CreateCategoryModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            categoryName: '',
            categoryDescription: '',
            categoryOrdering: '',
            parentId: ''
        }

        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () =>{
            //reset state
            this.setState({
                categoryName: '',
                categoryDescription: '',
                categoryOrdering: '',
                parentId: ''
            })
        })
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, index) => {
        let prevState = {...this.state};
        prevState[index] = event.target.value;
        this.setState({
            ...prevState
        })
    }

    handleAddNewCategory = () => {
        this.props.createNewCategoryFromReact(this.state);
    }
    // toggle={()=>{this.toggle()}}

    render() {
        return (
            <Modal                 
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-category-container'}
                size="lg"
                centered
            >
                <ModalHeader className='modal-category-header'>Create Category</ModalHeader>
                <ModalBody>
                    <div className="modal-category-body">
                        <div className="input-container">
                            <label>Category Name <span class="required">*</span></label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "categoryName")}}
                                value={this.state.categoryName}
                            />
                        </div>
                        <div className="input-container">
                            <label>Category Description <span class="required">*</span></label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "categoryDescription")}}
                                value={this.state.categoryDescription}
                            />
                        </div>
                        <div className="input-container">
                            <label>Category Ordering</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "categoryOrdering")}}
                                value={this.state.categoryOrdering}
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
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        disabled={this.props.is}
                        color="primary" 
                        className="px-3" 
                        onClick={()=>{this.handleAddNewCategory()}}>Create</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryModal);