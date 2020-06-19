import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Header from './Header';
import Footer from './Footer';
import * as actions from '../actions';
import styled from 'styled-components';

const CustomRow = styled(Row)`
min-height: 72vh;
display:flex;
align-items:center;
padding: 0 4vw;
text-align:center;
`;

const CustomCol = styled(Col)`
padding: 0;
`;
class MainLanding extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <CustomRow>
          <CustomCol xs={1}></CustomCol>
          <CustomCol xs={10}>
            {this.props.routesMap.map((route, i) => (
              <Route key={i} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </CustomCol>
          <CustomCol xs={1}></CustomCol>
        </CustomRow>
        <Footer />
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
