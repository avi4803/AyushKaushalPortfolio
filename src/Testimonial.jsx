import PropTypes from "prop-types";

const Testimonial = ({
  className = "",
  imageLummiCategoryavatars,
  name1,
  shortTestimonial,
}) => {
  return (
    <div
      className={`flex-1 rounded-2xl bg-whitesmoke-100 flex flex-col items-center justify-center p-6 box-border gap-4 min-w-[264px] max-w-[360px] text-center text-sm text-gray-200 font-inter mq1050:max-w-full ${className}`}
    >
      <img
        className="w-[120px] h-[120px] relative rounded-3xl object-cover"
        loading="lazy"
        alt=""
        src={imageLummiCategoryavatars}
      />
      <div className="self-stretch relative leading-[150%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
        {name1}
      </div>
      <blockquote className="m-0 self-stretch relative text-3xl leading-[140%] font-light mq450:text-lg mq450:leading-[25px]">
        {shortTestimonial}
      </blockquote>
    </div>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
  imageLummiCategoryavatars: PropTypes.string,
  name1: PropTypes.string,
  shortTestimonial: PropTypes.string,
};

export default Testimonial;
