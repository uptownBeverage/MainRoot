import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import ParentLandingComponent from './components';

const CustomRow = styled(Row)`
padding: 0;
margin: 0;
border: 0;
`;
const CustomCol = styled(Col)`
max-width: 1270px;
margin-left: auto;
margin-right: auto;
padding: 0;
`;

export default function provider(store, routeConfig) {
  return (
    <Provider store={store}>
      <CustomRow>
        <CustomCol xs={12} className='grid noSidePad'>
          <BrowserRouter>
            <ParentLandingComponent routesMap={routeConfig} />
          </BrowserRouter>
        </CustomCol>
      </CustomRow>
    </Provider>
  );
}
