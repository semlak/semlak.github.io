import React, { Component } from 'react';

import portfolioItems from './../../portfolioItems'
export default class extends Component {

	state = {
		xena: 'cuddly',
		portfolioItems
	}

	render() {
		return <div>
			{this.state.portfolioItems.map((item, i) => <p key={i} >{item.title}</p>)}
		</div>
	}


}
