import PropTypes from "prop-types";

const Property1SimpleForm = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-gray-100 flex flex-row items-center justify-center py-24 px-5 box-border max-w-full text-center text-53xl text-whitesmoke-200 font-fugaz-one mq750:gap-6 mq450:pt-[62px] mq450:pb-[62px] mq450:box-border ${className}`}
    >
      <div className="w-[1024px] flex flex-col items-center justify-center max-w-[1024px] mq750:gap-5 mq1050:max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-8 max-w-full mq750:gap-4">
          <div className="self-stretch flex flex-col items-start justify-start">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[78px] font-normal font-[inherit] mq1050:text-39xl mq1050:leading-[62px] mq450:text-24xl mq450:leading-[47px]">
              Get in touch
            </h1>
          </div>
          <h3 className="m-0 self-stretch relative text-3xl leading-[31px] font-normal font-open-sans mq450:text-lg mq450:leading-[25px]">
            Let's create something amazing together.
          </h3>
          <div className="w-full flex flex-row flex-wrap items-end justify-center gap-x-4 gap-y-3.5 max-w-[520px] mq750:max-w-full">
            <div className="flex-1 flex flex-col items-start justify-center min-w-[230px] max-w-[420px] mq450:max-w-full">
              <div className="self-stretch rounded-lg bg-gray-100 border-dimgray-200 border-[1px] border-solid flex flex-row items-center justify-start py-[15px] px-4">
                <input
                  className="w-[171px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-center justify-start py-0 px-1 box-border font-open-sans text-sm text-white"
                  placeholder="Your Message"
                  type="text"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
              <div className="rounded-lg bg-darkcyan flex flex-row items-center justify-center py-[11.5px] px-6">
                <div className="flex flex-row items-center justify-center p-1">
                  <div className="relative text-sm leading-[160%] font-open-sans text-white text-center inline-block min-w-[47px]">
                    Submit
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

Property1SimpleForm.propTypes = {
  className: PropTypes.string,
};

export default Property1SimpleForm;
