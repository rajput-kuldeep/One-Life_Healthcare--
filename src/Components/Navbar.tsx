import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";


const Navbar = () => {
    return (
        <div>
            <nav className=" text-black bg-[#b7ded8] flex  justify-between items-center p-2">
                <div>
                    <img src="one-life-logo-white.png" alt="" className="w-60 text-black" />
                </div>
                <div className="lg:flex lg:gap-7 lg:px-10 lg:text-xl lg:font-medium hidden">
                    <NavLink to="/">
                    <button>
  <span className="span-mother">
    <span>H</span>
    <span>o</span>
    <span>m</span>
    <span>e</span>
   
  </span>
  <span className="span-mother2">
  <span>H</span>
    <span>o</span>
    <span>m</span>
    <span>e</span>
  </span>
</button>
                    </NavLink>
                    <NavLink to="about"><button>
  <span className="span-mother">
    <span>A</span>
    <span>b</span>
    <span>o</span>
    <span>u</span>
    <span>t </span>
    <span>u</span>
    <span>s</span>
   
  </span>
  <span className="span-mother2">
  <span>A</span>
    <span>b</span>
    <span>o</span>
    <span>u</span>
    <span>t </span>
    <span>u</span>
    <span>s</span>
  </span>
</button></NavLink>
                    <NavLink to="spaces"><button>
  <span className="span-mother">
    <span>S</span>
    <span>p</span>
    <span>s</span>
    <span>c</span>
    <span>e</span>
    <span>s</span>
   
  </span>
  <span className="span-mother2">
  <span>S</span>
    <span>p</span>
    <span>s</span>
    <span>c</span>
    <span>e</span>
    <span>s</span>
  </span>
</button></NavLink>
                    <NavLink to="blog"><button>
  <span className="span-mother">
    <span>B</span>
    <span>l</span>
    <span>o</span>
    <span>g</span>
    <span>s</span>
    
   
  </span>
  <span className="span-mother2">
  <span>B</span>
    <span>l</span>
    <span>o</span>
    <span>g</span>
    <span>s</span>
  </span>
</button></NavLink>
                    <NavLink to="contact-us"><button>
  <span className="span-mother">
    <span>C</span>
    <span>o</span>
    <span>n</span>
    <span>t</span>
    <span>a</span>
    <span>c</span>
    <span>t </span>
    <span>u</span>
    <span>s</span>
    
   
  </span>
  <span className="span-mother2">
  <span>C</span>
    <span>o</span>
    <span>n</span>
    <span>t</span>
    <span>a</span>
    <span>c</span>
    <span>t </span>
    <span>u</span>
    <span>s</span>
  </span>
</button></NavLink>
                    <NavLink to="sos"><button>
  <span className="span-mother">
    <span>S</span>
    <span>O</span>
    <span>S</span>
    
    
   
  </span>
  <span className="span-mother2">
  <span>S</span>
    <span>O</span>
    <span>S</span>
    
  </span>
</button></NavLink>
                </div>

                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent className="flex flex-col items-start gap-5">
                        <SheetTitle></SheetTitle>
                        <SheetDescription></SheetDescription>
                            <img
                                src="one-life-logo-white.png"
                                alt="PCL"
                                className="cursor-pointer rounded-full w-14"
                            />
                            <ul className="text-start w-full">
                                <li
                                    className={`cursor-pointer px-4 py-1 rounded-full `}

                                >
                                    Home
                                </li>
                                <li
                                    className={`cursor-pointer px-4 py-1 rounded-full `}

                                >
                                    About Us
                                </li>

                                <li
                                    className={`cursor-pointer px-4 py-1 rounded-full `}

                                >
                                    Space
                                </li>
                                <li
                                    className={`cursor-pointer px-4 py-1 rounded-full `}

                                >
                                    Blogs
                                </li>
                                <li
                                    className={`cursor-pointer px-4 py-1 rounded-full `}

                                >
                                    Contact Us
                                </li>
                                <li
                                    className={`cursor-pointer px-4 py-1 rounded-full `}

                                >
                                    SOS
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
        
      
      </nav >
    </div >
  )
};

export default Navbar
