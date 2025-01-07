import womanImage from "../../public/woman.webp";
import servicesData from "../../data/index";

const Services = () => {
  return (
    <section className="py-[100px] max-w-[1350px] mx-auto">
      <div className="px-5 w-full flex flex-col items-start gap-9 md:flex-row mb-[100px] lg:justify-between ">
        <h2 className="text-[40px] tracking-[.4px] max-w-[345px] md:max-w-[536px] lg:max-w-[660px] md:text-[56px] md:tracking-[.56px] lg:text-[72px] lg:tracking-[.72px]">
          Providing Top-notch Services for Your Satisfaction
        </h2>
        <img
          src={womanImage}
          alt="woman"
          className="rounded-2xl h-[360px] md:h-[400px] object-cover w-full max-w-[400px] lg:h-[unset] lg:ml-auto"
        />
      </div>
      <div className="services-grid px-5 grid grid-cols-[1fr] md:grid-cols-[repeat(2,1fr)] gap-7 lg:grid-cols-[repeat(3,1fr)]">
        {servicesData.map(({ id, head, text }) => (
          <div key={id} className="flex flex-col gap-5">
            <p className="w-full border-b py-3">{id}</p>
            <div className="flex flex-col gap-5">
              <h3 className="font-[500]">{head}</h3>
              <p className="text-grey60 lg:text-[18px]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
