import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ATLogo from '../assets/AT-transparent.png'


function Navbar(props) {
    const [click, setClick] = useState(false);
    const navRef = useRef()

    useEffect(() => {
        props.navRefSetter(navRef)
        window.addEventListener("scroll", function () {
            navRef.current.style.backgroundColor = "black"
            navRef.current.style.transition = "background-color 400ms linear"
            navRef.current.style.backgroundImage = "linear-gradient(235deg, rgba(0, 0, 0, 0) 0%, rgba(65, 65, 65, 1) 90%)"
            if (this.scrollY == 0) {
                navRef.current.style.backgroundColor = "transparent"
                navRef.current.style.transition = "background-color 400ms linear"
                navRef.current.style.backgroundImage = "linear-gradient(235deg, rgba(0, 0, 0, 0) 0%, rgba(65, 65, 65, 0) 90%)"
            }
        })
    }, [])


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // document.onclick = function(e){
    //     //    document.getElementById("dropdown-content").style.display = 'none';
    //  };
    return (
        <div>
            <nav className="navbar" id="navbar" ref={navRef}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <div className="logo-container">
                            <img className="logo-img" src={ATLogo} alt="AT" />
                            <div className="logo-subtitle" style={{ color: "white", fontSize: "large", fontWeight: "normal" }}>Akarsh Tripathi</div>
                        </div>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" overflow="visible" stroke="#fff" strokeWidth="10" strokeLinecap="round">
                                <line x2="40" y2="40" />
                                <line x1="40" y2="40" />
                            </svg>

                            : <svg viewBox="0 0 100 80" width="40" height="40" fill="#fff">
                                <rect width="100" height="10"></rect>
                                <rect y="30" width="100" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                            </svg>}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {document.getElementsByClassName('active').length > 0 ?
                            <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMobileMenu}>HOME</Link></li>
                            :
                            <></>
                        }
                        {/* <li className="nav-item"><Link to="/about" className="nav-links" onClick={closeMobileMenu}>ABOUT</Link></li> */}
                        <li className="nav-item"><Link to="/background" className="nav-links" onClick={closeMobileMenu}>Background</Link></li>
                        <li className="nav-item"><Link to="/skills" className="nav-links" onClick={closeMobileMenu}>SKILL SET</Link></li>
                        <li className="nav-item">
                            <Link to="/work" className="nav-links" onClick={closeMobileMenu}>MY WORK</Link>
                            {/* <ul style={{ listStyle: "none", fontSize: "medium", marginLeft: "20px" }}>
                                <li>Web Dev Projects</li>
                                <li>ML Projects</li>
                            </ul> */}
                        </li>
                        {/* <li className="nav-item"><Link to="/contact" className="nav-links" onClick={closeMobileMenu}>CONTACT</Link></li> */}
                        <li className="nav-item"><Link to="/contact" className="nav-links" onClick={closeMobileMenu}>CONTACT</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
