import image1 from "/advo-1.webp";
import image2 from "/advo-2.webp";

const Advocacy = () => {
  return (
    <div className="max-w-[1350px] mx-auto px-5 gap-10 flex flex-col w-full mt-[50px]">
      <div className="flex flex-col md:flex-row gap-4">
        <h3 className="font-[500]">
          Diligent Teams Pursuing Goals and Upholding Standards
        </h3>
        <h2 className="text-[40px] tracking-[.4px] max-w-[345px] md:max-w-[536px] lg:max-w-[660px] md:text-[56px] md:tracking-[.56px] lg:text-[65px] lg:tracking-[.72px]">
          Shining a Light on Design Excellence and Advocacy Unity
        </h2>
      </div>

      <div className="flex flex-col gap-3 md:flex-row w-full">
        <div className="md:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-[16px]">
          <img
            src={image1}
            alt=""
            className="h-full w-full object-cover rounded-[16px]"
          />
        </div>
        <div className=" md:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-[16px]">
          <img
            src={image2}
            alt=""
            className="h-full w-full object-cover rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Advocacy;
