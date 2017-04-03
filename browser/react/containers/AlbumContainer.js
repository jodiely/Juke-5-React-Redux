import {connect} from 'react-redux';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';


const mapStateToProps = state => ({
  selectedAlbum: state.albums.selected,
  currentSong: state.player.currentSong,
  isPlaying: state.player.isPlaying
})

const mapDispatch = dispatch => ({
  toggleOne: (song, list) => dispatch(toggleSong(song, list))
})  

export default connect(mapStateToProps, mapDispatch)(Album);
