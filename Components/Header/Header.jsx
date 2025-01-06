import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import {
  logo,
  logoDesktop,
  cartIcon,
  cartIconDesktop,
  userIcon,
  userIconDesktop,
  searchIcon,
} from "../../assets/icons/headerIcons";
import MobileHeader from "./MobileHeader";
// ============================ styles
const liStyles = "text-[#717171] text-sm lg:text-lg py-1  ";
const linkBoxStyle = "flex items-center gap-x-2.5 md:gap-x-[0.5em] justify-end";
const linkBoxItemStyle =
  "p-[0.25em] md:p-[0.5em] bg-[#E5F2E9] text-[#417F56] rounded md:rounded-md scale-[1.2] md:scale-100 relative duration-300";

function Header() {
  return (
    <>
      <div className=" sticky top-0 z-10 bg-white px-4 md:px-0 ">
        <header className="max-w-[1224px] mx-auto flex  items-center justify-between  h-[5rem] px-[1.25rem]] ">
          <div className=" md:hidden ">
            <MobileHeader />
          </div>
          <div className="logo">
            <span className="md:hidden">{logo}</span>
            <span className="hidden md:block ">{logoDesktop}</span>
          </div>
          <div className="items hidden md:block">
            <ul className="flex items-center md:gap-x-5 lg:gap-x-6">
              <li className={`${liStyles} hover:text-[#2f6341]`}>
                <NavLink to="/">صفحه اصلی</NavLink>
              </li>
              <li className={`${liStyles} hover:text-[#2f6341]`}>
                <NavLink to="/branch">شعبه</NavLink>
              </li>
              <li className={`${liStyles} hover:text-[#2f6341]`}>
                <NavLink to="/menu">منو</NavLink>
              </li>
              <li className={`${liStyles} hover:text-[#2f6341]`}>
                <NavLink to="/franchise">اعطای نمایندگی</NavLink>
              </li>
              <li className={`${liStyles} hover:text-[#2f6341]`}>
                <NavLink to="/about-us">درباره ما</NavLink>
              </li>
              <li className={`${liStyles} hover:text-[#2f6341]`}>
                <NavLink to="/contact-us">تماس با ما</NavLink>
              </li>
            </ul>
          </div>
          <div className={linkBoxStyle}>
            <button className={`${linkBoxItemStyle} hidden md:block`}>
              {searchIcon}
            </button>
            <Link className={linkBoxItemStyle}>
              <span className="md:hidden">{cartIcon}</span>
              <span className="hidden md:block">{cartIconDesktop}</span>
            </Link>
            <Link className={linkBoxItemStyle}>
              <span className="md:hidden">{userIcon}</span>
              <span className="hidden md:block">{userIconDesktop}</span>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
export default Header;
