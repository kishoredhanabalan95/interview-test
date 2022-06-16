import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import './Home.css';
import { Container } from "reactstrap";
import Topbar from './Content/TopBar';
import SideBar from './Sidebar/Sidebar';
import Table from './Table/Table';
import About from './About/About';
import Contact from './Contact/Contact';

const HomeComponent = (props) => {

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const location = useLocation();
    const getContainer = () => {
        const pathName = location.pathname;
        if (pathName === '/home') {
            return <Table />;
        } else if (pathName === '/about') {
            return <About />;
        }
        return <Contact />;
    }

    return (
        <div className="Home wrapper">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Container
                fluid
                className={`content ${sidebarIsOpen ? 'is-open' : ''}`}
            >
                <Topbar toggleSidebar={toggleSidebar} />
                { getContainer() }
            </Container>
        </div>
    );
}

export default HomeComponent;