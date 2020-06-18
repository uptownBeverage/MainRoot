/**
 *  This is the main file, DO NOT CHANGE ANYTHING
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

class MainLanding extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <>
        {this.props.routesMap.map((route, i) => (
          <Route key={i} exact={route.exact} path={route.path} component={route.component} />
        ))}
      </>
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
