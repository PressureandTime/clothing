import React, { Component } from 'react';
import CustomButton from '../components/custom-button/CustomButton';
import FormInput from '../components/form-input/FormInput';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render () {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						name="email"
						type="email"
						value={this.state.email}
						label="email"
						required
					/>

					<FormInput
						handleChange={this.handleChange}
						name="password"
						type="password"
						value={this.state.password}
						label="password"
						required
					/>

					<div className="buttons">
						<CustomButton type="submit" value="Submit Form">
							Sign In
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
