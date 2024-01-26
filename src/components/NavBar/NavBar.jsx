import React, { useState } from 'react';
import './NavBar.css';
import logoHorizontal from "../../assets/images/Logo-Horizontal.png";
import bandeiraAmericana from "../../assets/images/flags/estados-unidos.png";
import { NavLink } from 'react-router-dom';

const TopContent = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <div className="header-container">
                <img id="logo" src={logoHorizontal} alt="Logo" style={{ opacity: 1 }} />
                <nav className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="nav-links">
                        <NavLink to="/">Página Inicial</NavLink>
                        <NavLink to="/sobre">Sobre</NavLink>
                        <NavLink to="/NossosRobos">Robôs</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default TopContent;
