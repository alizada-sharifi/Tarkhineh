// =========================== styles =======
const cardStyles =
  "flex items-center gap-x-2 border border-[#CBCBCB] hover:border-[#417F56] duration-500 rounded-lg overflow-hidden mb-3 md:flex-col md:gap-y-2 md:w-[18em]";
const coverStyle =
  "bg-[image:var(--image-url)] bg-cover bg-center w-[9em] h-20 md:w-[18em] md:h-36 lg:h-[14.375em]";

const descStyle = "p-1 md:pb-2 lg:px-2.5 lg:pb-4 w-[10.375em] md:w-auto";
const h4Style =
  "text-[#353535] font-medium text-xs sm:text-sm mb-1 md:text-base md:font-bold md:mb-2 lg:text-lg xl:text-[22px]";
const pStyle =
  "text-[10px] text-[#717171] leading-4 sm:leading-5 md:text-xs md:font-medium lg:text-[13px] lg:leading-6 xl:text-sm";
// ===================================================
function BranchItem({ image, title, info }) {
  return (
    <>
      <div className={cardStyles}>
        <div
          style={{ "--image-url": `url(${image})` }}
          className={coverStyle}
        ></div>

        <div className={descStyle}>
          <h4 className={h4Style}>{title}</h4>
          <p className={pStyle}>{info}</p>
        </div>
      </div>
    </>
  );
}
export default BranchItem;
