import {connect} from 'react-redux'
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
  playlists: state.playlists.list
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
