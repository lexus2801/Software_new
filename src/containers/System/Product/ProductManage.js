import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ProductManage.scss'
import {getAllProduct,deleteProduct, getProduct, createNewProductService,editProductService} from '../../../services/productService';
import ModalProduct from './ModalProduct';
import ModalEditProduct from './ModalEditProduct';
import ModalOrdersDetail from '../Orders/ModalOrdersDetail';
import { emitter} from "../../../utils/emitter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ProductManage extends Component {
// check hàm contructor 
// muốn khai báo 1 đối tượng cần tạo đầu tiên mà nó là contructor
    constructor(props) {
        super(props);
        // this là class Product manage
        this.state ={
            arrProduct: [],
            //info: [],
            isOpenModalProduct: false,
            isOpenEditModalProduct: false,
            isCreateModalProduct: false,
            isEditModalProduct: false,
            EditProduct:{},
        }
    }
        /** Life cycle
     * 1. Run construct => để tạo ra các state
     * 2. Hàm Did mount ( dùng để gán giá trị cho 1 state nào đó )
     * 3. Rander ra màn hình ( xuất ra màn hình )
     */ 
    async componentDidMount() {
            await this.getAllProductFromReact();
            // let response = await getAllProducts();
            // if(response && response.result==true){
            //     this.setState({
            //         arrProduct: response.data
            //     })
            // }
    }
    getAllProductFromReact = async () => {
            let response = await getAllProduct();
            //console.log('check',response.data)
            // if (response && response.result===true){
            //     this.setState({
            //         arrProduct: response.data
            //     })
            // }
            this.setState({
                arrProduct: response.data
            })
            console.log('eric check map ', response.data)
    }
    handleAddNewProduct = () =>{
        this.setState ({
            isOpenModalProduct: true,
            isCreateModalProduct: !this.state.isOpenModalProduct,
        })
    }
    handleEditProduct = async(data) =>{
        console.log('check',data)
        this.setState ({
            isOpenEditModalProduct: true,
            isEditModalProduct: !this.state.isOpenEditModalProduct,
            EditProduct:data
        })
        
    }
    toggleProductModal = () =>{
        this.setState ({
            isOpenModalProduct: !this.state.isOpenModalProduct,
           
        })
    }
    toggleEditProductModal = () =>{
        this.setState ({
            isOpenEditModalProduct: !this.state.isOpenEditModalProduct,
        })
    }
    test = async (data) => {
        //alert('click delete')
        //console.log('check', data)
        
            console.log(data)
     
    }
        // handleDeleteProduct = async (data) => {
        //     //alert('click delete')
        //     //console.log('check', data)
        //     try{
        //         let res = await deleteProduct(data.id);
        //         console.log(res)
        //     }catch(e){
        //         console.log(e)
        //     }
        // }
    createNewProduct = async (data) => {
            // let response = await createNewProductService(data);
            // this.setState ({
            //     isOpenModalProduct:false,
            // });
            // // location.reload();
            // console.log('respones create cus: ', response.data)
            // console.log('check data from child: ', data)



    try{
        let response = await createNewProductService(data);
        console.log('Thong bao :',response.result)
        if(response.result == true)
        {
        toast.success('Thêm xe thành công', {
                        position: "bottom-center",
                        width: 400,
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
             
        if(response && response.response===false){
                    alert(response.message)
                }else{
                    await this.getAllProductFromReact();
                    this.setState({
                        isOpenModalProduct: false,
                    })
                    
                    emitter.emit('EVENT_CLEAR_MODAL_DATA')
                    
                }
            }catch(e){
                toast.success('Thêm xe thất bại', {
                    position: "bottom-center",
                    width: 400,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(e)
            }    
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ title: 'React POST Request Example' })
            // };
            // fetch('v1/Product/create', requestOptions)
            //     .then(response => response.json())
            //     .then(data => this.setState({ data }));
        }

        editProduct =async(data)=>{



            try{
                let response = await editProductService(data);
                console.log('Thong bao :',response)
                if(response.result == true)
                {
                toast.success('Chỉnh sửa xe thành công', {
                                position: "bottom-center",
                                width: 400,
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }                
                 if(response && response.response===false){
                            alert(response.message)
                        }else{
                            await this.getAllProductFromReact();
                            this.setState({
                                isOpenEditModalProduct: false,
                            })
                            
                            emitter.emit('EVENT_CLEAR_MODAL_DATA')
                            
                         }
                    }catch(e){
                        toast.success('Chỉnh sửa xe thất bại', {
                            position: "bottom-center",
                            width: 400,
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        console.log(e)
                    }    


            // console.log('click save product:',data);
            // let ret =await editProductService(data);
            // this.setState ({
            //     isOpenEditModalProduct:false,
            // });

        }


        handleDeleteProduct = async (data) => {
            //alert('click delete')
            //console.log('check', data)
            // try{
            //     let res = await deleteProduct(data.productId);
            //     console.log(res)
            // }catch(e){
            //     console.log(e)
            // }





            
            try{
                let response = await deleteProduct(data.productId);
                if(response && response.response===false){
                    alert(response.message)
                }else{
                    await this.getAllProductFromReact();
                    this.setState({
                        isOpenModalProduct: false,
                    })
                    toast.success('Xóa thành công', {
                        position: "bottom-center",
                        width: 400,
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    emitter.emit('EVENT_CLEAR_MODAL_DATA')
                    
                }
            }catch(e){
                console.log(e)
            }    
           //window.location.reload();
        }
        render() {
            console.log('check render 1', this.state)
            let arrProduct =this.state.arrProduct.data
            return (
                <div className="users-container">
                    <ModalProduct
                        isOpen={this.state.isOpenModalProduct}
                        isCreate={this.isCreateModalProduct}
                        isEdit={this.state.isEditModalProduct}
                        toggleFromParent={this.toggleProductModal}
                        createNewProduct={this.createNewProduct}
                    />
                    {this.state.isOpenEditModalProduct&&
                    <ModalEditProduct
                        isOpen={this.state.isOpenEditModalProduct}
                        isCreate={this.isCreateModalProduct}
                        isEdit={this.state.isEditModalProduct}
                        toggleFromParent={this.toggleEditProductModal}
                        editProduct={this.editProduct}
                        currenEditProduct = {this.state.EditProduct}
                    />
                    }
                    <div className="title text-center">Manage Product</div>
                    <div className="mx-1">
                        <button className="btn btn-primary px-3" onClick={()=>this.handleAddNewProduct()}>
                            <i className="fa fa-plus"></i>
                            Add New Product
                        </button>
                    </div>
                    <div className="customers-table mt-3 mx-1">
                        <table id="customers">
                            <tbody>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Link Image</th>
                                    <th>Description</th>
                                    <th>Short Description</th>
                                    <th>Sale Off</th>
                                    <th>Actions</th>
                                </tr>
                                {
                                    arrProduct && arrProduct.map((ss, index) => {
                                        //console.log('eric check map ', item, index)
                                        return (
                                            <tr className="divClass">
                                                <td>{ss.productId}</td>
                                                    <td>{ss.productName}</td>
                                                    <td>{ss.productPrice}</td>
                                                    <td>{ss.productImage}</td>                                        
                                                    <td>{ss.productDescription}</td>
                                                    <td>{ss.productShortDescription}</td>
                                                    <td>{ss.productSaleOff}</td>
                                                <td>
                                                    <button className="btn-actions" onClick={()=>this.handleEditProduct(ss)}><i className="fa fa-pencil-square-o"></i></button>                                              
                                                    <button className="btn-actions" onClick={()=>this.handleDeleteProduct(ss)}><i className="fa fa-trash-o"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    }) 
                                }
                            </tbody>
                        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
