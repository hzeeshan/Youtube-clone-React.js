import React, { Component } from 'react';

class VideoDetail extends Component {

	render() {

		if(!this.props.video) {

			return 'Loading ...';
		}

		console.log(this.props.video);
		const videoId = this.props.video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}`;
		const videoTilte = this.props.video.snippet.title;
		const videoDescription = this.props.video.snippet.description;

		return (
			<div className="video-detail col-md-8">
				<div className="details">
				<iframe width="560" height="315" src={url}>
					</iframe>
					<div className="title"><h4>{ videoTilte }</h4></div>
					<div className="description">{ videoDescription }</div>
				</div>
			</div>

			);
	}
}

export default VideoDetail;
