import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>

                    <li>
                        <Link to='/about'>About Page</Link>
                    </li>

                    <li className="cta-button">
                        <Link to='/contact'>Contact Us</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
