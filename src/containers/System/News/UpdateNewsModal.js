import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter } from "../../../utils/emitter";
import _ from 'lodash';

class ModalUpdateNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            avatar: '',
            banner: '',
            description: '',
            status: ''
        }
    }



    componentDidMount() {
        let news = this.props.currentNews;
        if (news && !_.isEmpty(news)) {
            this.setState({
                id: news.id,
                title: news.title,
                content: news.content,
                avatar: news.avatar,
                banner: news.banner,
                description: news.description,
                status: news.status
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, index) => {
        let prevState = { ...this.state };
        prevState[index] = event.target.value;
        this.setState({
            ...prevState
        })
    }

    handleUpdateNews = () => {
        this.props.updateNewsFromReact(this.state);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-news-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Update News</ModalHeader>
                <ModalBody>
                    <div className="modal-news-body">
                        <div className="input-container">
                            <label>Title <span class="required">*</span></label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "title") }}
                                value={this.state.title}
                            />
                        </div>
                        <div className="input-container">
                            <label>Content <span class="required">*</span></label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "content") }}
                                value={this.state.content}
                            />
                        </div>
                        <div className="input-container">
                            <label>Avatar <span class="required">*</span></label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "avatar") }}
                                value={this.state.avatar}
                            />
                        </div>
                        <div className="input-container">
                            <label>Banner</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "banner") }}
                                value={this.state.banner}
                            />
                        </div>
                        <div className="input-container">
                            <label>Description <span class="required">*</span></label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "description") }}
                                value={this.state.description}
                            />
                        </div>
                        <div className="input-container">
                            <label>Status <span class="required">*</span></label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "status") }}
                                value={this.state.status}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={() => { this.handleUpdateNews()}}>Update</Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Cancel</Button>

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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateNews);