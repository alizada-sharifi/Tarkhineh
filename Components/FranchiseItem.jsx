const itemContainerStyle =
  "flex flex-col justify-center items-center gap-y-2 lg:gap-y-4";
const featureImgStyle = "w-12 sm:w-13 md:w-20 lg:w-28";
function FranchiseItem({ image, text }) {
  return (
    <div className={itemContainerStyle}>
      <img src={image} className={featureImgStyle} />
      <span>{text}</span>
    </div>
  );
}
export default FranchiseItem;
