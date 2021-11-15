import { lazy } from "react";

const DashboardPage = lazy(() => import("./Dashboard/DashboardPage"));
const SignupPage = lazy(() => import("./Auth/Signup/SignupPage"));

export default {
  DashboardPage,
  SignupPage,
};
