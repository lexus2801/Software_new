import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllProductClient} from '../../services/productService';


class CycleSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    async componentDidMount() {
        await this.getAllProductFromReact();;
    }

    getAllProductFromReact = async () => {
        let response = await getAllProductClient();
        this.setState({
            productList: response.data
        })
    }
    render() {
        let productList = this.state.productList.data
        return (
            <section className='cycle_section '>
                <div className="container">
                    <div className="cycle_heading">
                        <h2>
                            Top Sale Cycles
                        </h2>
                    </div>
                    <div className="cycle_container">
                    {
                        productList && productList.map((item,index)=>{
                            if(index<3)
                                return(
                                    <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src={item.productImage} alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            {item.productName}
                                        </h6>
                                        <h5>
                                            <span>{item.productPrice}$</span>
                                        </h5>
                                    </div>
                                    <div className="like">
                                        <h6>
                                            Like
                                        </h6>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <a href={`/buyproductid=${item.productId}`}>
                                    Buy     
                                </a>
                            </div>
                        </div>
                                )
                        })
                    }
                    
                    </div>
                </div>
            </section>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CycleSection);
