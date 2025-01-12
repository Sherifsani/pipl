const Contact = () => {
  return (
    <section className="max-w-[1450px] mx-auto py-[50px] px-3">
      <div className="w-full bg-accent rounded-[16px] py-8 px-4 flex flex-col gap-7 lg:px-10">
        <h2 className="text-[40px] tracking-[.4px] max-w-[345px] md:max-w-[536px] lg:max-w-[760px] md:text-[50px] md:tracking-[.56px] lg:text-[60px] lg:tracking-[.6px]">
          Reach Out and Let us Ensure Your Experience is Tailored to Perfection{" "}
        </h2>
        <div className="form flex flex-col  gap-[50px] lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col gap-5 items-start lg:w-[50%]">
            <p className="lg:max-w-[500px] text-[18px]">
              At PIPL, we value your communication. Whether you have questions,
              feedback, or special requests, our dedicated team is here to
              assist you. Your satisfaction is our priority, and we look forward
              to hearing from you soon!
            </p>
            <p className="text-[24px] tracking-[.24px] leading-[130%] border-b border-black pb-[4px]">
              hello@pipl.com
            </p>
            <p className="text-[24px] tracking-[.24px] leading-[130%] border-b border-black pb-[4px]">
              +1 (242) 224-4412
            </p>
          </div>

          <div className="form-main flex flex-col gap-7 items-start w-full lg:w-[50%]">
            <div className="flex flex-col gap-2 w-full relative">
              <label htmlFor="name" className="font-[500] text-[18px]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="William Anderson"
                className=" p-3 py-4 hover:border-black rounded-[12px] border border-[#0c0c0c5d] bg-transparent text-[18px] text-black w-full"
              />
            </div>{" "}
            <div className="flex flex-col gap-2 w-full relative">
              <label htmlFor="name" className="font-[500] text-[18px]">
                Email Address
              </label>
              <input
                type="text"
                name="name"
                placeholder="Willam.anderson@gmail.com"
                className="w-[100%] p-3 py-4 hover:border-black rounded-[12px] border border-[#0c0c0c5d] bg-transparent text-[18px] text-black"
              />
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <label htmlFor="name" className="font-[500] text-[18px]">
                Question
              </label>
              <input
                type="text"
                name="name"
                placeholder="Hpw can we help you?"
                className="w-[100%] p-3 py-4 hover:border-black rounded-[12px] border border-[#0c0c0c5d] bg-transparent text-[18px] text-black"
              />
            </div>
            <a
              href=""
              className="bg-black text-white rounded-full p-4 text-[17px]"
            >
              Send a Message
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
