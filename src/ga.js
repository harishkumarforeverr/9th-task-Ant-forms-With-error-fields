import ReactGA from "react-ga";

const GA_CODE = process.env.REACT_APP_GA;

export const GA_EVENT_BUTTON_CLICK = "Button Click";

export const gaEvent = (category, action) => {
  ReactGA.initialize(GA_CODE);

  ReactGA.event({ category, action });
};

export const gaPageView = (page) => {
  ReactGA.initialize(GA_CODE);

  ReactGA.pageview(page);
};
