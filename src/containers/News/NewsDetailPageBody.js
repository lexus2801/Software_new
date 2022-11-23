import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { isPropertyAccessExpression } from 'typescript';
import {getOneNews} from '../../services/newsService';
// import handleAddToCart from '../AddToCart/AddToCart';
class NewsDetailPageBody extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            id: '',
            title: '',
            content: '',
            description: '',
            banner: '',
            createdDate: ''
        }
    }
    // componentDidMount() {
    //     handleAddToCart()
    // }
    async componentDidMount() {
        await this.getOneNewsFromReact()
        // handleAddToCart()
    }

    getOneNewsFromReact = async () => {
        let response = await getOneNews(this.props.id)
        this.setState({
            id: response.data.id,
            title: response.data.title,
            content: response.data.content,
            description: response.data.description,
            banner: response.data.banner,
            createdDate: response.data.createdDate
        })
        console.log("check",response)
    }

    render() {
        return (
            <div>
                <div id="content_listnew" class="floating-bar">
                    <div class="list-news news-page">
                        <div class="content-detail">
                            <p class="publish-date">{this.state.createdDate}</p>
                            <h2 class="title-detail">{this.state.title}</h2>
                            <div class="line">
                                <div class="line1"></div>
                                <div class="line2"></div>
                            </div>
                            <div class="editable">
                                <p>{this.state.content}</p>
                                
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailPageBody);
