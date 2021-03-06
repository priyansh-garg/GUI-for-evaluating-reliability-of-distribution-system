import React, { useState } from "react";
import { SiPowerbi } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavLinks,
  NavMenu,
  NavLinkInput,
} from "./NavbarElements";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DropdownMenu from "./Dropdown";

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#131313",
    color: "fff",
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: "400",
    padding: "8px",
  },
}))(Tooltip);

const Navbar = ({ toggle, enableAnalytics }) => {
  const [open, setOpen] = useState(false);
  const handleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <SiPowerbi />
            <span>IOP</span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="/">Home</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinkInput onClick={handleDropdown}>Input</NavLinkInput>
              {open && <DropdownMenu handleDropdown={handleDropdown} />}
            </NavItems>
            {/* <NavItems>
              <NavLinks to="/">About</NavLinks>
            </NavItems> */}
            <NavItems>
              {!enableAnalytics ? (
                <DarkTooltip title="Fill the load & line data !" arrow>
                  <NavLinks to="#" disable={true}>
                    Analytics
                  </NavLinks>
                </DarkTooltip>
              ) : (
                <NavLinks to="/analytics">Analytics</NavLinks>
              )}
            </NavItems>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
