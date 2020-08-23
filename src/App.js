import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import {
	auth,
	createUserProfileDocument,
	addCollectionAndDocuments,
} from './firebase/firebase.utils';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/Checkout';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount () {
    const { setCurrentUser, collectionsArray } = this.props;

    // addCollectionAndDocuments(
		// 			'collections',
		// 			collectionsArray.map(({ title, items }) => ({ title, items })),
		// 		);

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			else {
				setCurrentUser(userAuth);
			}
		});
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
	// collectionsArray: selectCollectionsForPreview,
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default connect(mapStateToProps, { setCurrentUser })(App);
