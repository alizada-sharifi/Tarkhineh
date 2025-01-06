import Header from "../Components/Header/Header";
import { containerStyle } from "./Franchise";
import contactBanner from "../assets/images/contact-us-banner.jpg";
import { pStyle } from "../Components/Banner";
import ContactItem from "../Components/ContactItem";
import ekbatan from "../assets/images/ekbatan.png";
import chalos from "../assets/images/chalos.jpg";
import aghdasieh from "../assets/images/aghdasieh.png";
import vanak from "../assets/images/vanak.jpg";
import Footer from "../Components/footer/Footer";
const branchesInfo = [
  {
    id: 1,
    image: ekbatan,
    title: "شعبه اکباتان",
    address: "آدرس: شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    phone: "شماره تماس:۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
    workTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
  },
  {
    id: 2,
    image: chalos,
    title: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    phone: "شماره تماس:۰۲۱-۵۴۸۹۱۲۵۲-۵۳",
    workTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
  },

  {
    id: 3,
    image: aghdasieh,
    title: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    phone: "شماره تماس:۰۲۱-۵۴۸۹۱۲۵۴-۵۵",
    workTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
  },
  {
    id: 4,
    image: vanak,
    title: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    phone: "شماره تماس:۰۲۱-۵۴۸۹۱۲۵۶-۵۷",
    workTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
  },
];
function Contact() {
  return (
    <>
      <Header />
      <div
        className={containerStyle}
        style={{ "--image-url": `url(${contactBanner})` }}
      >
        <p className={pStyle}>با ترخینه در تماس باشید.</p>
      </div>
      <div className="container max-w-[1224px] mx-auto my-7 px-5 justify-between">
        {branchesInfo.map((item) => (
          <ContactItem key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Contact;
