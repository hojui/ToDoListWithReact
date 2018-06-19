import React , {Component} from 'react';
import List from './List';

class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value : [],
			text : ''
		}
	}
	componentDidMount() {
		alert('Welcome to some bad ToDo List Project!! this is make for practice');
	}
	addToDo() {
		let tmp = this.state.value;
		tmp.push(this.state.text);
		if (this.state.text != '') {
			this.setState({
				value : tmp,
				text : ''
			});
		}
	}
	deleteToDo(index) {
		console.log(this.state.value[index]);
		let tmp = this.state.value;
		tmp.splice(index,index+1);
		this.setState({value : tmp});
	}
	render() {
		const l = this.state.value;
		let element = l.map((val,index) =>
							<List
								func={this.deleteToDo.bind(this,index)} 
								data={this.state.value[index]}
							/>
						)
		console.log(element);
		return (
			<div className="content">
				<ul className="unorderlist">
					{element}
				</ul>
				<input className="input" type='text' onChange={(e) => {this.setState({text : e.target.value})}} value={this.state.text}/>
				&nbsp;<button className="btn" onClick={this.addToDo.bind(this)}> Add </button>
			</div>
		)
	}
}

export default Body;