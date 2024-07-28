
const HeroSection = () => {
  return (
    <div className="lg:flex lg:justify-between lg:px-20 pt-10 text-[#140404] ">
      
      
      <div>
      <div className="flex flex-col items-center text-5xl lg:text-7xl font-bold font-flores-fresh leading-tight tracking-widest ">
          <span className="">ITS OKAY TO</span>
          <span>NOT BE OKAY</span>
         </div>
         <div>
          <p className="lg:text-end lg:w-[30vw] text-md text-center px-20 lg:px-0 lg:text-xl text-[#140404] font-normal">In the fast-paced hustle of life, it's easy to feel overwhelmed by the weight of our problems. But fret not, for here, within the safe confines of our anonymous haven, you can unburden your heart and soul without fear or judgment.</p>
         </div>
      </div>
      <div className="">
        <img src="health.png" alt="" className=" h-[420px] rounded-xl " />
      </div>
    </div>
  )
};

export default HeroSection
