import CtaButton from "./CtaButton";
import Map from "./Map";

const World = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-5">
      <div className="flex flex-col gap-5 px-[3rem] py-10 bg-[whitesmoke] rounded-xl w-full">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-end">
          <h2 className="text-[40px] sm:text-[50px]  tracking-[.4px] sm:tracking-[.56px] lg:text-[72px] lg:tracking-[.72px] leading-[112%] max-w-[550px]">
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

        <div className="map">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default World;
