import innovate from "../../public/innovate.webp";

const Empower = () => {
  return (
    <section className="max-w-[1350px] w-full mx-auto px-5  flex flex-col-reverse lg:flex-row-reverse gap-10 lg:justify-between lg:h-[100vh] my-[200px]">
      <div className="description flex flex-col gap-[50px] justify-between w-full lg:w-[50%]">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-[40px] sm:text-[50px]  tracking-[.4px] sm:tracking-[.56px] lg:text-[72px] lg:tracking-[.72px] leading-[112%] max-w-[790px]">
            Empowered Minds, Positive Vibration{" "}
          </h2>
          <a
            href=""
            className="text-base font-[500] border-b border-black py-2"
          >
            Contact Us
          </a>
        </div>
        <div className="">
          <h3 className="font-[600] mb-4 ">
            Innovative Collaboration, Inside and Out
          </h3>
          <p className="text-grey60 ">
            At PIPL, our vibrant team combines positive energy with impressive
            know-how. They share solutions with customers and internally through
            our Knowledge Hub, fostering continuous learning and innovation.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-xl lg:h-full lg:w-[50%]">
        <img src={innovate} alt="" className="w-full object-cover  h-[125%]" />
      </div>
    </section>
  );
};

export default Empower;
