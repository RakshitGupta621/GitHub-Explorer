import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);  //For the hamburger

  const toggle = () => setIsOpen(!isOpen);  //toggles the value of setIsOpen()

  return (
    //color is info, light, and expand to medium
    <Navbar color="info" light expand="md">

      <NavbarBrand className="text-white m-1">
          Explore GitHub
      </NavbarBrand>

{/*If email present in context user is present then return it and if not present return nothing, first time we use "?.email" to extract from context user but after that we can directly use it */}

      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar> {/*isOpen value is triggered by certain event as per its current state */}

{/*If context is having a user then display logout else display SignUp and SignIn */}

        <Nav className="ml-auto" navbar>
          {context.user ? (

            <NavItem>
              <NavLink onClick = {() => {context.setUser(null)}} className="text-white">
                Logout
              </NavLink>
            </NavItem>

          ) : (
            <>
              <NavItem className="ml-1">
                <NavLink tag={Link} to="/signup" className="text-white" >
                  Signup
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  Signin
                </NavLink>
              </NavItem>

            </>
          )}
          
        </Nav>
        
      </Collapse>

    </Navbar>
  );
};

export default Header;
