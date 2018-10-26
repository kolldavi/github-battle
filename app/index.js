var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Badge extends React.Component {
	render() {
		return (
			<div>
				<img src={this.props.img} alt="avatar" style={{ width: 100, height: 100 }} />
				<h1>Name: {this.props.name}</h1>
				<h3>Username: {this.props.username}</h3>
			</div>
		);
	}
}
Badge.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
};
ReactDOM.render(
	<Badge img="https://avatars3.githubusercontent.com/u/7830118?s=400&v=4" name="David Koller" username="kolldavi" />,
	document.getElementById('app')
);
