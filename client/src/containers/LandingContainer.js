import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as landingActions from '../actions';
import LandingComponent from'../components/Landing';
import * as notifications from '../components/common/NotificationBar/actions';

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...landingActions, ...notifications }, dispatch)
});

const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingComponent)

export default Landing