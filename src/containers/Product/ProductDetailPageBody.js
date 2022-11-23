import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { isPropertyAccessExpression } from 'typescript';
import {getProductClient,getAllProduct,deleteProduct, getProduct, createNewProductService, editProductService, getProductByCategory} from '../../services/productService';
// import handleAddToCart from '../AddToCart/AddToCart';
class ProductDetailPageBody extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            productName: '',
            productPrice: '',
            productImage: '',
            productDescription: '',
            productSaleOff: '',
            messageUpdate: ''
        }
    }
    // componentDidMount() {
    //     handleAddToCart()
    // }
    async componentDidMount() {
        await this.getOneProductFromReact()
        // handleAddToCart()
    }

    getOneProductFromReact = async () => {
        let product = await getProductClient(this.props.id)
        this.setState({
            productName: product.data.productName,
            productPrice:product.data.productPrice,
            productImage: product.data.productImage,
            productDescription:product.data.productDescription,
            productSaleOff: product.data.productSaleOff,
        })
    }

    render() {
        return (
            <section className="section-content padding-y bg">
                <div className="container">
            
                <article className="card">
                    <div className="card-body">
                            <div className="row">
                                <aside className="col-md-8">
                                        <article className="gallery-wrap">
                                            <div className="card img-big-wrap img-wrap">
                                                <a href="#"> <img src={this.state.productImage} /></a>
                                            </div> 
                                        </article>
                                </aside>
                                <main className="col-md-3">
                                    <article>
                                        <h3 className="title">{this.state.productName}</h3>
                                        <div>
                                            <ul className="rating-stars">
                                                {/* <li  className="stars-active"> 
                                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                                    <i className="fa fa-star"></i>  
                                                    
                                                </li>
                                                <li>
                                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                                                    <i className="fa fa-star"></i> 
                                                </li> */}
                                            </ul>
                                            <span className="label-rating mr-3 text-muted"></span>
                                            {/* <a href="#" className="btn-link  mr-3 text-muted"> <i className="fa fa-heart"></i> Save for later </a>
                                            <a href="#" className="btn-link text-muted"> <i className="fa fa-book-open"></i> Compare </a> */}
                                        </div> 
                
                                        <hr />
                            
                                        <div className="mb-3">
                                            <h6>{this.state.productDescription}</h6>
                                            <h7>SaleOff: {this.state.productSaleOff}%</h7>
                                            {/* <ul className="list-dots mb-0">
                                                <li>Made in Russia</li>
                                                <li>Wolf leather </li>
                                                <li>Rubber material bottom</li>
                                                <li>Dark blue color</li>
                                            </ul> */}
                                        </div>
                                        
                                        {/* <div className="form-group">
                                            <label className="text-muted">Available sizes</label>
                                            <div>
                                                <label className="js-check btn btn-check active mr-1">
                                                    <input type="radio" name="option_size" value="option1" checked="" />
                                                    <span>Small</span>
                                                </label>
                                                <label className="js-check btn btn-check mr-1">
                                                    <input type="radio" name="option_size" value="option1" />
                                                    <span>Medium</span>
                                                </label>
                                                <label className="js-check btn btn-check mr-1">
                                                    <input type="radio" name="option_size" value="option1" />
                                                    <span>Large</span>
                                                </label>
                                                <label className="js-check btn btn-check disabled">
                                                    <input type="radio" name="option_size" disabled="" value="option1" />
                                                    <span>Babies</span>
                                                </label>  
                                            </div>            
                                        </div> */}
                
                                        <div className="mb-3">
                                            <var className="price h4">${this.state.productPrice}</var> <br />
                
                                        </div> 
                
                                        <div className="mb-4">
                                            <a href={`/buyproductid=${this.props.id}`} className="btn btn-primary btn-block">  Buy  </a>
                                            {/* <button className="btn btn-primary btn-block"  >
                                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                <span> Mua </span>
                                            </button> */}
                                        </div>
                                        
                                    </article> 
                                </main>
                            </div> 
                    </div> 
                </article>
                </div>
                
            
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPageBody);
