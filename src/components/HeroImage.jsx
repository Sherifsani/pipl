import heroImage from "../../public/heroimage.webp";

const HeroImage = () => {
  return (
    <section className="w-full px-5 max-w-[1400px] mx-auto overflow-hidden rounded-xl h-[unset]  mb-[20px]">
      <img
        src={heroImage}
        className="transition-all h-full w-full rounded-xl object-cover"
      />
    </section>
  );
};

export default HeroImage;
