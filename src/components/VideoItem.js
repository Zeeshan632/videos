import React from "react";

const VideoItem = ({ videoItem, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(videoItem)} className="video-item item">
			<img
				className="ui image"
				src={videoItem.snippet.thumbnails.medium.url}
				alt="thumbnail"
			/>
			<div className="content">
				<div className="header">
					<h3>{videoItem.snippet.title}</h3>
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
