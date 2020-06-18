import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import ParentLandingComponent from './components';

export default function provider(store, routeConfig) {
  return (
    <Provider store={store}>
      <Row style={{ height: '100%' }}>
        <Col xs={12} className='grid noSidePad'>
          <BrowserRouter>
            <ParentLandingComponent routesMap={routeConfig} />
          </BrowserRouter>
        </Col>
      </Row>
    </Provider>
  );
}
