import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetAppInfo } from "../redux/actions/poke";
import Routes from "./Routes";

const Navigator = () => {
  const auth = useSelector((state) => state.auth);
  const { skipIntro } = auth;
  var initialRouteName = "Login";
  if (skipIntro) {
    initialRouteName = "PokeList";
  } else initialRouteName = "Intro";
  return <Routes initRoute={initialRouteName} />;
};

export default Navigator;
