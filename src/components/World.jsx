import CtaButton from "./CtaButton";
import Map from "./Map";
import shape from "../../public/shape.svg";

const World = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-5 h-screen">
      <div className="flex flex-col gap-5 px-5 pt-10 pb-0 bg-[whitesmoke] rounded-xl w-full">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-end">
          <h2 className="text-[40px] sm:text-[50px]  tracking-[.4px] sm:tracking-[.56px] lg:text-[72px] lg:tracking-[.72px] leading-[112%] max-w-[590px]">
            Sourcing Style Worldwide for Your Fashion Delight
          </h2>
          <div className="flex flex-col gap-5 items-start max-w-[500px]">
            <p className="text-[20px] leading-[136%]">
              From every chic corner of the globe to your doorstep, our
              commitment to a boundless global fashion experience knows no
              borders.
            </p>
            <CtaButton text={"Our Services"} />
          </div>
        </div>

        <div className="map flex justify-between items-end">
          <Map />
          <img src={shape} alt="wave" className="hidden lg:inline" />
        </div>
      </div>
    </section>
  );
};

export default World;
