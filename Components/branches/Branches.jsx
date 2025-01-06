import BranchItem from "./BranchItem";
import ekbatan from "../../assets/images/ekbatan.png";
import chalos from "../../assets/images/chalos.jpg";
import aghdasieh from "../../assets/images/aghdasieh.png";
import vanak from "../../assets/images/vanak.jpg";
const branchesInfo = [
  {
    id: 1,
    image: ekbatan,
    title: "شعبه اکباتان",
    info: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
  },
  {
    id: 2,
    image: chalos,
    title: "شعبه چالوس",
    info: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
  },

  {
    id: 3,
    image: aghdasieh,
    title: "شعبه اقدسیه",
    info: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
  },
  {
    id: 4,
    image: vanak,
    title: "شعبه ونک",
    info: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
  },
];

const h3Style =
  "font-bold text-lg mb-3 text-[#353535] md:text-xl md:mb-6 lg:text-2xl";

function Branches() {
  return (
    <>
      <div className=" my-11 text-center mt-5  max-w-[1224px] mx-auto px-5 md:px-0">
        <h3 className={h3Style}>ترخینه گردی</h3>
        <div className="md:flex md:gap-x-4 lg:gap-x-5 xl:gap-x-6">
          {branchesInfo.map((item) => (
            <BranchItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Branches;
