import React, { Component } from 'react'
import { Navbar,Nav, NavItem, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './nav.css'

class MainNavbar extends Component {

    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Image  src="../images/logo.png" responsive />
                    <Link to="/">WKNDSWAP</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} componentClass={ Link } href="/" to="/">
                            HOME
                        </NavItem>
                        <NavItem eventKey={2} componentClass={ Link } href="/how" to="/How?">
                            HOW WKNDSWAP WORKS?
                        </NavItem>
                        <NavItem eventKey={3} componentClass={ Link } href="/destinations" to="/destinations">
                            Destinations
                        </NavItem>
                        <NavItem eventKey={4} componentClass={ Link } href="/" to="/about">
                            ABOUT US
                        </NavItem>
                        <NavItem eventKey={4} componentClass={ Link } href="/" to="/subcribe">
                            SUBSCRIBE
                        </NavItem>
                        
                        <NavItem eventKey={5} componentClass={ Link } href="/login" to="/login">
                            Login
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
         )
    }
}

export default MainNavbar