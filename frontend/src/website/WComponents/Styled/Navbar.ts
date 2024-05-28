import styled from "styled-components";
import { NavLinkTag } from "../../../Global";
import { NavLink } from "react-router-dom";


const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 5vw;
  background: var(--mainBgOpacity);
  color: var(--white);
  border-bottom: 1px solid var(--darkGrayTone);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkChangedTag = styled(NavLink)`
  ${NavLinkTag}
  padding: 0.5rem 1rem;
`;

export { NavbarDiv, NavItems, NavLinkChangedTag };
