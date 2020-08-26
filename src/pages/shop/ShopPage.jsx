import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionOverviewContainer';
import CollectionPageContainer from '../collection/CollectionContainer';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
	componentDidMount () {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render () {
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</div>
		);
	}
}

export default connect(null, { fetchCollectionsStart })(ShopPage);
