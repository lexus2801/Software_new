import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllProduct,deleteProduct, getProduct, createNewProductService,getAllProductClient,getProductByCategory,getClientProductByCategory} from '../../services/productService';
import './ProductPage.scss'
import ProductDetailPage from './ProductDetailPage';
import { Redirect, Link } from 'react-router-dom';
import { getAllCategoriesClient } from '../../services/categoryService';
import ProductPageBodyList from './ProductPageBodyList';
import { NavItem } from 'reactstrap';
class ProductPageBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            categoryList:[]
        }
    }

    async componentDidMount() {
        await this.getAllProductFromReact();;

    }

    getAllProductFromReact = async () => {
        let response = await getAllProductClient();
        let category = await getAllCategoriesClient();
        this.setState({
            productList: response.data,
            categoryList: category.data
        })
    }

    handleProductType = async (id) => {
        try{
            if(id==='all'){
                await this.componentDidMount()
            }else
            {
                let product =await getClientProductByCategory(id)
                this.setState({
                    productList: product.data
                })
            }
        }catch(e){
            console.log(e)
        }
    }

    render() {
        let productList = this.state.productList.data
        let categoryList = this.state.categoryList.data
        return(
            <div className="App">
                <section className="section-pagetop bg">
                    <div className="container">
                        <h2 className="title-page">Product</h2>
                    </div> 
                </section>
                <section className="section-content padding-y">
                    <div className="container">
                        <div className="row">
                            <aside className="col-md-3">       
                                <div className="card">
                                    <article className="filter-group">
                                        <header className="card-header">
                                            <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                                                <i className="icon-control fa fa-chevron-down"></i>
                                                <h6 className="title">Product type</h6>
                                            </a>
                                        </header>
                                        <div className="filter-content collapse show" id="collapse_1">
                                            <div className="card-body">
                                                <ul className="list-menu">
                                                <button className="btn btn-primary btn-block" onClick={()=>this.handleProductType('all')}>
                                                    All
                                                </button>
                                                {
                                                    categoryList && categoryList.map((item,index)=>{
                                                        return(
                                                            <button className="btn btn-primary btn-block" onClick={()=>this.handleProductType(item.id)} >{item.categoryName}</button>
                                                        )
                                                    })
                                                    
                                                }
                                                </ul>
                                            </div> 
                                        </div>
                                    </article>
                                </div> 
                            </aside> 
                        <ProductPageBodyList 
                            productList={productList}
                        />
                    </div>
                </div> 
                </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageBody);