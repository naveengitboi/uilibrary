import { NavbarDiv, NavItems, NavLinkChangedTag } from "../Styled/Navbar";
import { AnchorTag, LinkTag } from "../../../Global";

const Navbar: React.FC = () => {
  return (
    <NavbarDiv>
      <NavItems>
        <LinkTag to="/">GitBoiUi</LinkTag>
        <NavLinkChangedTag to="/components">Components</NavLinkChangedTag>
        <NavLinkChangedTag to="/themes">Themes</NavLinkChangedTag>

      </NavItems>

      <NavItems>
        <AnchorTag as="a" href="https://github.com/naveengitboi">
          {" "}
          Github{" "}
        </AnchorTag>
      </NavItems>
    </NavbarDiv>
  );
};

export default Navbar;
