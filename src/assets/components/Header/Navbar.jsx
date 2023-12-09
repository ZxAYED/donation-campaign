import { NavLink } from "react-router-dom";
import logo from '../../logo/Logo.png'
const Navbar = () => {
   
    return (
        <>
        <nav className="pt-7 flex flex-col max-w-6xl mx-auto lg:flex-row lg:justify-between items-center  ">
            <section>
                <img className="w-[200px]" src={logo} alt="logo " />
                <p className="text-xl relative -top-5 left-20 hidden lg:flex">C a m p a i g n </p>
            </section>
        <div className="flex gap-10 font-bold text-xl  text-rose-600 mt-5 lg:mt-0">
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-sky-500 hover:underline" : ""
        }
      >
       Home
      </NavLink>
        <NavLink
        to="/Donation"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-sky-500 hover:underline" : ""
        }
      >
       Donation
      </NavLink>
        <NavLink
        to="/Statistics"
        className={({ isActive, isPending }) =>
          isPending ? "pending " : isActive ? "text-sky-500 hover:underline" : ""
        }
      >
       Statistics
      </NavLink>
      </div>
      </nav> 
    </>);
   
};

export default Navbar;