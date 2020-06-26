import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MainLanding extends React.Component {
  componentDidMount() {
    // this.props.fetchUser();
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          {this.props.routesMap.map((route, i) => (
            <Route key={i} exact={route.exact} path={route.path} component={route.component} />
          ))}
        </Switch>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(MainLanding);
