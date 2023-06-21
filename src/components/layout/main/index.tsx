import React from "react";
import { MainContainer } from "./style";

type MainPropsType = {
  children: any;
  background: string;
};

const Main: React.FC<MainPropsType> = ({ children, background }) => {
  return <MainContainer background={background}>{children}</MainContainer>;
};

export default Main;