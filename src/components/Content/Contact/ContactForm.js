import React, { Component } from 'react';

import {
	withRouter
} from 'react-router-dom';

class ContactForm extends Component {

	submitForm (e) {
		e.preventDefault()
		this.props.history.push('/sent');
	}

	render() {
		return (
			<form action="/sent" onSubmit={this.submitForm.bind(this)}>
				<div>
					<i className="far fa-user"></i><input type="text" placeholder="indtast dit navn..." required/>
				</div>
				<div>
					<i className="far fa-envelope"></i><input type="email" placeholder="indtast din email..." required/>
				</div>
				<textarea  cols="30" rows="10" required></textarea>
				<input type="submit" value="send" className="btn"/>
			</form>
		)

	}
}
export default withRouter(ContactForm);