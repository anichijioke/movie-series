import React from 'react';
import { Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {

  return (
    <>
        <Navbar collapseOnSelect expand="lg"  variant="dark" className="bg-color">
         <Navbar.Brand href="#home"><h1  style={{  color:"white", marginLeft:"100px", fontFamily: "Arial"}}>Movie Finder</h1></Navbar.Brand>
        </Navbar>
    </>
  );
};

export default NavBar;


