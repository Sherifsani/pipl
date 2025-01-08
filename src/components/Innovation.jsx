import innovate from "../../public/design.webp";

const Innovation = () => {
  return (
    <section className="max-w-[1350px] w-full mx-auto px-5  flex flex-col lg:flex-row gap-10 lg:justify-between lg:h-[100vh] my-[100px]">
      <div className="description flex flex-col gap-[50px] justify-between w-full lg:w-[50%]">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-[40px] sm:text-[50px]  tracking-[.4px] sm:tracking-[.56px] lg:text-[72px] lg:tracking-[.72px] leading-[112%] max-w-[790px]">
            Elevating Innovation with Focus Design
          </h2>
          <a
            href=""
            className="text-base font-[500] border-b border-black py-2"
          >
            Discover Production
          </a>
        </div>
        <div className="">
          <h3 className="font-[600] mb-4 ">Focused on Future Trends</h3>
          <p className="text-grey60 ">
            Guided by market intelligence, our global in-house design community
            presents four exclusive collections and a sustainable capsule from
            fabric scraps. Experience precision with CLO 3D, shaping the future
            of style with excellence.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-xl lg:h-full lg:w-[50%]">
        <img src={innovate} alt="" className="w-full object-cover  h-[125%]" />
      </div>
    </section>
  );
};

export default Innovation;
