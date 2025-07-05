import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import github from "../assets/img/25231.png";

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1>Kritika Dhiman</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#achievements" className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('achievements')}>Achievements</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1tGYnZ6ciJCeCoNmkArZ6a68b83CE5LSl/view?usp=sharing" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/kritika-dhiman-a23104290/"><img src={navIcon1} alt="" /></a>
                
              </div>
              <div className="social-icon">
                <a href="https://github.com/Kritika-Dhiman"><img src={github} alt="" /></a>
                
              </div>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
