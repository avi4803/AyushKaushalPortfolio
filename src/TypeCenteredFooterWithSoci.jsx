import PropTypes from "prop-types";
const DP = "public/DP.jpg";
const TypeCenteredFooterWithSoci = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-start justify-start py-20 px-16 box-border gap-20 max-w-full text-left text-lg text-whitesmoke-200 font-open-sans mq750:gap-10 mq750:pl-8 mq750:pr-8 mq750:box-border mq450:gap-5 ${className}`}
    >
      <div className="self-stretch  flex flex-col  items-center justify-center gap-4 max-w-full mt-[-50px]">
        <div className="flex-1  overflow-hidden flex flex-col items-center justify-center min-w-[371px] max-w-full mq750:min-w-full">
          <img src={DP}  className="rounded-full size-32 text-center m-4 " alt="DP" />
          <div className=" text-3xl flex leading-[150%]  max-w-full ">
            AYUSH KAUSHAL
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-start justify-start  px-0 pb-0 box-border min-w-[371px] max-w-full">
          <div className="self-stretch  flex flex-row items-center justify-center gap-3 mq450:flex-wrap mq450:justify-center">
            <img
              className="size-10 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--facebook.svg"
            />
            <img
              className="size-10 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--instagram.svg"
            />
            <img
              className="size-10 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--x.svg"
            />
            <img
              className="size-10 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--linkedin.svg"
            />
            <img
              className="size-10 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--youtube.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full text-sm mq750:gap-4">
        <div className="self-stretch h-px relative bg-whitesmoke-200" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[622px] flex flex-row flex-wrap items-center justify-center gap-6 max-w-full">
            <div className="relative bg-black rounded-lg p-2 leading-[160%]">
              Made by Avi
            </div>
            
    
          </div>
        </div>
      </div>
    </div>
  );
};

TypeCenteredFooterWithSoci.propTypes = {
  className: PropTypes.string,
};

export default TypeCenteredFooterWithSoci;
