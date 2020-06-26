/**
 * @routes - centralized routes
 */
import React from 'react';
import LandingContainer from './containers/LandingContainer';
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';


export default function createRoute() {
  return [
    {
      path: '/',
      exact: true,
      component: () => <LandingContainer />
    },
    {
      path: '/register',
      exact: true,
      component: () => <RegisterContainer />
    },
    {
      path: '/login',
      exact: true,
      component: () => <LoginContainer />
    },
    // {
    //   path: '/dashboard',
    //   exact: true,
    //   component: () => <LandingComponent />
    // },
    // {
    //   path: '/dashboard',
    //   exact: true,
    //   component: () => <DashboardComponent />
    // },
    // {
    //   path: '/survey/createNewSurvey',
    //   component: () => <SurveyNewComponent />
    // }
  ];
}
