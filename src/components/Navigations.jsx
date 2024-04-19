"use client";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBars } from "react-icons/fa";
import { navigations } from "../app/data/navigations.js";
import psp from "../../public/images/psp.png"
import Image from 'next/image.js';
import Link from 'next/link.js';

const Navigation = () => {
    return(
      <Navbar expand="lg" className="bg-stanley-gray-100 w-full p-0 flex backdrop-blur-sm shadow-xl" fixed="top">
        <Navbar.Brand className="inline-flex ml-4">
        <Image src={psp} className="w-8 md:w-12 my-1" alt="psp-logo"/>
          <Link
            className="pl-4 text-stanley-white-100 text-xl md:text-3xl font-bold flex items-center no-underline"
            href="/"
          >
            stanley lew
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-stanley-white-100">
          <FaBars className=" text-stanley-white-100 text-xl" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-end pr-4">
          <Nav className = "text-xl md:text-3xl flex justify-center text-center no-underline lg:ml-auto items-center">
          {navigations.map((navigation, index) => (
            <Nav.Link
              key={index}
              className="!text-stanley-white-100 !font-bold !pr-8"
              href={navigation.link}
            >
              {navigation.text}
            </Nav.Link>
          ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );  
  };
  export default Navigation;