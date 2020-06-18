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
text-align: left;
`;

const CustomLink = styled(Link)`
line-height: 1.2;
text-decoration: underline;
cursor: pointer;
`;

export default class Header extends Component {

  render() {
    return (
      <CustomRow>
        <CustomCol xs={12}>
          <Row>
            <CustomCol xs={6}>
              <StoreName>Uptown Beverage</StoreName>
            </CustomCol>
            <CustomCol xs={6}>
              <CustomLink clickFn={() => window.location.href = '/auth/google'}>Sign In with Google</CustomLink>
            </CustomCol>
          </Row>
        </CustomCol>
      </CustomRow>
    );
  }
}
