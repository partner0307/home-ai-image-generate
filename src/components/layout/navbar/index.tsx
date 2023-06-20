import React, { useState } from "react";
import {
  NavIconWrapper,
  StyledNavItem,
  NavbarContainer,
  Hamburger,
  LogoWrapper,
} from "./style";
import { Flex, Span } from "components/basic";
import _ROUTERS from "constants/routers.constant";
import { Icon } from "components/custom";
import useStore from "useStore";

import LogoImg from "assets/logo.png";
import { Link } from "react-router-dom";

type NavItemPropsType = {
  to: string;
  icon: any;
  onClick: any;
  label: string;
  isActive: boolean;
};

const NavItem: React.FC<NavItemPropsType> = ({
  to,
  onClick,
  icon,
  label,
  isActive,
}) => {
  return (
    <Flex as={"li"} onClick={onClick}>
      <StyledNavItem to={to}>
        <NavIconWrapper>{icon}</NavIconWrapper>
        <Span>{label}</Span>
      </StyledNavItem>
    </Flex>
  );
};

const Navbar = () => {
  const { T } = useStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavbarContainer isOpen={isOpen}>
      <LogoWrapper>
        <Link to={_ROUTERS.home}><img src={LogoImg} height={80} alt="" /></Link>
      </LogoWrapper>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <span />
      </Hamburger>
      <Flex
        as={"ul"}
        $style={{
          fDirection: "column",
          gap: "1rem",
        }}
      >
        <NavItem
          onClick={() => setIsOpen(false)}
          icon={<Icon icon="Home" />}
          to={_ROUTERS.home}
          label={T("menu.overview")}
          isActive={false}
        />
        <NavItem
          onClick={() => setIsOpen(false)}
          icon={<Icon icon="Info" />}
          to={_ROUTERS.howwework}
          label={T("menu.howwework")}
          isActive={false}
        />
        <NavItem
          onClick={() => setIsOpen(false)}
          icon={<Icon icon="CircleCheck" />}
          to={_ROUTERS.pricing}
          label={T("menu.pricing")}
          isActive={false}
        />
        <NavItem
          onClick={() => setIsOpen(false)}
          icon={<Icon icon="Logout" />}
          to={_ROUTERS.logout}
          label={T("menu.logout")}
          isActive={false}
        />
      </Flex>
    </NavbarContainer>
  );
};

export default Navbar;
