import { Link } from "react-router-dom";
// ============================================== styles
const boxStyle =
  "relative flex flex-col items-center justify-center mx-2 xl:w-[16em] xl:mx-6";
const imgStyle =
  "w-[7em] sm:w-[7.5em] absolute top-0 md:w-[9em] lg:w-[12em] xl:w-[14.5em]";
const bgStyle =
  "w-[7.5em] sm:w-[9.5em] border-2 border-[#417f56] h-[4.5em] sm:h-[5em] bg-white mt-[3.5em] shadow-lg rounded-md md:rounded-lg md:w-[10.5em] md:h-[7em] lg:w-[14.5em] lg:h-[8em] lg:mt-[6em] xl:w-[16.75em] xl:h-[9.5em]";
const buttonStyle =
  "py-1.5 px-5  text-white bg-[#417f56] text-sm rounded-md absolute -bottom-5 shadow-lg md:py-2.5 md:px-6 lg:text-lg lg:px-7 xl:-bottom-8";
// ============================
function HomeMeunuItem({ image, title }) {
  return (
    <Link to="/menu">
      <div className={boxStyle}>
        <img src={image} alt="" className={imgStyle} />
        <div className={bgStyle}></div>
        <button className={buttonStyle}>{title}</button>
      </div>
    </Link>
  );
}
export default HomeMeunuItem;
