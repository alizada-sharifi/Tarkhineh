import Header from "../Components/Header/Header";
import AboutBanner from "../assets/images/about-us-banner.png";
import { containerStyle } from "./Franchise";
import { pStyle } from "../Components/Banner";
import aboutImg from "../assets/images/about-us.jpg";
import {
  userIcon,
  userDesktopIcon,
  lineChartDesktopIcon,
  lineChartIcon,
  homeWifiDesktopIcon,
  homeWifiIcon,
  menuBoardDesktopIcon,
  menuBoardIcon,
} from "../assets/icons/introductionIcons";
import Footer from "../Components/footer/Footer";
const item =
  " flex flex-col items-center   sm:text-xs md:text-base text-center  justify-between gap-y-0.5 text-[9.5px] md:!text-base";
function AboutUs() {
  return (
    <>
      <Header />
      <div
        className={containerStyle}
        style={{ "--image-url": `url(${AboutBanner})` }}
      >
        <p className={pStyle}>همین الان به خانواده بزرگ ترخینه بپیوندید!</p>
      </div>
      <div className="container max-w-[1224px] mx-auto  pt-10">
        <h2 className="text-[#353535] px-5  pb-1  font-bold md:text-xl lg:text-2xl xl:text-3xl lg:pb-6">
          درباره ما
        </h2>
        <div className="text-[#717171] px-5 content text-[11px] leading-[17.5px] text-justify mb-4 min-h-[calc(100vh_-_520px)] md:text-base md:leading-[26px] lg:min-h-[calc(100vh_-_380px)] xl:text-lg xl:leading-8">
          <div
            style={{ "--image-url": `url(${aboutImg})` }}
            className="bg-[image:var(--image-url)] bg-cover bg-center float-left w-[152px] h-[120px] rounded mr-4 md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[492px] lg:mr-6"
          ></div>
          <div>
            <p>
              رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
              این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع
              در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها
              اولویت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش
              بوده تا در طی این زمان‌ها کیفیت غذاهای خود را در بهترین حالت نگه
              داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را
              ثابت نگه داشته است. ترخینه شعبات خودرا افتتاح کرده که بسیار شیک و
              مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز
              توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو
              طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و
              سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند. چشم انداز: در
              آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری
              جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه
              ایرانیان سالم و سلامت باشند.
            </p>
          </div>
        </div>
      </div>
      <div className=" container px-5 bg-[#ededed] md:mt-[6.5rem] ">
        <div className="max-w-[1224px] mx-auto pt-8 pb-4 md:pt-[5rem] md:pb-[3rem] flex justify-between">
          <div className={item}>
            <span className="md:hidden">{userIcon}</span>
            <span className=" hidden md:block ">{userDesktopIcon}</span>
            <p>پرسنلی مجرب و حرفه‌ای</p>
          </div>
          <div className={item}>
            <span className="md:hidden">{lineChartIcon}</span>
            <span className=" hidden md:block ">{lineChartDesktopIcon}</span>
            <p>کیفیت بالای غذاها</p>
          </div>
          <div className={item}>
            <span className="md:hidden">{homeWifiIcon}</span>
            <span className=" hidden md:block ">{homeWifiDesktopIcon}</span>
            <p>محیطی دلنشین و آرام</p>
          </div>
          <div className={item}>
            <span className="md:hidden">{menuBoardIcon}</span>
            <span className=" hidden md:block ">{menuBoardDesktopIcon}</span>
            <p>منوی متنوع</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AboutUs;
