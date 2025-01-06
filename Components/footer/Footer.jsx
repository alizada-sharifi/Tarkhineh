import { Link } from "react-router-dom";
import footerImg from "../../assets/images/footer.jpg";
import {
  telegramIcon,
  instagramIcon,
  twitterIcon,
  telegramDesktopIcon,
  instagramDesktopIcon,
  twitterDesktopIcon,
} from "../../assets/icons/footerIcons";
const footerStyle =
  "bg-[image:var(--image-url)] bg-cover bg-center md:w-full text-white";
const containerStyle =
  "container max-w-[1224px] mx-auto flex items-center md:items-start justify-start lg:justify-between gap-x-[5.063rem] py-[1.375rem] md:pt-[2.031rem] px-[1.25rem] h-[9.5rem] md:h-[19.938rem]";
const ulStyle =
  "flex flex-col gap-y-[0.5rem] md:gap-y-[1rem] pr-[0.5rem] md:pr-[1rem]";
const liStyle = "text-[10px] md:text-base md:font-medium md:text-[#EDEDED]";
const h4Style =
  "mb-[0.5rem] md:mb-[1rem] text-xs sm:text-sm font-medium md:text-xl md:font-bold";
const iconBoxStyle = "items-center gap-x-[0.5rem] mt-2 md:gap-x-[1rem]";
const inputBoxStyle = "flex flex-col gap-y-[0.75rem]";
const inputStyle =
  "h-[2.5rem] px-[1rem] bg-transparent text-[#F9F9F9] placeholder:text-[#F9F9F9] outline-none border border-[#717171] rounded";
const buttonStyle =
  "text-[#F9F9F9] font-medium w-[11.438rem] h-[2.5rem] border border-[#717171] rounded hover:bg-[#417f56]";
function Footer() {
  return (
    <footer
      style={{ "--image-url": `url(${footerImg})` }}
      className={footerStyle}
    >
      <div className={containerStyle}>
        <div>
          <h4 className={h4Style}>دسترسی آسان</h4>
          <ul className={ulStyle}>
            <Link to="/faq">
              <li className={liStyle}>پرسش های متداول</li>
            </Link>
            <Link to="/rules">
              <li className={liStyle}>قوانین ترخینه</li>
            </Link>
            <Link to="/privacy">
              <li className={liStyle}>حریم خصوصی</li>
            </Link>
          </ul>
          <div className={`${iconBoxStyle} flex md:hidden`}>
            <button>{twitterIcon}</button>
            <button>{instagramIcon}</button>
            <button>{telegramIcon}</button>
          </div>
          <div className={`${iconBoxStyle} md:flex hidden `}>
            <button>{twitterDesktopIcon}</button>
            <button>{instagramDesktopIcon}</button>
            <button>{telegramDesktopIcon}</button>
          </div>
        </div>
        <div>
          <h4 className={h4Style}>شعبه های ترخینه</h4>
          <ul className={ulStyle}>
            <Link>
              <li className={liStyle}>شعبه اکباتان</li>
            </Link>
            <Link>
              <li className={liStyle}>شعبه چالوس</li>
            </Link>
            <Link>
              <li className={liStyle}>شعبه اقدسیه</li>
            </Link>
            <Link>
              <li className={liStyle}>شعبه ونک</li>
            </Link>
          </ul>
        </div>
        <div className=" hidden lg:block ">
          <h4 className={h4Style}>پیام به ترخینه</h4>
          <div className="flex items-start gap-x-[1.7rem] pr-[1rem]">
            <div className={inputBoxStyle}>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className={inputStyle}
              />
              <input
                type="tel"
                dir="rtl"
                placeholder="شماره تماس"
                className={inputStyle}
              />
              <input
                type="email"
                placeholder="ادرس ایمیل (اختیاری)"
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col items-end gap-y-[1.5em] ">
              <textarea
                type="text"
                placeholder="پیام شما"
                className={`${inputStyle} w-[17.875em] h-[9em] !p-4 resize-none scroll-smooth`}
              />
              <button className={buttonStyle}>ارسال پیام</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
