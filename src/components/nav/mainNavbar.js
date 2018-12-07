import React, { Component } from 'react'
import { Navbar,Nav, NavItem, Image } from 'react-bootstrap'
import './nav.css'

class MainNavbar extends Component {

    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Image  src="../images/logo.png" responsive />
                        {'wkndswap'}

                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="#">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            About
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Contact
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            Find us
                        </NavItem>
                        <NavItem eventKey={5} href="#">
                            Login
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
         )
    }
}

export default MainNavbar