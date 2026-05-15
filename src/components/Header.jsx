import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { LiaSignInAltSolid } from "react-icons/lia";
import { BsCartPlus } from "react-icons/bs";
import { useState } from "react";


export const Header = () => {
    const [toggle, setToggle] = useState(false);

    const openDrawer = () => {
        setToggle(true); };

    const closeDrawer = () => {
        setToggle(false);};

    const Links = [ {
            icon: <IoSearch />,
            name: "Search"
        },
        {
            icon: <BiSolidOffer />,
            name: "Offers",
            sup: "New"
        },
        {
            icon: <IoHelpBuoyOutline />,
            name: "Help"
        },
        {
            icon: <LiaSignInAltSolid />,
            name: "Sign In"
        },
        {
            icon: <BsCartPlus />,
            name: "Cart",
            sup: "2"
        },]

    return (
        <>
            <div onClick={closeDrawer}
                className="black-overlay w-full h-full fixed top-0 left-0 duration-700 ease-in-out "
                style={{ opacity: toggle ? 1 : 0, visibility: toggle ? 'visible' : 'hidden' }}>

                <div onClick={(e)=>{ e.stopPropagation()}} className="w-[500px] bg-white shadow-xl  h-full duration-500 ease-in-out fixed top-0"
                style={{ left: toggle ? "0%" : "-100%",transition:"0.5s ease-in-out" }}>
                </div>
            </div>

            <header className="shadow-xl p-3">
                <div className=" md:mx-auto md:max-w-[67rem] md:flex items-center">
                    <div className="w-16">
                        <img src="img/Swiggy-logo.png" alt="Logo" />
                    </div>

                    <div className=" mx-5 bg-gray-100 rounded-full px-2 md:py-1">
                        <span className="font-bold underline "> Ratnada </span>
                        Jodhpur, Rajasthan 342001
                        <RxCaretDown onClick={openDrawer} className="inline text-orange-600 text-2xl font-extrabold cursor-pointer" />
                    </div>

                    <nav className="hidden sm:block md:flex ml-auto gap-5 list-none">
                        {Links.map((link, index) => (
                            <li key={index} className="flex items-center  gap-1 cursor-pointer hover:text-orange-600 ">
                                {link.icon}
                                {link.name}
                                <sup>{link.sup}</sup>
                            </li>
                        ))}
                    </nav>

                </div>
            </header>
        </>
    );
};
