"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import burger from '../../public/images/whitehamburgericon.svg';
import { FaBars } from "react-icons/fa";
import { navigations } from "../app/data/navigations.js";
const Navigation = () => {
    return(
      <Navbar expand = "lg" className="bg-stanleypw-gray-100 w-full" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-stanleypw-gray-200">
            <FaBars className=" text-stanleypw-gray-200 text-xl" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className = "space-x-4 text-3xl">
            {navigations.map((navigation, index) => (
              <Nav.Link
                key={index}
                className="text-stanleypw-gray-200 font-bold"
                href={navigation.link}
              >
                {navigation.text}
              </Nav.Link>
            ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );  
  };
  export default Navigation;