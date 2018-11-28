import React, { Component } from 'react'
import { Navbar,Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'



class MainNavbar extends Component {

    render(){

        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">wkndswap</a>
                    </Navbar.Brand>

                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            <a href="#Home">Home</a>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <a href="#About">How it works?</a>
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            <a href="#Destinations">Destinations</a>
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            <a href="#Help">Help!</a>
                        </NavItem>
                        <NavDropdown eventKey={5} title="Dropdown" id ="basic-nav-dropdown">
                        <MenuItem eventKey={5.1}>Home</MenuItem>
                        <MenuItem eventKey={5.2}>About</MenuItem>
                        <MenuItem eventKey={5.3}>Contact</MenuItem>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MainNavbar