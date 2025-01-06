import HomeMeunuItem from "./HomeMenuItem";
import mainCourse from "../assets/images/mainCourse.png";
import appetizer from "../assets/images/appetizer.png";
import dessert from "../assets/images/dessert.png";
import drink from "../assets/images/drink.png";

import { searchIcon } from "../assets/icons/headerIcons";
const searchInputStyle = "w-full p-2  outline-none focus:outline-none";
const searchBoxStyle = " mt-4 flex border-2 rounded-md items-center px-4 ";

function HomeMeunu() {
  return (
    <>
      <div className="container text-center mt-5  max-w-[1224px] m-auto ">
        <div className="search px-5 md:hidden ">
          <div className={searchBoxStyle}>
            <input
              type="text"
              placeholder="جستجو"
              className={searchInputStyle}
            />
            <span>{searchIcon}</span>
          </div>
        </div>
        <h3 className="text-[#353535] font-bold mb-3 md:mb-5 lg:mb-8 md:mt-12 md:text-xl lg:text-2xl">
          منوی رستوران
        </h3>
        <div className="flex gap-y-12 flex-col md:flex-row">
          <div className="flex items-center justify-center">
            <HomeMeunuItem image={mainCourse} title={"غذای اصلی"} />
            <HomeMeunuItem image={appetizer} title={"پیش غذا"} />
          </div>
          <div className="flex items-center justify-center ">
            <HomeMeunuItem image={dessert} title={"دسر"} />
            <HomeMeunuItem image={drink} title={"نوشیدنی"} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeMeunu;
