import {connect} from 'react-redux';
import Artist from '../components/Artist';

import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  // console.log('artist container ownProps: ', ownProps);
  console.log('artist container state: ', state);
  return {
  selectedArtist: state.artists.selected,
  children: ownProps.children,
  isPlaying: state.player.isPlaying,
  currentSong: state.player.currentSong
}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	toggleSong: (song, list) => {
		dispatch(toggleSong(song, list))
	}
})

const ArtistContainer = connect(
	mapStateToProps, 
	mapDispatchToProps
)(Artist)

export default ArtistContainer;
