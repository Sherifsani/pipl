import { showCaseData } from "../../data";

const ShowCase = () => {
  return (
    <section className="max-w-[1350px] mx-auto pb-[70px]">
      <div className="px-5 flex flex-col gap-7">
        <h2 className="text-[40px] tracking-[.4px] max-w-[345px] md:max-w-[536px] lg:max-w-[660px] md:text-[56px] md:tracking-[.56px] lg:text-[72px] lg:tracking-[.72px]">
          Commitment to Eco-Excellence
        </h2>
        <div className="grid grid-cols-[1fr] sm:grid-cols-[repeat(2,1fr)] gap-4 lg:grid-cols-[repeat(4,1fr)]">
          {showCaseData.map(({ id, img, head, text }) => (
            <div key={id} className="flex flex-col gap-3 mb-[50px]">
              <div className="h-[360px] rounded-2xl overflow-hidden">
                <img
                  src={`../../public/${img}.webp`}
                  alt=""
                  className="rounded-2xl h-full w-full object-cover"
                />
              </div>
              <h3 className="leading-[136%] font-[500] text-[20px]">{head}</h3>
              <p className="leading-[136%] font-[400] text-[18px] tracking-[.1px] text-grey60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
