import React from "react";
import "./style.css";

class Searchbar extends React.Component {
	state = { term: "" };

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.searchTermSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar">
				<form className="search-form" onSubmit={this.onFormSubmit}>
					<label htmlFor="search" className="search-label">
						Search for videos
					</label>
					<input
						type="text"
						id="search"
						className="search-input"
						value={this.state.term}
						onChange={(e) => this.setState({ term: e.target.value })}
					/>
				</form>
			</div>
		);
	}
}

export default Searchbar;
