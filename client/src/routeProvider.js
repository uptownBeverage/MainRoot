import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import ParentLandingComponent from './components';
import NotificationBar from './components/common/NotificationBar';
const CustomRow = styled(Row)`
height: 100vh;
width: 100vw;
display: flex;
flex-wrap: wrap;
box-sizing: border-box;
padding: 0;
margin: 0 !important;
`;

const CustomCol = styled(Col)`
padding: 0;
`;

export default function provider(store, routeConfig) {
  return (
    <Provider store={store}>
      <CustomRow>
        <CustomCol xs={12}>
          <NotificationBar />
          <HashRouter>
            <ParentLandingComponent routesMap={routeConfig} />
          </HashRouter>
        </CustomCol>
      </CustomRow>
    </Provider>
  );
}
