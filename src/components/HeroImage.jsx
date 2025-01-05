import heroImage from "../../public/heroimage.webp";

const HeroImage = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto overflow-hidden rounded-lg">
      <img src={heroImage} className="hover:scale-[1.1] transition-all" />
    </section>
  );
};

export default HeroImage;
