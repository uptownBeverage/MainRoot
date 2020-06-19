import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Link from './common/Link';

const CustomRow = styled(Row)`
min-height: 15vh;
display:flex;
align-items:center;
padding: 0 4vw;
text-align:center;
border-bottom: 1px solid #d8dada;
background: #000;
color: #FFF;
`;
const CustomCol = styled(Col)`
padding: 0;
align-items:center;
height:100%;
`;

const StoreName = styled.h1`
font-size: 1.6rem;
font-weight: 800;
line-height: 1.5rem;
color:#00000;
padding: 0;
margin: 0;
text-decoration: none;
font-family: "Gill Sans", sans-serif, Arial, Helvetica;
text-align: center;
`;

const CustomLink = styled(Link)`
line-height: 1.2;
text-decoration: underline;
cursor: pointer;
text-align: right;
display: block;
`;



export default class Header extends Component {
  renderSignInContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <CustomLink clickFn={() => window.location.href = '/auth/google'}>Sign In with Google</CustomLink>;
      default:
        return <CustomLink clickFn={() => window.location.href = '/api/logout'}>Sign out</CustomLink>;
    }
  }
  render() {
    console.log('header props', this.props);
    return (
      <CustomRow>
        <CustomCol xs={12}>
          <Row>
            <CustomCol xs={6}>
              <StoreName>Uptown Beverage</StoreName>
            </CustomCol>
            <CustomCol xs={6}>
              {this.renderSignInContent()}

            </CustomCol>
          </Row>
        </CustomCol>
      </CustomRow>
    );
  }
}
