import React, { Component } from 'react';

import portfolioItems from './../../portfolioItems'
export default class extends Component {

	state = {
		portfolioItems
	};

	render() {
		return <div>
			{this.state.portfolioItems.map((item, i) => <p key={i} >{item.title}</p>)}
		</div>
	}


}
