import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter} from "../../../utils/emitter";

class CreateNewsModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
            avatar: '',
            banner: '',
            description: '',
            status: ''
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () =>{
            //reset state
            this.setState({
                title: '',
                content: '',
                avatar: '',
                banner: '',
                description: '',
                status: ''
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

    handleAddNews = () => {
        this.props.createNewsFromReact(this.state);
    }

    render() {
        return (
            <Modal                 
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-news-container'}
                size="lg"
                centered
            >
                <ModalHeader className='modal-news-header'>Create News</ModalHeader>
                <ModalBody>
                    <div className="modal-news-body">
                        <div className="input-container">
                            <label>Title <span class="required">*</span></label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "title")}}
                                value={this.state.title}
                            />
                        </div>
                        <div className="input-container">
                            <label>Content <span class="required">*</span></label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "content")}}
                                value={this.state.content}
                            />
                        </div>
                        <div className="input-container">
                            <label>Avatar <span class="required">*</span></label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "avatar")}}
                                value={this.state.avatar}
                            />
                        </div>
                        <div className="input-container">
                            <label>Banner</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "banner")}}
                                value={this.state.banner}
                            />
                        </div>
                        <div className="input-container">
                            <label>Description <span class="required">*</span></label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "description")}}
                                value={this.state.description}
                            />
                        </div>
                        <div className="input-container">
                            <label>Status <span class="required">*</span></label>
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
                        onClick={()=>{this.handleAddNews()}}>Create</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewsModal);