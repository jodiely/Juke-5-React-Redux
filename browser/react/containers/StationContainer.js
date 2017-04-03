import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player'

const filterSongs = (songs, genre) => {
	return songs.filter(song => song.genre === genre).map(convertSong)
} 

const mapStateToProps = (state, ownProps) => ({
	songs: filterSongs(state.songs, ownProps.params.genreName),
	isPlaying: state.player.isPlaying,
	currentSong: state.player.currentSong,
	genreName: ownProps.params.genreName
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	toggleOne: (song, list) => {
		dispatch(toggleSong(song, list))
	}
})

const StationContainer = connect(
	mapStateToProps, 
	mapDispatchToProps
)(Station)

export default StationContainer