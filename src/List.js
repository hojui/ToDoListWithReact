import React , {Component} from 'react';

class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {func , data} = this.props;
		return (
			<li>
				<h3>{data} <button className="btn" onClick={func}>Del</button></h3>
			</li>
		)
	}
}

export default List;