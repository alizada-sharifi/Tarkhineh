import topFrame from "../../assets/images/top-frame.png";
import LogoMobile from "../../assets/images/logo-mobile-menu.png";
import {
  menuIcon,
  closeIcon,
  homeIcon,
  menuBoardIcon,
  hashtagIcon,
  profile2userIcon,
  callingIcon,
} from "../../assets/icons/mobileMenuIcons";
import { useState } from "react";
import { Link } from "react-router-dom";

const bgMenu =
  "absolute top-0 left-0 right-0 h-screen z-10 bg-black bg-opacity-60 backdrop-blur-sm";
const mobileMenu =
  "absolute top-0 right-0 z-10 w-[12rem]  sm:w-[16em] duration-700";
const closeIconStyle =
  "absolute top-[18px] right-[9.5rem]  sm:right-[13.5em] text-white";
const logoMobileStyle = "absolute right-4 top-6 sm:top-8";
const ulStyle =
  "text-right flex flex-col   gap-y-2 min-h-[calc(100vh_-_70px)] sm:min-h-[calc(100vh_-_94px)] bg-white w-[12em] sm:w-[16em] px-4 py-2";
const liStyle =
  "flex items-center gap-x-2  text-[#353535] text-xs sm:text-sm border-b border-[#CBCBCB] pb-2";

function MobileHeader() {
  const open = true;
  const [menu, setMenu] = useState(open);

  const openMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div onClick={openMenu}>{menuIcon}</div>
      <div onClick={openMenu} className={menu ? "hidden" : bgMenu}></div>
      <div
        className={
          menu
            ? `${mobileMenu} translate-x-full`
            : `${mobileMenu} translate-x-0`
        }
      >
        <img src={topFrame} alt="frame" />
        <button onClick={openMenu} className={closeIconStyle}>
          {closeIcon}
        </button>
        <img src={LogoMobile} alt="logo" className={logoMobileStyle} />

        <div>
          <ul className={ulStyle}>
            <Link to="/">
              <li className={liStyle}>
                <span>{homeIcon}</span>
                <span>صفحه اصلی</span>
              </li>
            </Link>
            <Link to="/">
              <li className={liStyle}>
                <span>{homeIcon}</span>
                <span>شعبه</span>
              </li>
            </Link>
            <Link to="/menu">
              <li className={liStyle}>
                <span>{menuBoardIcon}</span>
                <span>منو</span>
              </li>
            </Link>
            <Link to="/franchise">
              <li className={liStyle}>
                <span>{hashtagIcon}</span>
                <span>اعطای نمایندگی</span>
              </li>
            </Link>
            <Link to="/about-us">
              <li className={liStyle}>
                <span>{profile2userIcon}</span>
                <span>درباره ما</span>
              </li>
            </Link>
            <Link to="/contact-us">
              <li className={liStyle}>
                <span>{callingIcon}</span>
                <span>تماس با ما</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
export default MobileHeader;
