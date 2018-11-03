import React, { Component } from 'react';

export default class VideoListItems extends Component {

	render() {

		const thumbnails = this.props.video.snippet.thumbnails.default.url;
		const heading = this.props.video.snippet.title;
			//console.log(this.props.video);
		return (
			<li onClick={() => this.props.onVideoSelect(this.props.video)} className="list-group-item">
				<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={ thumbnails } />
				</div>
					<div className="media-body">
					<div className="media-heading">
						{ heading }
					</div>
					</div>
					
				</div>
			</li>

			);
	}
}
