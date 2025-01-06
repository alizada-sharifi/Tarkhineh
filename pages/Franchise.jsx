import Header from "../Components/Header/Header";
import Footer from "../Components/footer/Footer";
import franchiseImg from "../assets/images/franchise-banner.jpg";
import { pStyle } from "../Components/Banner";
import FranchiseItem from "../Components/FranchiseItem";
import feature1 from "../assets/images/franchise-feature1.png";
import feature2 from "../assets/images/franchise-feature2.png";
import feature3 from "../assets/images/franchise-feature3.png";
import feature4 from "../assets/images/franchise-feature4.png";
import FranchiseOptionItem from "../Components/FranchiseOptionItem";
import Advice from "../Components/Advice";
import RequestForm from "../Components/RequestForm";
export const containerStyle =
  "text-center py-[4em] h-[11em] bg-[image:var(--image-url)] bg-cover bg-center md:py-[7.75em] md:h-[21em]";
const container = "max-w-[1224px] mx-auto px-5 md:px-0 text-[#353535] ";
export const optionsTitleStyle =
  "mb-4 font-bold text-[15px] pt-6 border-t border-[#CBCBCB] text-center md:text-xl md:pt-12 md:mb-6";
const optionItem =
  "flex flex-col md:flex-row md:justify-center md:gap-x-7 pb-5 border-b border-[#CBCBCB] md:pb-12 md:mb-6";
// ======== feature info
const features = [
  {
    id: 1,
    image: feature1,
    text: "بیش از 20 شعبه فعال در سراسر کشور",
  },
  {
    id: 2,
    image: feature2,
    text: "تسهیلات راه‌اندازی رستوران و تجهیز آن",
  },
  {
    id: 3,
    image: feature3,
    text: "طرح‌های تشویقی ارتقای فروش",
  },
  {
    id: 4,
    image: feature4,
    text: "اعطای دستور العمل پخت غذاها",
  },
];
function Franchise() {
  return (
    <>
      <Header />
      <div
        style={{ "--image-url": `url(${franchiseImg})` }}
        className={containerStyle}
      >
        <p className={pStyle}>همین الان به خانواده بزرگ ترخینه بپیوندید!</p>
      </div>
      <div className="max-w-[1224] mx-auto flex items-start justify-evenly gap-x-3 px-5 my-5 text-[8px] md:text-[9px] text-center  text-[#353535] md:text-sm md:my-14 lg:text-base ">
        {features.map((feature) => (
          <FranchiseItem key={feature.id} {...feature} />
        ))}
      </div>
      <div className={container}>
        <h3 className={optionsTitleStyle}>مزیت دریافت نمایندگی</h3>
        <div className={optionItem}>
          <div>
            <FranchiseOptionItem text="استفاده از برند شناخته شده ترخینه" />
            <FranchiseOptionItem text="به حداقل رساندن ریسک سرمایه گذاری" />
            <FranchiseOptionItem text="تسریع روند بازگشت سرمایه" />
            <FranchiseOptionItem text="مشاوره های تخصصی جهت مدیریت رستوران" />
          </div>
          <div>
            <FranchiseOptionItem text="مشاوره در امور حقوقی، مالی و مالیاتی" />
            <FranchiseOptionItem text="پشتیبانی بازاریابی و منابع انسانی" />
            <FranchiseOptionItem text="دریافت مشاوره جهت تامین مواد اولیه و تجهیزات" />
            <FranchiseOptionItem text="طرح های تشویقی برای ارتقا فروش" />
          </div>
        </div>
        <Advice />
        <div className={`${container} !py-1 rounded-lg border mb-12 !px-5 `}>
          <h3 className={`${optionsTitleStyle} !border-0`}>
            فرم درخواست نمایندگی
          </h3>
          <RequestForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Franchise;
