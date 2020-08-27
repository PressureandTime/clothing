import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionOverviewContainer';
import CollectionPageContainer from '../collection/CollectionContainer';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(
		() => {
			fetchCollectionsStart();
		},
		[ fetchCollectionsStart ],
	);

	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
		</div>
	);
};

export default connect(null, { fetchCollectionsStart })(ShopPage);
