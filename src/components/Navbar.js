import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink} from 'react-router-dom';

import '../style/Navbar.css';
export default function Navbar()
{
    const [language,setLanguage] = React.useState("English");
    const [menuOpen,setmenuOpen] = React.useState(false);

    // console.log(language);
    const handleChange = (value)=>{
        setLanguage((prevState)=>{
            if(prevState == "English")
                return "Bhutia";
            else    
                return "English";
        });
    }

    // sytle for active Navbar in JSX
    const navLinkStyles = ({ isActive })=>{
        return {
            borderBottom: isActive ? "2px solid red" : "none"
        }
    }

    function handleClick()
    {
        setmenuOpen(prevState=>{
            return !prevState;
        })
    }

    return (
        <div className="main-nav-div">
            <div className="logo-1-div">
                <img className="logo-1-img" src="./logo-1.jpeg" />
            </div>
            <div className="menu" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="menu-div">
                <ul className={menuOpen? "open" : ""}>
                    <li>
                        <NavLink to="/" style={navLinkStyles}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={navLinkStyles}> About </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" style={navLinkStyles}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallary" style={navLinkStyles}>
                             Gallary
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" style={navLinkStyles}>
                             Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/learning" style={navLinkStyles}>
                             E-Learning
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={`logo-2-div`}>
                <img className="logo-2-img" src="./logo-2.jpeg" />
                <select
                onChange={handleChange}
                >
                    <option value="English">English</option>
                    <option value="Bhutia">Bhutia</option>
                </select>
            </div>
        </div>
    );
}
