import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton ({ price }){
	const priceForStrip = price * 100;
	const publishableKey = 'pk_test_GKNrnqjaW3D42NdzBzeQzQmC00CTFARNsh';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStrip}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}

export default StripeCheckoutButton;
