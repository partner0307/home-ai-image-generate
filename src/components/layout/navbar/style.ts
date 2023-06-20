import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { GV } from "utils/style.util";

export const LogoWrapper = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const NavbarContainer = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 50%;
  left: 2rem;
  transform: translate(0, -50%);
  width: fit-cotent;

  @media (max-width: 768px) {
    position: initial;
    transform: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0rem 2rem;

    > ul {
      @media (max-width: 768px) {
        position: fixed;
        left: 0;
        top: 0;
        justify-content: center;
        align-items: center;
        background-color: white;
        overflow: hidden;
        width: 0;
        z-index: 90;
        height: 100vh;
        transition: all 0.5s;

        ${({ isOpen }) =>
          isOpen
            ? `
            width: 100%;
        `
            : ``}
      }
    }
  }
`;

export const StyledNavItem = styled(Link)`
  display: flex;
  align-items: center;
  background: #1c3d5299;
  border-radius: 50rem;
  font-size: 0.75rem;
  overflow: hidden;

  > span {
    display: block;
    width: 0px;
    padding-left: 0;
    white-space: nowrap;
    transition: all ease-in-out 0.3s;

    @media (max-width: 768px) {
        padding-left: 0.5rem;
        width: 100px;
    }
  }

  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, .7);
    > span {
      padding-left: 0.5rem;
      width: 100px;
    }
  }
`;

export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${GV("bg-sub")};
  border-radius: 50%;
`;

export const Hamburger = styled.span<{ isOpen: boolean }>`
  position: relative;
  display: none;
  width: 30px;
  height: 30px;
  z-index: 9000;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  span,
  &:after,
  &:before {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 2px;
    background: ${GV("color")};
    border-radius: 1rem;
    transition: all ease-in-out 0.3s;
    content: "";
  }

  span {
    top: 50%;
    transform: translate(0, -50%);
  }

  &:after {
    top: 10%;
  }

  &:before {
    bottom: 10%;
  }

  @media (max-width: 1120px) {
    display: inline-block;

    ${({ isOpen }) =>
      isOpen
        ? `
            span,
            &:after,
            &:before {
                background: ${GV("bg")};
            }

            &:before {
                transform: translate3d(0,-11px,0) rotate(-225deg);
            }
            
            & span {
                transform: rotate(0deg) translateZ(0);
                opacity: 0;
            }
            
            &:after {
                transform: translate3d(0,11px,0) rotate(225deg);
            }
        `
        : ``}
  }
`;
