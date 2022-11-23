import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './NewsManage.scss'; 
import CreateNewsModal from './CreateNewsModal';
import UpdateNewsModal from './UpdateNewsModal';
import {emitter} from "../../../utils/emitter";
import {getOneNews,getAllNews,createNews,updateNews,deleteNews} from '../../../services/newsService'
class NewsManage extends Component {
    constructor(props){
        super(props);
        this.state = { 
            newsList : [],
            isOpenCreateNewsModal: false,
            isOpenUpdateNewsModal: false,
            newsUpdate: {}
        }
    }


    async componentDidMount() {
        await this.getAllNewsFromReact()
        
    }

    toggleNewsModal = () =>{
        this.setState ({
            isOpenCreateNewsModal: !this.state.isOpenCreateNewsModal,
        })
    }

    toggleUpdateNewsModal = () => {
        this.setState ({
            isOpenUpdateNewsModal: !this.state.isOpenUpdateNewsModal,
        })
    }

    getAllNewsFromReact = async () => {
        let response = await getAllNews();
        if(response && response.result){
            this.setState({
                newsList : response.data
            })
        } 
    }

    handleAddNews = () => {
        this.setState ({
            isOpenCreateNewsModal: true,
        })
    }
    handleUpdateNews =  async (data) => {
        let response =  await getOneNews(data);
        if(response && response.result){
            this.setState({
                isOpenUpdateNewsModal: true,
                newsUpdate: response.data
            })
        }
        else alert(response.message)
    }

    handleDeleteNews = async (id) => {
        let response = await deleteNews(id);
        alert(response.message)
        await this.getAllNewsFromReact();
    }

    updateNewsFromReact = async(data) => {
        let response = await updateNews(data);
        if(response && response.result){
            await this.getAllNewsFromReact();
            this.setState({
                isOpenUpdateNewsModal: false,
            })
        }
        alert(response.message)
    }

    createNewsFromReact = async (data) => {
        let response = await createNews(data);
        if(response && response.result){
            await this.getAllNewsFromReact();
            this.setState({
                isOpenCreateNewsModal: false,
            })
            emitter.emit('EVENT_CLEAR_MODAL_DATA')
        }else{
            alert(response.message)
        }
    }


    render() {
        let newsList =this.state.newsList.data
        return (
            <div className="users-container">
                <CreateNewsModal
                    isOpen={this.state.isOpenCreateNewsModal}
                    toggleFromParent={this.toggleNewsModal}
                    createNewsFromReact={this.createNewsFromReact}
                />
                {
                this.state.isOpenUpdateNewsModal &&
                <UpdateNewsModal
                    isOpen={this.state.isOpenUpdateNewsModal}
                    toggleFromParent={this.toggleUpdateNewsModal}
                    currentNews={this.state.newsUpdate}
                    updateNewsFromReact={this.updateNewsFromReact}
                />}
                <div 
                    style={{fontSize : 30 , marginBottom : 30, marginTop : 20, color : 'red'}} 
                    className='title text-center'
                >Manage News
                </div>
                <div className='mx-1'>
                    <button className="btn btn-primary px-3" onClick={()=>this.handleAddNews()}>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        Add News
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Kind</th>
                        <th>Created date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    {newsList && newsList.map((news,index) =>(
                        <tr key={news.id} className="divClass">
                            <td>{news.id}</td>
                            <td>{news.title}</td>
                            <td>{news.kind}</td>
                            <td>{news.createddate}</td>
                            <td>{news.status}</td>
                            <td>
                                <button className='btn-action edit' onClick={()=>this.handleUpdateNews(news.id)} ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                <button className='btn-action delete' onClick={()=>this.handleDeleteNews(news.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                    ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsManage);
