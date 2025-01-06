import { useState } from "react";

const arrowDown = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z"
      fill="#353535"
    />
  </svg>
);
const arrowUp = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.92 15.8C19.73 15.8 19.54 15.73 19.39 15.58L12.87 9.05996C12.39 8.57996 11.61 8.57996 11.13 9.05996L4.61002 15.58C4.32002 15.87 3.84002 15.87 3.55002 15.58C3.26002 15.29 3.26002 14.81 3.55002 14.52L10.07 7.99996C11.13 6.93996 12.86 6.93996 13.93 7.99996L20.45 14.52C20.74 14.81 20.74 15.29 20.45 15.58C20.3 15.72 20.11 15.8 19.92 15.8Z"
      fill="#417F56"
    />
  </svg>
);
const h4style = "text-[18px]";

function FAQItem({ desktopTitle, mobileTitle, description }) {
  let [isClose, setIsClose] = useState(true);
  const openDesc = () => {
    setIsClose(!isClose);
  };
  return (
    <div className="py-4  " onClick={openDesc}>
      <div className="flex justify-between cursor-pointer ">
        <div
          className={
            (h4style, isClose ? "text-black" : " text-[#417f56] font-bold")
          }
        >
          <h4 className="hidden md:block">{desktopTitle}</h4>
          <h4 className="md:hidden">{mobileTitle}</h4>
        </div>
        {isClose ? <span>{arrowDown}</span> : <span>{arrowUp}</span>}
      </div>
      {isClose ? (
        ""
      ) : (
        <p className="text-[11px] text-[#717171] text-justify leading-5 px-7 py-3 md:text-sm md:leading-6 md:pb-4">
          {description}
        </p>
      )}
    </div>
  );
}
export default FAQItem;
