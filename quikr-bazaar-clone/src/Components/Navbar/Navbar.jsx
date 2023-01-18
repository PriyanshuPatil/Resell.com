import Styles from "./Navbar.module.css";
import Logo from "../../Assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Search from "../SearchBar/Search";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import {MdOutlineBusinessCenter} from 'react-icons/md';
import {GoDesktopDownload} from 'react-icons/go';
import {MdLocalOffer} from 'react-icons/md';
import {FaStoreAlt} from 'react-icons/fa';


function Navbar() {
  return (
    <div className={Styles.mainNav} >
    <div className={Styles.upperNavbarIcons}>
      <div style={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
       <div>
          <NavLink to='bussinesses' style={{textDecoration:'none',color:'black',display:'flex'}}>
            <MdOutlineBusinessCenter />
            <p>For Bussinesses</p>
          </NavLink>
       </div>
       <div>
          <NavLink to='download' style={{textDecoration:'none',color:'black',display:'flex'}}>
            <GoDesktopDownload />
            <p>Download The App</p>
          </NavLink>
       </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
       <div>
          <NavLink to='/deal' style={{textDecoration:'none',color:'black',display:'flex'}}>
            <MdLocalOffer />
            <p>Deals</p>
          </NavLink>
       </div>
       <div>
          <NavLink to='/visit' style={{textDecoration:'none',color:'black',display:'flex'}}>
            <FaStoreAlt />
            <p>Visit our store</p>
          </NavLink>
       </div>
       <div>
          <NavLink to='/chat' style={{textDecoration:'none',color:'black',display:'flex'}}>
            <FaStoreAlt />
            <p>Chat</p>
          </NavLink>
       </div>
      </div>
    </div>

      <div className={Styles.Navbar}>
        {/* logo and hamburger */}
        <div className={Styles.logoBox}>
          <h1 className={Styles.hamburger}>
            <RxHamburgerMenu style={{margin:'10px',padding:'0px',verticalAlign:'middle'}} />
          </h1>
          <NavLink to="/">
            <img src={Logo} className={Styles.logo} alt="logo" />
          </NavLink>
        </div>
        {/* search bar */}
        <div className={Styles.NavbarlargeScreen}>
          <Search />
        </div>

        <div
          style={{
            display: "flex",
            gap: "4px",
            justifyContent: "center",
            alignItems: "center"
            // marginRight: "9px"
          }}
        >
          <div>
            <h3>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? Styles.login : Styles.login
                }
              >
                <FaRegUserCircle
                  style={{ fontSize: "23px", fontWeight: "100" }}
                />
                <div className={Styles.loginText}>
                  <p>Login</p>
                  <p>/</p>
                  <p>Register</p>
                </div>
              </NavLink>
            </h3>
          </div>
          <NavLink to="/postad">
            <button className={Styles.postAd}>Post Free Ad</button>
          </NavLink>
        </div>
      </div>
      <div className={Styles.NavbarsmallScreen}>
        <Search />
      </div>
    </div>
  );
}

export default Navbar;

