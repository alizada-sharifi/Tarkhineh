import introImg from "../assets/images/introduction.jpg";
import {
  arrowLeftIcon,
  userIcon,
  lineChartIcon,
  homeWifiIcon,
  menuBoardIcon,
  userDesktopIcon,
  lineChartDesktopIcon,
  homeWifiDesktopIcon,
  menuBoardDesktopIcon,
  arrowLeftDesktopIcon,
} from "../assets/icons/introductionIcons";
import { Link } from "react-router-dom";
// =======================styles
const bgStyle =
  " mt-12 bg-[image:var(--image-url)] bg-cover bg-center text-white py-5 px-5 h-[21.188em] md:h-[24.375em] md:py-12 md:flex md:items-center md:mt-14 lg:mt-16 xl:mt-20";
export const containerStyles =
  "max-w-[1224px] mx-auto md:flex md:items-start lg:items-center md:px-1 lg:pr-6 xl:gap-x-5 ";
const h3Style =
  "text-sm sm:text-base mb-2 md:text-xl md:font-bold md:mb-6 lg:text-2xl";
const descStyle =
  "text-[10px] sm:text-[11px] leading-5 text-justify mb-2 md:text-[15px] md:leading-6 lg:text-base lg:text-xl xl:mb-8 xl:font-light";
const buttonBoxStyle = "flex justify-end mb-3 sm:mb-5";
const buttonStyle =
  "flex items-center justify-center gap-x-2 border border-white rounded h-7 sm:h-8 w-[8.5em] sm:w-[9.5em] md:h-[2.5em] lg:w-[11.5em] hover:bg-[#417f56] hover:border-0";
const buttonSpanStyle = "text-xs md:text-sm lg:text-base";

function Introduction() {
  return (
    <>
      <div className={bgStyle} style={{ "--image-url": `url(${introImg})` }}>
        <div className={containerStyles}>
          <div className="md:flex-1">
            <h3 className={h3Style}>رستوران‌های زنجیره‌ای ترخینه</h3>
            <p className={descStyle}>
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            <Link to="/about-us">
              <div className={buttonBoxStyle}>
                <button className={buttonStyle}>
                  <span className={buttonSpanStyle}>اطلاعات بیشتر</span>
                  <span className="md:hidden">{arrowLeftIcon}</span>
                  <span className="hidden md:block">
                    {arrowLeftDesktopIcon}
                  </span>
                </button>
              </div>
            </Link>
          </div>
          <div className="md:flex-1 gap-y-8 flex flex-col ">
            <div className="flex justify-evenly">
              <div className="flex flex-col gap-y-2 items-center">
                <span className="md:hidden">{userIcon}</span>
                <span className="hidden md:block">{userDesktopIcon}</span>
                <h3>پرسنلی مجرب و حرفه‌ای</h3>
              </div>
              <div className="flex flex-col gap-y-2 items-center">
                <span className="md:hidden">{lineChartIcon}</span>
                <span className="hidden md:block">{lineChartDesktopIcon}</span>
                <h3>کیفیت بالای غذاها</h3>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="flex flex-col gap-y-2 items-center">
                <span className="md:hidden">{homeWifiIcon}</span>
                <span className="hidden md:block">{homeWifiDesktopIcon}</span>
                <h3>محیطی دلنشین و آرام</h3>
              </div>
              <div className="flex flex-col gap-y-2 items-center">
                <span className="md:hidden">{menuBoardIcon}</span>
                <span className="hidden md:block">{menuBoardDesktopIcon}</span>
                <h3>منوی متنوع</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Introduction;
