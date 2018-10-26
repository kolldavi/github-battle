var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Badge extends React.Component {
	render() {
		return <div>Hello World!</div>;
	}
}
Badge.PropTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
};
ReactDOM.render(<Badge />, document.getElementById('app'));
