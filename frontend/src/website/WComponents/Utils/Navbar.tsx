import { NavbarDiv, NavItems, NavLinkChangedTag } from "../Styled/Navbar";
import { AnchorTag, LinkTag, Svg } from "../../../Global";
import { AiFillGithub } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <NavbarDiv>
      <NavItems>
        <LinkTag to="/">GitBoiUi</LinkTag>
        <NavLinkChangedTag to="/components">Components</NavLinkChangedTag>
        <NavLinkChangedTag to="/themes">Themes</NavLinkChangedTag>
        <NavLinkChangedTag to="/docs">docs</NavLinkChangedTag>

      </NavItems>

      <NavItems>
        <AnchorTag as="a" href="https://github.com/naveengitboi">
          <Svg>
            <AiFillGithub/>
          </Svg>
        </AnchorTag>
      </NavItems>
    </NavbarDiv>
  );
};

export default Navbar;
