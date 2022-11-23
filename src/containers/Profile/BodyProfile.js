import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../services/customerService'
import moment from 'moment';
import './ProfilePage.scss';
class BodyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            username: '',
            phone: '',
            genderCustomer: '',
            addressCustomer: '',
            birthdayCustomer: '',
            loyaltyLevelCustomer: '',
            messageUpdate: ''
        }
    }

    async componentDidMount() {
        await this.getCustomerInfo()
    }

    getCustomerInfo = async () => {
        try{
            let response = await getProfile();
            if (response && response.result) {
                this.setState({
                    fullName: response.data.fullName,
                    email: response.data.email,
                    phone: response.data.phone,
                    genderCustomer: response.data.genderCustomer,
                    addressCustomer: response.data.addressCustomer,
                    birthdayCustomer: response.data.birthdayCustomer,
                    loyaltyLevelCustomer: response.data.loyaltyLevelCustomer,
                    username: response.data.username
                })
            }
        } catch {
            alert("Không có quyền truy cập")
        }
    }

    handleOnChange = (event, index) => {
        let prevState = {...this.state};
        prevState[index] = event.target.value;
        this.setState({
            ...prevState
        })
    }

    handleUpdateProfile = async () => {
        var data = {
            customerEmail: this.state.email,
            customerFullName: this.state.fullName,
            address: this.state.addressCustomer,
            birthday: this.state.birthdayCustomer,
            gender: this.state.genderCustomer
        }
            let response = await updateProfile(data)
            if(response && response.result){
                await this.getCustomerInfo();
                this.setState({
                    messageUpdate: response.message
                })
            } 
        
    }

    render() {

        return (
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /></div>
                    </div>
                    <div class="col-md-5">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Customer Information</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-12"><label class="labels">Name</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChange(event,"fullName")}}  
                                        class="form-control" 
                                        value={this.state.fullName} 
                                    /></div>
                            </div>
                                
                            <div class="row mt-3">
                                <div className="col-md-12"><label class="labels">Username</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChange(event,"username")}} 
                                        class="form-control" 
                                        disabled = {this.state.username ? true : false} 
                                        value={this.state.username} 
                                /></div>
                                <div class="col-md-12"><label class="labels">Phone</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChange(event,"phone")}}  
                                        class="form-control" 
                                        disabled = {this.state.phone ? true : false} 
                                        value={this.state.phone} 
                                /></div>
                                <div class="col-md-12"><label class="labels">Address</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChange(event,"addressCustomer")}}  
                                        class="form-control" 
                                        value={this.state.addressCustomer} 
                                /></div>
                                <div class="col-md-12"><label class="labels">Email</label>
                                    <input 
                                        type="text"
                                        onChange={(event) => {this.handleOnChange(event,"email")}} 
                                        disabled = {this.state.username ? true : false} 
                                        class="form-control" 
                                        value={this.state.email} 
                                /></div>
                                <div class="col-md-12"><label class="labels">Sex</label><br/>
                                        <input 
                                            type="radio" 
                                            value= {1}
                                            className="gender-profile"
                                            onChange={(event) => {this.handleOnChange(event,"genderCustomer")}}
                                            checked={this.state.genderCustomer == 1}
                                             /> Male
                                        <input 
                                            type="radio" 
                                            value={2}
                                            className="gender-profile female-radio"
                                            onChange={(event) => {this.handleOnChange(event,"genderCustomer")}}
                                            checked={this.state.genderCustomer == 2}
                                             /> Female
                                </div>
                                <div class="col-md-12"><label class="labels">Date of birth</label>
                                    <input 
                                        type="date"
                                        onChange={(event) => {this.handleOnChange(event,"birthdayCustomer")}} 
                                        class="form-control" 
                                        value={moment(this.state.birthdayCustomer).format('YYYY-MM-DD')} 
                                /></div>
                                <div class="col-md-12"><label class="labels">Level</label>
                                    <input 
                                        disabled 
                                        type="text" 
                                        class="form-control" 
                                        value={this.state.loyaltyLevelCustomer} 
                                /></div>
                            </div>
                            <div className='message-update-profile'>{this.state.messageUpdate}</div>
                            <div class="mt-5 text-center">
                                <button class="btn btn-primary btn-block" 
                                    type="button"
                                    onClick={() => {this.handleUpdateProfile()}}
                            >Update Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyProfile);