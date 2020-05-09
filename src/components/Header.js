import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import navs from "../navs";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                    {navs.map(nav => {
                                return (
                                    <NavItem>
                                        <NavLink>
                                        <Link to={nav.path}  component={nav.component}>{nav.title}</Link>
                                        </NavLink>
                                    </NavItem>
                                ) 
                    })}
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;