"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import burger from '../../public/images/whitehamburgericon.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../app/styles/navbar.module.css';

const Navigation = () => {
    return(
      <Navbar expand = "lg" className="bg-dark-gray pt-4">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <img src={burger.src}/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className = "flex justify-center space-x-16 text-4xl">
              <Nav.Link href="#home" className={`${styles.homecolor} ${styles.hoverBlue800} drop-shadow-4xl`}>HOME</Nav.Link>
              <Nav.Link href="#about" className={ `${styles.offwhite} ${styles.hoverGray500} drop-shadow-4xl`}>ABOUT</Nav.Link>
              <Nav.Link href="#skills" className={ `${styles.offwhite} ${styles.hoverGray500} drop-shadow-4xl`}>SKILLS</Nav.Link>
              <Nav.Link href="#projects" className={ `${styles.offwhite} ${styles.hoverGray500} drop-shadow-4xl`}>PROJECTS</Nav.Link>
              <Nav.Link href="#resume" className={ `${styles.offwhite} ${styles.hoverGray500} drop-shadow-4xl`}>RESUME</Nav.Link>
              <Nav.Link href="#contact" className={ `${styles.offwhite} ${styles.hoverGray500} drop-shadow-4xl`}>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );  
  };
  export default Navigation;