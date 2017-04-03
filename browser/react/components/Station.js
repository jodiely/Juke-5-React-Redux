import React from 'react';
import Songs from './Songs';

const Station = (props) => {
	return (
		<div className='station'>
			<h3>{ props.genreName } Station</h3>
		    <Songs 
			    songs={props.songs} 
			    currentSong={props.currentSong} 
			    isPlaying={props.isPlaying} 
			    toggleOne={props.toggleOne}
		    />
		</div>
	)
}

export default Station;