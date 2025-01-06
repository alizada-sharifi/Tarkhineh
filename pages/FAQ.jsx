import Header from "../Components/Header/Header";
import { containerStyle } from "./Franchise";
import { pStyle } from "../Components/Banner";
import faqBanner from "../assets/images/faq-banner.jpg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import FAQItem from "../Components/FaqItem";
import Footer from "../Components/footer/Footer";
export const tabStyle = "bg-[#ededed] pt-4 ";
const faqItemsInfo = [
  {
    id: 1,
    desktopTitle: "ترخینه چه امکانات متفاوتی دارد",
    mobileTitle: "امکانات ترخینه ",
    description:
      "وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل آن را به حداقل ممکن می رسونه.",
  },
  {
    id: 2,
    desktopTitle: "چطور می تونم در ترخینه حساب کاربری ایجاد کنم؟",
    mobileTitle: "حساب کاربری در ترخینه",
    description:
      "خیلی ساده، پس از انتخاب غذای مورد علاقه تان از منوی رستوران، هنگام ثبت سفارش با وارد کردن شماره تلفن همراه یک پیامک حاوی کد تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل می شه. یا می تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید.",
  },
  {
    id: 3,
    desktopTitle: "سابقه و لیست خریدهای قبلی ام رو کجا ببینم؟",
    mobileTitle: "سابقه خرید",
    description:
      "با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام خریدهای شما نمایش داده می شه.",
  },
  {
    id: 4,
    desktopTitle: "چه راه هایی برای پرداخت دارم؟",
    mobileTitle: "راه‌های پرداخت",
    description:
      "با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام خریدهای شما نمایش داده می شه.",
  },
  {
    id: 5,
    desktopTitle:
      "آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟",
    mobileTitle: "تفاوت قیمت در منو شعبات و منو وبسایت",
    description:
      "بله. قیمت منوی وبسایت ترخینه دقیقا مطابق با قیمت منوی شعب رستوران  است و در صورت تغییر قیمت از طرف رستوران این تغییر در وبسایت ترخینه بلافاصله قابل مشاهده است.",
  },
  {
    id: 6,
    desktopTitle: "چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟",
    mobileTitle: "هدیه و تخفیف",
    description:
      "برای استفاده از کد تخفیف میتونید به سادگی کد رو در سبد خرید، در قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت برای شما نمایش داده میشه و در صورت تمایل میتونید ازش استفاده کنید.",
  },
];
function FAQ() {
  useEffect(() => {
    document.title = "ترخینه | سوالات متداول";
  }, []);
  return (
    <>
      <Header />
      <div
        style={{ "--image-url": `url(${faqBanner})` }}
        className={containerStyle}
      >
        <p className={pStyle}>سوالات متداول از ترخینه</p>
      </div>

      <div className={tabStyle}>
        <div className="container max-w-[1224px] mx-auto flex gap-x-6 text-[10px] md:text-xl  px-4 md:gap-x-8">
          <NavLink to="/faq">
            <button className="pb-4">سوالات متداول</button>
          </NavLink>
          <NavLink to="/rules">
            <button className="pb-4">قوانین ترخینه</button>
          </NavLink>
          <NavLink to="/privacy">
            <button className="pb-4">حریم خصوصی</button>
          </NavLink>
        </div>
      </div>
      <div className="max-w-[1224px] mx-auto border border-[#cbcbcb  px-5 rounded-md mb-6 mt-4">
        {faqItemsInfo.map((item) => (
          <div key={item.id}>
            <FAQItem {...item} />
            <hr />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
export default FAQ;
