import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';


import { userIsAuthenticated, userIsAuthorized, userIsNotAuthenticated } from '../hoc/authentication';

import { path } from '../utils'

import Home from '../routes/Home';
// import Login from '../routes/Login';
import Login from './Auth/Login';
import Header from './Header/Header';
import System from '../routes/System';
import HomePage from './HomePage/HomePage.js'
import AboutPage from './AboutPage/AboutPage.js'
import NewsClientPage from './News/NewsClientPage.js'
import NewsDetailPage from './News/NewsDetailPage.js'
import ProfilePage from './Profile/ProfilePage.js'
import ContactPage from './ContactPage/ContactPage.js'
import ProductClientPage from './Product/ProductClientPage.js'
import ProductDetailPage from './Product/ProductDetailPage.js'
import HistoryOrderPage from './HistoryOrder/HistoryOrderPage.js';
import ConfirmModal from '../components/ConfirmModal';

import { CustomToastCloseButton } from '../components/CustomToast';
import BuyProductClientPage from './BuyProduct/BuyProductClientPage';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        <span className="content-container">
                            <Switch>
                                <Route path={path.HISTORYORDERPAGE} component={HistoryOrderPage} />
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.HOMEPAGE} exact component={HomePage} />
                                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                <Route path={path.ABOUTPAGE} component={AboutPage} />
                                <Route path={path.NEWSPAGE} component={NewsClientPage} />
                                <Route path={path.NEWSDETAILPAGE} component={NewsDetailPage} />
                                <Route path={path.BUYPRODUCT} component={BuyProductClientPage} />
                                <Route path={path.PROFILE} exact component={userIsAuthenticated(ProfilePage)} />
                                <Route path={path.PRODUCTPAGE} component={ProductClientPage} />
                                <Route path={path.PRODUCtDETAILTPAGE} component={ProductDetailPage} />
                                <Route path={path.CONTACTPAGE} component={ContactPage} />
                            </Switch>
                        </span>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };
};

        // isUserLoggedIn: state.user.isUserLoggedIn
const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);