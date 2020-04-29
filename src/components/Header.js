import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
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
{/*                        {
                            navs.map((route) => {
                                return <NavItem key={route.path}>
                                    <NavLink>
                                        <Link to={route.path}>
                                            {route.title}
                                        </Link>
                                    </NavLink>
                                </NavItem>
                            })
                        }*/}
                        <NavItem>
                            <NavLink>
                                <Link to="/">
                                    Anasayfa
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/hakkinda">
                                    Hakkimizda
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/tur/golden-retriever">
                                    Goldens
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/tur/golden-retriever">
                                    Favoriler
                                </Link>
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;