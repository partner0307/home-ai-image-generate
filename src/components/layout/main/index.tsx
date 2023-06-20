import React from "react";
import { MainContainer } from "./style";

type MainPropsType = {
  children: any;
};

const Main: React.FC<MainPropsType> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;