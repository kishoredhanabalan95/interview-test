import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import '../Home.css';

const SideBar = ({ isOpen, toggle }) => (
    <div className={`sidebar ${isOpen ? 'is-open' : ''}`}>
        <div className="sidebar-header">
            <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                &times;
            </span>
            <h3>Sidebar</h3>
        </div>
        <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3 navbar-expand-lg navbar-light bg-dark">
                <p>Heading</p>
                <NavItem>
                    <NavLink tag={Link} to={"/home"}>
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/about"}>
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/contact"}>
                        <FontAwesomeIcon icon={faCopy} className="mr-2" />
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    </div>
);

export default SideBar;
