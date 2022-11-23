import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ProvinceManage.scss';
import {getAllProvinces, deleteProvince, getProvince, createNewProvinceService, updateProvinceService} from '../../../services/provinceService';
import ModalCreateProvince from './ModalCreateProvince';
import { emitter} from "../../../utils/emitter";
import ModalUpdateProvince from './ModalUpdateProvince';
class ProvinceManage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            arrProvince: [],
            isOpenModalProvince: false,
            isOpenModalUpdateProvince: false,
            provinceUpdate: {},
        }
    }

    async componentDidMount() {
        await this.getAllProvincesFromReact();
    }

    getAllProvincesFromReact = async () => {
        let response = await getAllProvinces();
        if (response && response.result===true){
            this.setState({
                arrProvince: response.data
            })
        }
    }

    handleAddNewProvince = () =>{
        this.setState ({
            isOpenModalProvince: true,
        })
    }

    handleUpdateProvince = async(data) =>{
        this.setState ({
            isOpenModalUpdateProvince: true,
            provinceUpdate: data,
        })
    }

    doHandleUpdateProvince = async (data) =>{
        try{
            let response = await updateProvinceService(data);
            if(response && response.response===true){
                alert(response.message)
            }else{
                await this.getAllProvincesFromReact();
                this.setState({
                    isOpenModalUpdateProvince: false,
                })
  
            }
        }catch(e){
            console.log(e)
        }  

    }

    toggleProvinceModal = () =>{
        this.setState ({
            isOpenModalProvince: !this.state.isOpenModalProvince,
        })
    }

    toggleUpdateProvinceModal = () =>{
        this.setState ({
            isOpenModalUpdateProvince: !this.state.isOpenModalUpdateProvince,
        })
    }

    createNewProvince = async (data) => {
        try{
            let response = await createNewProvinceService(data);
            if(response && response.response===false){
                alert(response.message)
            }else{
                await this.getAllProvincesFromReact();
                this.setState({
                    isOpenModalProvince: false,
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
                
            }
        }catch(e){
            console.log(e)
        }    
    }
    
    handleDeleteProvince = async (data) => {
        try{
            let response = await deleteProvince(data.id);
            if(response && response.response===false){
                alert(response.message)
            }else{
                await this.getAllProvincesFromReact();
            }
        }catch(e){
            console.log(e)
        }
    }

    render() {
        let arrProvince =this.state.arrProvince.data
        return (
            <div className="customers-container">
                <ModalCreateProvince
                    isOpen={this.state.isOpenModalProvince}
                    toggleFromParent={this.toggleProvinceModal}
                    createNewProvince={this.createNewProvince}
                />
                {
                this.state.isOpenModalUpdateProvince &&
                <ModalUpdateProvince
                    isOpen={this.state.isOpenModalUpdateProvince}
                    toggleFromParent={this.toggleUpdateProvinceModal}
                    currentProvince={this.state.provinceUpdate}
                    updateProvince={this.doHandleUpdateProvince}
                />}
                <div className="title text-center">Manage province</div>
                <div className="mx-1">
                    <button className="btn btn-primary px-2" onClick={()=>this.handleAddNewProvince()}>
                        <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
                        Add New Province
                    </button>
                </div>
                <div className="customers-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Parent Id</th>
                                <th>Parent Name</th>
                                <th>Kind</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            {
                                arrProvince && arrProvince.map((item, index) => {
                                    console.log('data', item)
                                    return (
                                        <tr key={item.id} className="divClass">
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            {item.parentId==null?<td>null</td>:<td>{item.parentId}</td>}
                                            {item.parentId==null?<td>null</td>:<td>{item.provinceName}</td>}
                                            {item.provinceKind==0?<td>Province</td>:item.provinceKind==1?<td>District</td>:<td>Commune</td>}
                                            {item.status==0?<td>Not Active</td>:<td>Active</td>}
                                            <td>
                                                <button className="btn-actions" onClick={()=>this.handleUpdateProvince(item)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>                                              
                                                <button className="btn-actions" onClick={()=>this.handleDeleteProvince(item)}><i className="fa fa-trash" aria-hidden="true"></i></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProvinceManage);