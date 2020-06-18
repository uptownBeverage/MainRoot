import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const CustomRow = styled(Row)`
min-height: 10vh;
display:flex;
align-items:center;
padding: 0 4vw;
text-align:center;
border-top: 1px solid #d8dada;
`;
const CustomCol = styled(Col)`
padding: 0;
`;
export default class Header extends Component {
  render() {
    return (
      <CustomRow>
        <CustomCol xs={12}>
          <Row>
            <CustomCol xs={12}>
              Footer Component
            </CustomCol>
          </Row>
        </CustomCol>
      </CustomRow>
    );
  }
}
