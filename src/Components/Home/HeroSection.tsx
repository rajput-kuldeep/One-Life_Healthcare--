
const HeroSection = () => {
  return (
    <div className="flex justify-between px-20 pt-10 text-[#140404] ">
      
      <div className="">
        <img src="health.png" alt="" className=" h-[420px] rounded-xl" />
      </div>
      <div>
      <div className="flex flex-col text-7xl font-bold font-flores-fresh leading-tight tracking-widest">
          <span className="">ITS OKAY TO</span>
          <span>NOT BE OKAY</span>
         </div>
         <div>
          <p className="text-end w-[30vw] text-xl text-[#140404] font-normal">In the fast-paced hustle of life, it's easy to feel overwhelmed by the weight of our problems. But fret not, for here, within the safe confines of our anonymous haven, you can unburden your heart and soul without fear or judgment.</p>
         </div>
      </div>
    </div>
  )
};

export default HeroSection
