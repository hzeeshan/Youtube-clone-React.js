import React, { Component } from 'react';
import VideoListItems from './video_list_item';

class VideoList extends Component {


renderListItems() {

	return this.props.videos.map((video) => {

		return (
			//<li className="list-group-item" key={video.etag}> { video.etag } </li>
			<VideoListItems 
			onVideoSelect={ this.props.onVideoSelect }
			key={ video.etag } 
			video={ video } 
			/>

			);
	});
}
 
	render() {

		return (

			<ul className="list-group col-md-4">
			{this.renderListItems() }
			</ul>
			);
	}
}

export default VideoList;