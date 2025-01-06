import { buttonStyle } from "./Banner";
const cardStyles =
  "flex flex-col md:flex-row h-[19rem] justify-center md:items-center   border border-[#CBCBCB] lg:duration-500 hover:shadow-lg rounded-lg overflow-hidden mb-5  ";
const coverStyle =
  "bg-[image:var(--image-url)] bg-cover bg-center h-1/2 md:h-full   md:h-20 w-full md:w-1/2 md:h-38 ";

const descStyle =
  "flex flex-col items-center text-center gap-y-1 text-[#717171] text-[11px] py-3 px-2 sm:px-1 w-full md:w-1/2 md:gap-y-2 md:text-sm";
const h4Style =
  "text-[#353535] font-medium mt-2 text-xs sm:text-sm  md:text-base  md:mb-2 lg:text-lg xl:text-[22px]";
function ContactItem({ image, title, address, phone, workTime }) {
  return (
    <div className={cardStyles}>
      <div
        style={{ "--image-url": `url(${image})` }}
        className={coverStyle}
      ></div>

      <div className={descStyle}>
        <h4 className={h4Style}>{title}</h4>
        <div className="flex-col items-center  flex md:mt-3">
          <p>{address}</p>
          <p>{phone}</p>
          <p>{workTime}</p>
          <div className="flex gap-x-4 ">
            <button
              className={`${buttonStyle}  md:!px-10 !bg-transparent !border border-[#417F56] !text-[#417F56]`}
            >
              صفحه شعبه
            </button>
            <button className={`${buttonStyle} md:!px-10`}>دیدن در نقشه</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactItem;
