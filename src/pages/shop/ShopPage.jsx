import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import CollectionPage from '../collection/CollectionPage';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount () {
		const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

		collectionRef.get().then(async (snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render () {
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
				/>
			</div>
		);
	}
}

export default connect(null, { updateCollections })(ShopPage);
