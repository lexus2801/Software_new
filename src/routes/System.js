import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import CustomerManage from '../containers/System/Customer/CustomerManage';
import ProvinceManage from '../containers/System/Province/ProvinceManage';
import ProductManage from '../containers/System/Product/ProductManage';
import OrdersManage from '../containers/System/Orders/OrdersManage';
import NewsManage from '../containers/System/News/NewsManage';
import ErrorPage from '../containers/ErrorPage/ErrorPage';
import CategoryManage from '../containers/System/Category/CategoryManage.js';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
import Header from '../containers/Header/Header';
class System extends Component {
    render() {
        const { systemMenuPath, userInfo } = this.props;
        return (
            <div className="system-container">
                {userInfo.kind === 1 &&
                    <div className="system-list">
                        <Header />
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/news-manage" component={NewsManage} />
                            <Route path="/system/category-manage" component={CategoryManage} />
                            <Route path="/system/customer-manage" component={CustomerManage} />
                            <Route path="/system/province-manage" component={ProvinceManage} />
                            <Route path="/system/product-manage" component={ProductManage} />
                            <Route path="/system/orders-manage" component={OrdersManage} />
                            <Route path="/system/register-package-group-or-account" component={RegisterPackageGroupOrAcc} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                }
                {
                    userInfo.kind != 1 && <ErrorPage/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
