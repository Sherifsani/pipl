import CtaButton from "./CtaButton";
import { productData } from "../../data";

const Production = () => {
  return (
    <section className="px-5 max-w-[1350px] mx-auto ">
      <div className="px-5 flex flex-col gap-6 items-start bg-[whitesmoke] rounded-[16px] py-4">
        <div className="head w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 py-14 px-5 border-b border-grey40">
          <h2 className="text-[40px] tracking-[.4px] max-w-[345px] md:max-w-[536px] lg:max-w-[660px] md:text-[56px] md:tracking-[.56px] lg:text-[72px] lg:tracking-[.72px]">
            The Symphony of Our Production Partnerships
          </h2>
          <div className="desc flex flex-col gap-5 items-start">
            <p className="max-w-[400px] tracking-[.px] ">
              Our production collaborations harmonize expertise and creativity,
              creating a symphony of unparalleled quality and innovation.
            </p>
            <CtaButton text="Contact Us" />
          </div>
        </div>
        <div className="product-container flex flex-col gap-5 w-full px-5">
          {productData.map(({ id, img, head, text }) => (
            <div
              key={id}
              className="w-full flex flex-col gap-5 border-b py-6 lg:flex-row lg:justify-between"
            >
              <img
                src={`${img}.webp`}
                alt=""
                className="rounded-[16px] lg:w-[360px]"
              />
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                <h3 className="font-[500]">0{id}</h3>
                <div className="flex flex-col gap-5">
                  <h3 className="font-[500] text-[24px] tracking-[-.12px]">
                    {head}
                  </h3>
                  <p className="text-grey60 lg:text-[20px] max-w-[550px]">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Production;
