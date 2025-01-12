import image1 from "/cus-1.svg";
import image2 from "/cus-2.svg";
import image3 from "/cus-3.svg";
import image4 from "/cus-4.svg";
import image5 from "/cus-5.svg";
import image6 from "/cus-6.svg";
import image7 from "/cus-7.svg";
import image8 from "/cus-8.svg";
import image9 from "/cus-9.svg";

const Customers = () => {
  return (
    <section className="px-5 max-w-[1350px] mx-auto mt-[30px]">
      <div className="w-full py-10 rounded-t-[16px] border px-4 flex flex-col gap-[50px] items-start">
        <p className="px-4 py-2 border border-black rounded-full text-[18px] font-[500]">
          Customers
        </p>
        <div className="flex flex-col gap-5 items-start">
          <h3 className="font-[500]">Customer Connections </h3>
          <p className="text-grey60">
            Explore endless choices and exceptional service, where your unique
            taste finds its perfect match in our dedicated commitment to your
            satisfaction.
          </p>
        </div>
      </div>
      <div className="svg-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image1} alt="" />
        </div>
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image2} alt="" />
        </div>
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image3} alt="" />
        </div>
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image4} alt="" />
        </div>
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image5} alt="" />
        </div>
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image6} alt="" />
        </div>
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image7} alt="" />
        </div>
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image8} alt="" />
        </div>
        <div className="h-[150px] flex items-center justify-center  border w-full">
          <img src={image9} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Customers;
