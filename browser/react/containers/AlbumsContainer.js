import {connect} from 'react-redux'
import Albums from '../components/Albums';

const mapStateToProps = state => ({
  albums: state.albums.list
})

const mapDispatch = () => ({})

export default connect(mapStateToProps, mapDispatch)(Albums);
