import Header from "../Components/Header/Header";
import rulesBanner from "../assets/images/rules-banner.jpg";
import { pStyle } from "../Components/Banner";
import { containerStyle } from "./Franchise";
import { tabStyle } from "./FAQ";
import { NavLink } from "react-router-dom";
import FAQItem from "../Components/FaqItem";
import Footer from "../Components/footer/Footer";
import { useEffect } from "react";
const rulesItemInfo = [
  {
    id: 1,
    desktopTitle: "حداقل سفارش",
    mobileTitle: "حداقل سفارش",
    description:
      "حداقل سفارشات در رستوران‌های ترخینه، مبلغ ۵۰.۰۰۰ تومان است. برای ثبت، پردازش و ارسال سفارشات، باید حداقل، این مبلغ سفارش داده شود در غیر اینصورت سفارشات، ثبت نخواهد شد.",
  },
  {
    id: 2,
    desktopTitle: "فاصله تحویل",
    mobileTitle: "فاصله تحویل",
    description:
      "ترخینه در ارسال سفارشات به نقاط دور محدودیت دارد و حداکثر فاصله از رستوران‌های زنجیره‌ای ترخینه برای ارسال کالا، ۶ کیلومتر است. لطفا قبل از ثبت سفارش، نزدیک‌ترین شعبه به محل ارسال را انتخاب کنید و از رعایت کردن حداکثر فاصله برای ارسال سفارشات اطمینان حاصل فرمایید.",
  },
  {
    id: 3,
    desktopTitle: "زمان تحویل",
    mobileTitle: "زمان تحویل",
    description:
      "جدول زمانی تخمینی تحویل در زمان ثبت سفارش به اطلاع شما خواهد رسید. این ممکن است تحت تأثیر عوامل زیادی مانند ترافیک، آب و هوا، دوره‌های شلوغ رستوران و غیره باشد، بنابراین در صورت تأخیر لطفا صبور باشید.",
  },
  {
    id: 4,
    desktopTitle: "گزینه های پرداخت",
    mobileTitle: "گزینه های پرداخت",
    description:
      "ما گزینه‌های پرداخت مختلفی را می پذیریم، از جمله پرداخت اینترنتی، کارت‌های اعتباری یا پول نقد. لطفاً قبل از تکمیل سفارش، روش پرداختی را که ترجیح می دهید، تأیید کنید.",
  },
  {
    id: 5,
    desktopTitle: "دقت سفارش",
    mobileTitle: "دقت سفارش",
    description:
      "لطفاً قبل از ارسال، از دقیق بودن تمام جزئیات سفارش خود، از جمله موارد منو، دستورالعمل‌های خاص و جزئیات سفارش خود اطمینان حاصل کنید تا اختلالی در فرایند پردازش و تحویل سفارشات شما ایجاد نشود و سفارشات شما در سریع‌ترین زمان ممکن به دست‌تان برسد.",
  },
  {
    id: 6,
    desktopTitle: "شرایط لغو سفارش",
    mobileTitle: "شرایط لغو سفارش",
    description:
      "شما می‌توانید با تماس مستقیم با هر شعبه از رستوران‌های زنجیره‌ای ترخینه، سفارش خود را لغو کنید. لطفا توجه داشته باشید که ممکن است محدودیت زمانی برای لغو وجود داشته باشد، زیرا ممکن است غذا از قبل آماده شده باشد و در اینصورت متاسفانه امکان لغو سفارش وجود ندارد.",
  },
  {
    id: 7,
    desktopTitle: "شرایط بازگشت سفارش",
    mobileTitle: "شرایظ بازگشت سفارش",
    description:
      "اگر سفارش شما انتظارات شما را برآورده نمی کند، لطفاً بلافاصله از طریق تماس تلفنی با ما تماس بگیرید؛ ما در اسرع وقت به دنبال حل مشکل شما خواهیم بود.",
  },
  {
    id: 8,
    desktopTitle: "تخفیفات",
    mobileTitle: "تخفیفات",
    description:
      "هر‌گونه تخفیف یا برنامه‌های وفاداری ممکن است قوانین و شرایط خاصی داشته باشد که به وضوح در وب سایت مشخص می‌شود.",
  },
];

function Rules() {
  useEffect(() => {
    document.title = "قوانین ترخینه";
  }, []);
  return (
    <>
      <Header />
      <div
        style={{ "--image-url": `url(${rulesBanner})` }}
        className={containerStyle}
      >
        <p className={pStyle}>قوانین ترخینه</p>
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
        {rulesItemInfo.map((item) => (
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
export default Rules;
