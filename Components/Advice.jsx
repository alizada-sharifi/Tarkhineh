import { optionsTitleStyle } from "../pages/Franchise";
import { buttonStyle } from "./Banner";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import Swal from "sweetalert2";

export const inputStyle =
  "w-full outline-none border border-[#CBCBCB] text-sm text-[#353535] placeholder:text-[#717171] placeholder:text-right rounded-md px-3 py-2 md:py-[7px] mb-4 md:text-base";

function Advice() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

   const adviceBtn = (e) => {
    if (name === "" || email === "") {
      e.preventDefault();
      Swal.fire({
        title: "لطفا فرم را تکمیل کنید",
        background: "red",
        color: "white",
        showConfirmButton: false,
        showCloseButton: true,
        width: "30rem",
        timerProgressBar: true,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "درخواست با موفقیت ارسیال شد",
        background: "#417F56",
        color: "white",
        showConfirmButton: false,
        showCloseButton: true,
        width: "30rem",
        timerProgressBar: true,
        timer: 1500,
      });
      setName("");
      setEmail("");
    }
  };
  return (
    <div className="border-b  border-[#CBCBCB] pb-5 md:pb-12 md:mb-6">
      <h3 className={`${optionsTitleStyle} border-t-0`}>دریافت مشاوره</h3>
      <div>
        <form
          action="#"
          className="flex w-full justify-around flex-col md:flex-row md:gap-x-3 lg:gap-x-6 md:mb-3 gap-y-5"
        >
          <input
            type="text"
            className={inputStyle}
            placeholder="نام و  خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className={`${inputStyle} `}
            placeholder="ایمیل آدرس"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="w-full">
            <DatePicker
              inputClass={inputStyle}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              placeholder="زمان ایده‌آل"
              arrowStyle={{
                display: "none",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
          </div>
        </form>
        <div className="text-center">
          <button
            type="submit"
            onClick={(e) => adviceBtn(e)}
            className={`${buttonStyle} !mt-2`}
          >
            درخواست مشاوره
          </button>
        </div>
      </div>
    </div>
  );
}

export default Advice;
