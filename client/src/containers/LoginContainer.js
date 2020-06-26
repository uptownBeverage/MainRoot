import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as landingActions from '../actions';
import LoginComponent from'../components/Login';

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...landingActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)