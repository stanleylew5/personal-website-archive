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
      <Navbar expand="lg" className="bg-stanleypw-gray-100 w-full p-0 flex" fixed="top">
        <Navbar.Brand className="inline-flex ml-4">
        <Image src={psp} className="w-12 my-1" alt="psp-logo"/>
          <Link
            className="pl-4 text-stanleypw-gray-200 text-3xl font-bold flex items-center no-underline"
            href="/"
          >
            stanley lew
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-stanleypw-gray-200">
          <FaBars className=" text-stanleypw-gray-200 text-xl" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-end pr-4">
          <Nav className = "space-x-4 text-3xl">
          {navigations.map((navigation, index) => (
            <Nav.Link
              key={index}
              className="!text-stanleypw-gray-200 !font-bold"
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