
import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, NavLink, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import logo from '../logo.svg';



export function NavMenu() {
    const [collapsed, setCollapsed] = React.useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light container>
            <img src={logo} className="brand-logo" alt="react logo" />    
            <NavbarBrand to="/">Bootstrap explorer</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex" isOpen={!collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </ul>
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/jumbotron">Jumbotron</NavLink>
                </ul>
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/accordion">Accordion</NavLink>
                </ul>
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/alerts">Alerts</NavLink>
                </ul>
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/badges">Badges</NavLink>
                </ul>
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/breadcrumbs">Breadcrumbs</NavLink>
                </ul>   
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/buttons">Buttons</NavLink>
                </ul>
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/buttongroups">Button groups</NavLink>
                </ul>
                <ul className="navbar-nav flex-grow">
                    <NavLink tag={Link} className="text-dark" to="/cards">Cards</NavLink>
                </ul>
            </Collapse>
        </Navbar>
    )
}