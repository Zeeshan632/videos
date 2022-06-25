import React from "react";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.gettingSearchTerm("buildings");
	}

	gettingSearchTerm = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className="container">
				<Searchbar searchTermSubmit={this.gettingSearchTerm} />
				<div className="ui grid grid-container">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
