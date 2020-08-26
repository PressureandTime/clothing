import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import Checkout from './pages/checkout/Checkout';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount () {
		const { checkUserSession } = this.props;
		checkUserSession();
	}

	componentWillUnmount () {
		this.unsubscribeFromAuth();
	}

	render () {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/checkout" component={Checkout} />
					<Route
						exact
						path="/signin"
						render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
