import { inputStyle } from "./Advice";
import { provinces } from "../data/cities";
import { useState } from "react";
import Swal from "sweetalert2";
import { buttonStyle } from "./Banner";
const titleStyle = "mb-4 font-400 text-[14px] pt-6 md:text-xl md:pt-12 md:mb-6";
const OptionStyles = "py-[9px] md:px-0.5 cursor-pointer";
const checkboxDevStyle = "flex text-[#717171]  gap-x-1 md:gap-x-2 ";

function RequestForm() {
  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const provinceChangeHandler = (province) => {
    setSelectedProvince(provinces[province.target.value]);
  };
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [addres, setAddres] = useState("");
  const requestBtnHandler = (e) => {
    if (name === "" || idNumber === "" || phoneNo === "" || addres === "") {
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
    <>
      <div>
        <h3 className={titleStyle}>مشخصات فرد متقاضی</h3>
        <div>
          <form
            action="#"
            className="flex w-full justify-around flex-col md:flex-row md:gap-x-3 lg:gap-x-6 md:mb-3 gap-y-5"
          >
            <input
              type="text"
              className={inputStyle}
              placeholder="نام و  خانوادگی"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              className={`${inputStyle} `}
              placeholder="کد ملی"
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
            <input
              type="tel"
              className={`${inputStyle} `}
              placeholder="شماره تماس"
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
          </form>
        </div>
      </div>
      <div>
        <h3 className={titleStyle}>آدرس ملک متقاضی</h3>
        <div>
          <form
            action="#"
            className="flex w-full justify-around flex-col md:flex-row md:gap-x-3 lg:gap-x-6 md:mb-3 gap-y-5"
          >
            <div className="w-full relative">
              <label
                htmlFor="astan"
                className="absolute right-3 -top-3 text-[#cbcbcb] px-1 bg-white "
              >
                استان
              </label>
              <select
                id="astan"
                name="astan"
                className={inputStyle}
                onChange={provinceChangeHandler}
              >
                {provinces.map((province) => (
                  <>
                    <option
                      key={province.id}
                      className={`${OptionStyles} h-[50px]`}
                      value={province.id}
                    >
                      {province.name}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="w-full relative">
              <label
                htmlFor="city"
                className="absolute right-3 -top-3 text-[#cbcbcb] px-1 bg-white "
              >
                شهر
              </label>
              <select id="city" name="city" className={inputStyle}>
                {selectedProvince.counties.map((province) => (
                  <>
                    <option
                      key={province.id}
                      className={`${OptionStyles} h-[50px]`}
                      value={province}
                    >
                      {province.name}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <input
              type="text"
              className={inputStyle}
              placeholder="آدرس دقیق"
              required
              onChange={(e) => setAddres(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div>
        <h3 className={titleStyle}>امکانات ملک متقاضی</h3>
        <div className="flex flex-col gap-y-2 md:flex-row gap-x-3 ">
          <div className={checkboxDevStyle}>
            <input
              type="checkbox"
              className=" accent-[#417F56] "
              name="parwanaKasb"
              id="parwanaKasb"
            />
            <label htmlFor="parwanaKasb">پروانه کسب دارد.</label>
          </div>
          <div className={checkboxDevStyle}>
            <input
              className="accent-[#417F56] "
              type="checkbox"
              name="kitchen"
              id="kitchen"
            />
            <label htmlFor="kitchen">آشپزخانه دارد</label>
          </div>
          <div className={checkboxDevStyle}>
            <input
              className="accent-[#417F56] "
              type="checkbox"
              name="parking"
              id="parking"
            />
            <label htmlFor="parking">پارکینگ دارد.</label>
          </div>
          <div className={checkboxDevStyle}>
            <input
              className="accent-[#417F56] "
              type="checkbox"
              name="warehouse"
              id="warehouse"
            />
            <label htmlFor="warehouse">انبار دارد.</label>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={(e) => requestBtnHandler(e)}
            className={`${buttonStyle} mb-5`}
          >
            درخواست مشاوره
          </button>
        </div>
      </div>
    </>
  );
}
export default RequestForm;
