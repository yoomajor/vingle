import React, { Component } from 'react';

class MyName extends Component {
	static defaultProps = {
		name: '유주아',
			age: '33'
	}
	render() {
		return (
			<div>
				<div>
				hello! my name is <strong>{this.props.name}</strong>
				</div>
				<div>
				i am <strong>{this.props.age}</strong>
				</div>
			</div>
		);
	}
}

export default MyName;
