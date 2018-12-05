import React, { Component } from 'react'
import { Navbar,Nav, NavItem } from 'react-bootstrap'
import './nav.css'

class MainNavbar extends Component {

    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Login
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Signup
                        </NavItem>
                    </Nav>
                    
                    {/* <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav> */}
                </Navbar.Collapse>
        </Navbar>
         )
    }
}

export default MainNavbar