/**
 * @routes - centralized routes
 */
import React from 'react';
import LandingComponent from './components/Landing';
// import DashboardComponent from './components/Dashboard';


export default function createRoute() {
  return [
    // {
    //   path: '/',
    //   exact: true,
    //   component: () => <LandingComponent />
    // },
    {
      path: '/dashboard',
      exact: true,
      component: () => <LandingComponent />
    },
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
