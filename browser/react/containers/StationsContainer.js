import {connect} from 'react-redux'
import Stations from '../components/Stations'

const convertStations = songs => {
    let genres = {};
    songs.map(song => {
        if(!genres[song.genre]){
            genres[song.genre] = []
        }
        genres[song.genre].push(song)
    })
    return genres;
}

const mapStateToProps = (state) => ({
    stations: convertStations(state.songs)
})

const mapDispatch = (dispatch) => ({})

const StationsContainer = connect(mapStateToProps, mapDispatch)(Stations)

export default StationsContainer