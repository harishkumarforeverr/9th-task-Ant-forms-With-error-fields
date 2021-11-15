

import Common from "../Common";




import {
  DASHBOARD_PAGE_PATH,
  SIGNUP_PAGE_PATH
} from "./PathConstants";


 
export const DASHBOARD_PAGE= {
  component: Common.DashboardPage,
  path: DASHBOARD_PAGE_PATH,
  isPrivate: true,
  exact: true,
};
 
export const SIGNUP_PAGE= {
  component: Common.SignupPage,
  path: SIGNUP_PAGE_PATH,
  isPrivate: true,
  exact: true,
};



export default [
  DASHBOARD_PAGE, 
  SIGNUP_PAGE
];
