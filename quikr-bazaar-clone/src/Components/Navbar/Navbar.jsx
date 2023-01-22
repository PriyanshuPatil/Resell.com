import Styles from "./Navbar.module.css";
import Logo from "../../Assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Search from "../SearchBar/Search";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GoDesktopDownload } from "react-icons/go";
import { MdLocalOffer } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import SideDrawer from "../SideDrawer/SideDrawer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.actions";

function Navbar() {
  const { isLoggedIn } = useSelector((store) => store.Auth);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={Styles.NavbarHolder}>
      {/* upper icons */}

      {/* navbar body */}
      <div className={Styles.mainNav}>
        <div className={Styles.upperNavbarIcons}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "50px",
              padding: "0px 10px",
            }}
          >
            <div>
              <NavLink
                to="bussinesses"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdOutlineBusinessCenter
                  style={{ color: "rgba(107, 105, 105, 0.904)" }}
                />
                <p>For Bussinesses</p>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="download"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GoDesktopDownload
                  style={{
                    color: "rgba(107, 105, 105, 0.904)",
                    marginRight: "4px",
                  }}
                />
                <p>Download The App</p>
              </NavLink>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <div>
              <NavLink
                to="/deal"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdLocalOffer
                  style={{
                    color: "rgba(107, 105, 105, 0.904)",
                    marginRight: "4px",
                  }}
                />
                <p>Deals</p>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/visit"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaStoreAlt
                  style={{
                    color: "rgba(107, 105, 105, 0.904)",
                    marginRight: "4px",
                  }}
                />
                <p>Visit our store</p>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/chat"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "7px",
                }}
              >
                <FaStoreAlt
                  style={{
                    color: "rgba(107, 105, 105, 0.904)",
                    marginRight: "4px",
                  }}
                />
                <p>Chat</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={Styles.Navbar}>
          {/* logo and hamburger */}
          <div className={Styles.logoBox}>
            <h1 className={Styles.hamburger}>
              <SideDrawer />
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
              alignItems: "center",
              // marginRight: "9px"
            }}
          >
            <div>
              <h3 className={Styles.login_icon}>
                <FaRegUserCircle
                  style={{ fontSize: "23px", fontWeight: "100" }}
                />
                <NavLink to="/login">
                  <h5 onClick={isLoggedIn && logoutHandler}>
                    {isLoggedIn ? "Logout" : "Login"}
                  </h5>
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

      {/* tabs */}
      <div className={Styles.mega_menu_container}>
        <div className={Styles.mega_menu}>
          <div className={Styles.content}>
            <ul className={Styles.links}>
              {/* mobiles */}
              <li>
                {/* mobiles-tab */}
                <div>
                  <NavLink to="/mobiles" className={Styles.navLink_tabs}>
                    MOBILES
                    <AiOutlineDown />
                  </NavLink>
                </div>
                <div className={Styles.subtabs}>
                  {/* Mobile Phones */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Mobile Phones</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/used-mobiles"
                          className={Styles.sublink__link}
                        >
                          Used Mobiles
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Top Models(Used)</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/used-iphones-7"
                          className={Styles.sublink__link}
                        >
                          Used iphones 7
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/used-iphones-4"
                          className={Styles.sublink__link}
                        >
                          Used iphones 4
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/used-redmi"
                          className={Styles.sublink__link}
                        >
                          Used Redmi Note 4
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Top Brandes(Used/new) */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Top Brandes(Used/new)</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/samsung-mobiles"
                          className={Styles.sublink__link}
                        >
                          Samsung Mobiles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/iphones" className={Styles.sublink__link}>
                          Iphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/mi-mobiles"
                          className={Styles.sublink__link}
                        >
                          Mi Mobiles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/motorola-phones"
                          className={Styles.sublink__link}
                        >
                          Motorola Phones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/lg-phones"
                          className={Styles.sublink__link}
                        >
                          LG Phones
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>shop by choice</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/4g-ready"
                          className={Styles.sublink__link}
                        >
                          4G Ready
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/selfie-phones"
                          className={Styles.sublink__link}
                        >
                          Selfie Phones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/greate-battery-life"
                          className={Styles.sublink__link}
                        >
                          Greate Battery Life
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/high-ram"
                          className={Styles.sublink__link}
                        >
                          High RAM
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Tablets */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Tablets</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/android-tables"
                          className={Styles.sublink__link}
                        >
                          Android Tablets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/4g-tablest"
                          className={Styles.sublink__link}
                        >
                          4G Tablest
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/apple-tablests"
                          className={Styles.sublink__link}
                        >
                          Apple Tablests
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Wearable Devices</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/smart-bands"
                          className={Styles.sublink__link}
                        >
                          Smart Bands
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/smart-watches"
                          className={Styles.sublink__link}
                        >
                          Smart Watches
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Accessories */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Mobile Accessories</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/bluetooth-headset"
                          className={Styles.sublink__link}
                        >
                          Bluetooth/Headset
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/earphones"
                          className={Styles.sublink__link}
                        >
                          Earphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/memory-cards"
                          className={Styles.sublink__link}
                        >
                          Memory Cards
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Shop By Buget</header>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/" className={Styles.sublink__link}>
                          Below?6000
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className={Styles.sublink__link}>
                          ?6001-10000
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* FURNITURE */}
              <li>
                {/* FURNITURE-TAB */}
                <div>
                  <NavLink
                    to="/furniture-decor"
                    className={Styles.navLink_tabs}
                  >
                    FURNITURE & DECOR
                    <AiOutlineDown />
                  </NavLink>
                </div>
                <div className={Styles.subtabs}>
                  {/* All Funitures */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>All Furnitures</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/used-furnitures"
                          className={Styles.sublink__link}
                        >
                          Used Furnitures
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/refurbishued-furnitures"
                          className={Styles.sublink__link}
                        >
                          Refurbishued Furnitures
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/brand-new-furnitures"
                          className={Styles.sublink__link}
                        >
                          Brand New Furnitures
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/unboxed-furnitures"
                          className={Styles.sublink__link}
                        >
                          Unboxed Furnitures
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Bed Room</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/bead-seats"
                          className={Styles.sublink__link}
                        >
                          Bet Seats
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/mattresses"
                          className={Styles.sublink__link}
                        >
                          Mattresses
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/bedside-tables"
                          className={Styles.sublink__link}
                        >
                          Bedside Tables
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/dressing Tables"
                          className={Styles.sublink__link}
                        >
                          Dressing Tables
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/wardrobes-showcases"
                          className={Styles.sublink__link}
                        >
                          Wardrobes & Showcases
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/almirahs"
                          className={Styles.sublink__link}
                        >
                          Almirahs
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Living room */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Living Room</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/sofa-sets"
                          className={Styles.sublink__link}
                        >
                          Sofa Sets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/diwans" className={Styles.sublink__link}>
                          Diwans
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/tv-units"
                          className={Styles.sublink__link}
                        >
                          TV Units
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sofa-cum-bed"
                          className={Styles.sublink__link}
                        >
                          Sofa Cum Bed
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/recliners"
                          className={Styles.sublink__link}
                        >
                          Recliners
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Shoe-racks"
                          className={Styles.sublink__link}
                        >
                          Shoe Racks
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/center-tables"
                          className={Styles.sublink__link}
                        >
                          Center Tables
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/bean-bags"
                          className={Styles.sublink__link}
                        >
                          Bean Bags
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/folding-chairs"
                          className={Styles.sublink__link}
                        >
                          Folding Chairs
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/plastic-chairs"
                          className={Styles.sublink__link}
                        >
                          Plastic Chairs
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/benches" className={Styles.sublink__link}>
                          Benches
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/jhula" className={Styles.sublink__link}>
                          Jhula
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/swings" className={Styles.sublink__link}>
                          Swings
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Tablets */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Tablets</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/android-tables"
                          className={Styles.sublink__link}
                        >
                          Android Tablets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/4g-tablest"
                          className={Styles.sublink__link}
                        >
                          4G Tablest
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/apple-tablests"
                          className={Styles.sublink__link}
                        >
                          Apple Tablests
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Wearable Devices</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/smart-bands"
                          className={Styles.sublink__link}
                        >
                          Smart Bands
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/smart-watches"
                          className={Styles.sublink__link}
                        >
                          Smart Watches
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Accessories */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Mobile Accessories</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/bluetooth-headset"
                          className={Styles.sublink__link}
                        >
                          Bluetooth/Headset
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/earphones"
                          className={Styles.sublink__link}
                        >
                          Earphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/memory-cards"
                          className={Styles.sublink__link}
                        >
                          Memory Cards
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Shop By Buget</header>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/" className={Styles.sublink__link}>
                          Below?6000
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className={Styles.sublink__link}>
                          ?6001-10000
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* ELECTRONICS*/}
              <li>
                <div>
                  <NavLink to="/electronic" className={Styles.navLink_tabs}>
                    ELECTRONICS
                    <AiOutlineDown />
                  </NavLink>
                </div>
                <div className={Styles.subtabs}>
                  {/* televisions */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Televisions</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/led-full-hd"
                          className={Styles.sublink__link}
                        >
                          LED-Full HD
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/hd-ready"
                          className={Styles.sublink__link}
                        >
                          HD Ready
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/led-ultra-hd(4k)"
                          className={Styles.sublink__link}
                        >
                          LED-Ultra HD(4k)
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/omled" className={Styles.sublink__link}>
                          OMLED
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/curved-tv"
                          className={Styles.sublink__link}
                        >
                          Curved TV
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>TVs By Screen Size</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/below-32-inch"
                          className={Styles.sublink__link}
                        >
                          Below 32 Inch
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/32-inch-to-39-inch"
                          className={Styles.sublink__link}
                        >
                          32 Inch to 39 Inch
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/40-inch-to-47-inch"
                          className={Styles.sublink__link}
                        >
                          40 Inch To 47 Inch
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/48-inch-to-54-inch"
                          className={Styles.sublink__link}
                        >
                          48 Inch To 54 Inch
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/55-inch-above"
                          className={Styles.sublink__link}
                        >
                          55 Inch & Above
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Laptops & Desktop */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Laptops & Desktop</header>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/laptops" className={Styles.sublink__link}>
                          Laptops
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/desktops"
                          className={Styles.sublink__link}
                        >
                          Desktops
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/2-in-1-laptops"
                          className={Styles.sublink__link}
                        >
                          2-In-1-Laptops
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Playstation Consoles</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/sony-ps4"
                          className={Styles.sublink__link}
                        >
                          Sony PS4
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sony-ps3"
                          className={Styles.sublink__link}
                        >
                          Sony PS3
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/xbox" className={Styles.sublink__link}>
                          XBox
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sony-playstation"
                          className={Styles.sublink__link}
                        >
                          Sony Playstation
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Cameras */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Cameras</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/dslr-cameras"
                          className={Styles.sublink__link}
                        >
                          DSLR Cameras
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/slr-camera"
                          className={Styles.sublink__link}
                        >
                          SLR Camera
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/cameras-accessories"
                          className={Styles.sublink__link}
                        >
                          Camera Accessories
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/camera-lenses"
                          className={Styles.sublink__link}
                        >
                          Camera Lenses
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/digital-cameras"
                          className={Styles.sublink__link}
                        >
                          Digital Cameras
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Computer Accessories</header>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/routers" className={Styles.sublink__link}>
                          Routers
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/cpu" className={Styles.sublink__link}>
                          CPU
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/ram" className={Styles.sublink__link}>
                          RAM
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/motherboard"
                          className={Styles.sublink__link}
                        >
                          Motherboard
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/graphics-card"
                          className={Styles.sublink__link}
                        >
                          Graphics Card
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Audio & Video */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Audio & Video</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/home-theater"
                          className={Styles.sublink__link}
                        >
                          Home Theater
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/dvd-blu-ray-players"
                          className={Styles.sublink__link}
                        >
                          DVD Blu-Ray Players
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/projectors"
                          className={Styles.sublink__link}
                        >
                          Projectors
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Storage</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/external-hard-drives"
                          className={Styles.sublink__link}
                        >
                          External Hard Drives
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/pen-drives"
                          className={Styles.sublink__link}
                        >
                          Pen Drives
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Printers & Inks */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Printers & Inks</header>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/scanner" className={Styles.sublink__link}>
                          Scanner
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/printer" className={Styles.sublink__link}>
                          printer
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Storage</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/external-hard-drives"
                          className={Styles.sublink__link}
                        >
                          External Hard Drives
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/pen-drives"
                          className={Styles.sublink__link}
                        >
                          Pen Drives
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Home appliances */}
              <li>
                <div>
                  <NavLink
                    to="/home-appliances"
                    className={Styles.navLink_tabs}
                  >
                    Home Appliances
                    <AiOutlineDown />
                  </NavLink>
                </div>
                <div className={Styles.subtabs}>
                  {/* Refrigeratios */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Refrigerators</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/single-door"
                          className={Styles.sublink__link}
                        >
                          Single Door
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/double-door"
                          className={Styles.sublink__link}
                        >
                          Double Door
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/multi-door"
                          className={Styles.sublink__link}
                        >
                          Multi Door
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/stabilizers"
                          className={Styles.sublink__link}
                        >
                          stabilizers
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Washing Machines</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/semi-automatic"
                          className={Styles.sublink__link}
                        >
                          Semi-Automatic
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/fully-automatic"
                          className={Styles.sublink__link}
                        >
                          Fully-Automatic
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/top-load"
                          className={Styles.sublink__link}
                        >
                          Top Load
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Top Brandes(Used/new) */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Top Brandes(Used/new)</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/samsung-mobiles"
                          className={Styles.sublink__link}
                        >
                          Samsung Mobiles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/iphones" className={Styles.sublink__link}>
                          Iphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/mi-mobiles"
                          className={Styles.sublink__link}
                        >
                          Mi Mobiles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/motorola-phones"
                          className={Styles.sublink__link}
                        >
                          Motorola Phones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/lg-phones"
                          className={Styles.sublink__link}
                        >
                          LG Phones
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>shop by choice</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/4g-ready"
                          className={Styles.sublink__link}
                        >
                          4G Ready
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/selfie-phones"
                          className={Styles.sublink__link}
                        >
                          Selfie Phones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/greate-battery-life"
                          className={Styles.sublink__link}
                        >
                          Greate Battery Life
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/high-ram"
                          className={Styles.sublink__link}
                        >
                          High RAM
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Tablets */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Tablets</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/android-tables"
                          className={Styles.sublink__link}
                        >
                          Android Tablets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/4g-tablest"
                          className={Styles.sublink__link}
                        >
                          4G Tablest
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/apple-tablests"
                          className={Styles.sublink__link}
                        >
                          Apple Tablests
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Wearable Devices</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/smart-bands"
                          className={Styles.sublink__link}
                        >
                          Smart Bands
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/smart-watches"
                          className={Styles.sublink__link}
                        >
                          Smart Watches
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Accessories */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Mobile Accessories</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/bluetooth-headset"
                          className={Styles.sublink__link}
                        >
                          Bluetooth/Headset
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/earphones"
                          className={Styles.sublink__link}
                        >
                          Earphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/memory-cards"
                          className={Styles.sublink__link}
                        >
                          Memory Cards
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Shop By Buget</header>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/" className={Styles.sublink__link}>
                          Below?6000
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className={Styles.sublink__link}>
                          ?6001-10000
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Kids & Toys */}
              <li>
                <div>
                  <NavLink to="/kids-toys" className={Styles.navLink_tabs}>
                    KIDS & TOYS
                    <AiOutlineDown />
                  </NavLink>
                </div>
                <div className={Styles.subtabs}>
                  {/* Refrigeratios */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Baby & Infats</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/params-walers"
                          className={Styles.sublink__link}
                        >
                          Prams Walkers And Strollers
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/cradle-cots"
                          className={Styles.sublink__link}
                        >
                          Cradle Cots
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/chairs" className={Styles.sublink__link}>
                          Chairs
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/baby-carries"
                          className={Styles.sublink__link}
                        >
                          Baby Carries
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Washing Machines</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/semi-automatic"
                          className={Styles.sublink__link}
                        >
                          Semi-Automatic
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/fully-automatic"
                          className={Styles.sublink__link}
                        >
                          Fully-Automatic
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/top-load"
                          className={Styles.sublink__link}
                        >
                          Top Load
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Top Brandes(Used/new) */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Top Brandes(Used/new)</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/samsung-mobiles"
                          className={Styles.sublink__link}
                        >
                          Samsung Mobiles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/iphones" className={Styles.sublink__link}>
                          Iphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/mi-mobiles"
                          className={Styles.sublink__link}
                        >
                          Mi Mobiles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/motorola-phones"
                          className={Styles.sublink__link}
                        >
                          Motorola Phones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/lg-phones"
                          className={Styles.sublink__link}
                        >
                          LG Phones
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>shop by choice</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/4g-ready"
                          className={Styles.sublink__link}
                        >
                          4G Ready
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/selfie-phones"
                          className={Styles.sublink__link}
                        >
                          Selfie Phones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/greate-battery-life"
                          className={Styles.sublink__link}
                        >
                          Greate Battery Life
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/high-ram"
                          className={Styles.sublink__link}
                        >
                          High RAM
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Tablets */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Tablets</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/android-tables"
                          className={Styles.sublink__link}
                        >
                          Android Tablets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/4g-tablest"
                          className={Styles.sublink__link}
                        >
                          4G Tablest
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/apple-tablests"
                          className={Styles.sublink__link}
                        >
                          Apple Tablests
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Wearable Devices</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/smart-bands"
                          className={Styles.sublink__link}
                        >
                          Smart Bands
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/smart-watches"
                          className={Styles.sublink__link}
                        >
                          Smart Watches
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Accessories */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Mobile Accessories</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/bluetooth-headset"
                          className={Styles.sublink__link}
                        >
                          Bluetooth/Headset
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/earphones"
                          className={Styles.sublink__link}
                        >
                          Earphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/memory-cards"
                          className={Styles.sublink__link}
                        >
                          Memory Cards
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Shop By Buget</header>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/" className={Styles.sublink__link}>
                          Below?6000
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className={Styles.sublink__link}>
                          ?6001-10000
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* sports,hobbies,fashion */}
              <li>
                <div>
                  <NavLink
                    to="/sports-hobbies-fashion"
                    className={Styles.navLink_tabs}
                  >
                    SPORTS,HOBBIES & FASHION
                    <AiOutlineDown />
                  </NavLink>
                </div>
                <div className={Styles.subtabs}>
                  {/* Refrigeratios */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Baby & Infats</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/params-walers"
                          className={Styles.sublink__link}
                        >
                          Prams Walkers And Strollers
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/cradle-cots"
                          className={Styles.sublink__link}
                        >
                          Cradle Cots
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/chairs" className={Styles.sublink__link}>
                          Chairs
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/baby-carries"
                          className={Styles.sublink__link}
                        >
                          Baby Carries
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Washing Machines</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/semi-automatic"
                          className={Styles.sublink__link}
                        >
                          Semi-Automatic
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/fully-automatic"
                          className={Styles.sublink__link}
                        >
                          Fully-Automatic
                        </NavLink>
                      </li>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/top-load"
                          className={Styles.sublink__link}
                        >
                          Top Load
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Top Brandes(Used/new) */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Top Brandes(Used/new)</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/samsung-mobiles"
                          className={Styles.sublink__link}
                        >
                          Samsung Mobiles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/iphones" className={Styles.sublink__link}>
                          Iphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/mi-mobiles"
                          className={Styles.sublink__link}
                        >
                          Mi Mobiles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/motorola-phones"
                          className={Styles.sublink__link}
                        >
                          Motorola Phones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/lg-phones"
                          className={Styles.sublink__link}
                        >
                          LG Phones
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>shop by choice</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/4g-ready"
                          className={Styles.sublink__link}
                        >
                          4G Ready
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/selfie-phones"
                          className={Styles.sublink__link}
                        >
                          Selfie Phones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/greate-battery-life"
                          className={Styles.sublink__link}
                        >
                          Greate Battery Life
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/high-ram"
                          className={Styles.sublink__link}
                        >
                          High RAM
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Tablets */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Tablets</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/android-tables"
                          className={Styles.sublink__link}
                        >
                          Android Tablets
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/4g-tablest"
                          className={Styles.sublink__link}
                        >
                          4G Tablest
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/apple-tablests"
                          className={Styles.sublink__link}
                        >
                          Apple Tablests
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Wearable Devices</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/smart-bands"
                          className={Styles.sublink__link}
                        >
                          Smart Bands
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/smart-watches"
                          className={Styles.sublink__link}
                        >
                          Smart Watches
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile Accessories */}
                  <div className={Styles.tabs_row}>
                    <ul>
                      <header>Mobile Accessories</header>
                      <li className={Styles.sublink__list}>
                        <NavLink
                          to="/bluetooth-headset"
                          className={Styles.sublink__link}
                        >
                          Bluetooth/Headset
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/earphones"
                          className={Styles.sublink__link}
                        >
                          Earphones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/memory-cards"
                          className={Styles.sublink__link}
                        >
                          Memory Cards
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <header>Shop By Buget</header>
                      <li className={Styles.sublink__list}>
                        <NavLink to="/" className={Styles.sublink__link}>
                          Below?6000
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className={Styles.sublink__link}>
                          ?6001-10000
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
