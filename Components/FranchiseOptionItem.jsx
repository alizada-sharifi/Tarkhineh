const boxIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
    <rect
      width="14"
      height="14"
      x=".414"
      y="10"
      stroke="#417F56"
      strokeWidth="2"
      rx="3"
      transform="rotate(-45 .414 10)"
    />
  </svg>
);
function FranchiseOptionItem({text}) {
  return (
    <div className="flex items-center gap-x-1 text-[11px] mb-2 md:gap-x-2 md:mb-4 md:text-base  ">
      <span>{boxIcon}</span>
      <span>{text}</span>
    </div>
  );
}
export default FranchiseOptionItem;
