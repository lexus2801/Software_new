import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllNews } from '../../services/newsService'
import './NewsPage.scss'
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import { Redirect, Link } from 'react-router-dom';
class NewsPageBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: '',
            // title: '',
            // content: '',
            // avatar: '',
            // description: '',
            // banner: '',
            newsList: []
        }
    }

    async componentDidMount() {
        await this.getAllNewsFromReact()
    }

    getAllNewsFromReact = async () => {
        let response = await getAllNews();
        if (response && response.result) {
            this.setState({
                // id: response.data.id,
                // title: response.data.title,
                // content: response.data.content,
                // avatar: response.data.avatar,
                // description: response.data.description,
                // banner: response.data.banner
                newsList: response.data
            })
        }
    }

    render() {
        let newsList = this.state.newsList.data
        return (
            <div className='cycle_section '>
                <div className="container">
                    <div className="cycle_heading">
                        <h2>
                            HOT NEWS
                        </h2>
                    </div>
                    <main>
                        <div className="cycle_container">
                            {
                            newsList && newsList.map((news, index) => {
                                return(
                                <div className="box">
                                    <div className="box-content">
                                        <div className="img-box">
                                            <img className="news-img" src={news.avatar} alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="text">
                                                
                                                <div>
                                                    <span>{news.title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <p>
                                        <div className="btn-box">
                                            <a href={`/news-detail-id=${news.id}`} >
                                                        Xem chi tiết
                                                    </a>
                                        </div>
                                    </p> */}
                                </div>
                            )})}

                        </div>
                    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageBody);