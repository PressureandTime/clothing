import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import React from 'react'
import CollectionPreview from '../collection-preview/CollectionPreview'
import { selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import './collections-overview.styles.scss'


function CollectionsOverview({collections}) {
  return (
    <div className="collections-overview">
      		{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview)
