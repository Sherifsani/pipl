/* eslint-disable react/prop-types */
const CtaButton = ({ text }) => {
  return (
    <div className="">
      <a
        href=""
        className="cta-btn bg-[#222] text-[hsl(0,0%,100%)] rounded-full  font-[500]"
      >
        {text}
        <span className="btn-arrow rounded-full w-[40px] h-[40px] bg-[#d1c9ff]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=""
          >
            <path
              d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
              fill="#222"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default CtaButton;
