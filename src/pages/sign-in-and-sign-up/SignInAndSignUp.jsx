import React from 'react';
import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/sign-in/SignIn';

import './sign-in-and-sign-up.scss';

function SignInAndSignUp (){
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
}

export default SignInAndSignUp;
