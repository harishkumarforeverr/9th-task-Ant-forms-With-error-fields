/* eslint-disable no-shadow */
import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import {DASHBOARD_PAGE_PATH } from "./PathConstants";
// import userLoggedIn from './../utills/UserIsLoggedIn';

export default function AppRoute({ component: Component, path, isPrivate,isPublic, ...props }) {
  // const [_, setLoged] = useState(false);
  const history = useHistory();
  const islogin = JSON.parse(localStorage.getItem("isLogged"))
  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-expressions
  //   islogin ? setLoged(true) : setLoged(false);
  // }, [islogin]);

  useEffect(() => {
    if (!isPrivate) {
      // setLoged(false);
    }
  }, [isPrivate]);
  console.log("islogin",islogin);
  useEffect(() => {

    if(isPublic&&islogin){
      history.push(DASHBOARD_PAGE_PATH);
    }
    else if (isPrivate && !islogin) {
      // history.push(HOMEPAGE_PATH);
    }
    // eslint-disable-next-line
  }, [islogin, isPrivate,isPublic]);

  return (
    <Route
      path={path}
      render={(props) =>
        // isPrivate && !userLoggedIn ? (
        //   <div className="container d-flex justify-content-center align-items-center flex-column">
        //     <p className="fw-bolder text-center h1">Oops !</p>
        //     <p className="fw-bold text-center h3">404 - Page Not found</p>
        //     <p className="fw-light text-center h6">
        //       You might have logged out please login to access this page
        //       <br />
        //       Redirecting...
        //     </p>
        //   </div>
        // ) : (
          <>
            <Component {...props} />
          </>
        // )
      }
      {...props}
    />
  );
}
