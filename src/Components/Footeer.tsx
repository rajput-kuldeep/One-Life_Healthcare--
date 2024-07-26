
import { NavLink } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Footeer = () => {
  return (
    <div>
      <footer>
        <div className="flex flex-col gap-3 bg-[#b9d3cf] pt-10 pb-10">
        
                <div className="lg:flex lg:gap-5 lg:px-10 lg:text-lg  hidden justify-center">
                    <NavLink to="/">About Us</NavLink>
                    <NavLink to="about">Privacy Policy</NavLink>
                    <NavLink to="spaces">Refund Policy</NavLink>
                    <NavLink to="blog">Shipping Policy</NavLink>
                    <NavLink to="contact-us">Contact us</NavLink>
                    <NavLink to="sos">Terms & Conditions</NavLink>
                    <NavLink to="sos">Support</NavLink>
                </div>
                <div className="flex justify-center items-center gap-5">
                <IoLogoYoutube />
                <FaSquareInstagram />
                <IoLogoWhatsapp />
                <FaLinkedinIn />

                </div>

                <div className="text-center text-lg">
                    <p>Address: 11th floor , Brigade Signature Towers , Kattamnallur , Bangalore 560049</p>
                    <p>© Fly Fare Technologies LLP 2024. All rights reserved.</p>
                </div>

        </div>
      </footer>
    </div>
  )
};

export default Footeer
