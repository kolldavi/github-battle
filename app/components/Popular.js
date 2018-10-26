var React = require('react');

class Popular extends React.Component {
	state = {
		selectedLanguage: 'All'
	};

	updateLanguage = language => {
		this.setState({ selectedLanguage: language });
	};
	render() {
		let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
			<div>
				<ul className="languages">
					{languages.map(language => (
						<li
							style={language === this.state.selectedLanguage ? { color: '#d0021b' } : null}
							key={language}
							onClick={() => this.updateLanguage(language)}
						>
							{language}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

module.exports = Popular;
