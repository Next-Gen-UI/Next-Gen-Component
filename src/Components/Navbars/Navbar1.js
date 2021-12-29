import { Link } from "react-router-dom"
import { useState } from "react";

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav className="shadow-sm w-full bg-white p-5 rounded-lg">
            <div className="flex items-center mx-5 md:mx-16 justify-between">
                    <div className="flex-shrink-0 ">
                        <img src="https://i.imgur.com/ZaIrNrv.png" width={180} height={35} />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-8 flex items-baseline space-x-8">
                            <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
                                <Link  to="/">
                                Documentation
                                </Link>
                            </div>
                            <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
                                <Link  to="/">
                                Pricing
                                </Link>
                            </div>
                            <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
                                <Link  to="/">
                                FAQ
                                </Link>
                            </div>
                            <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
                                <Link to="/">
                                Contact
                                </Link>
                            </div>
                        </div>
                </div>
                <div className="hidden md:block">
                    <div className="cursor-pointer text-md lg:mr-20">
                        <button className="py-2 text-blue-600 border-2 border-blue-600 px-4 rounded-lg ">Sign Up</button>
                    </div>
                </div>

                <div className="mr-10 md:mr-28 md:hidden ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg className="block h-6 w-6"	xmlns="http://www.w3.org/2000/svg"	fill="none"	viewBox="0 0 24 24"	stroke="currentColor"	aria-hidden="true">
                                <path	strokeLinecap="round"	strokeLinejoin="round" strokeWidth="2"	d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6"	xmlns="http://www.w3.org/2000/svg"	fill="none"	viewBox="0 0 24 24"	stroke="currentColor"	aria-hidden="true">
                                <path	strokeLinecap="round"	strokeLinejoin="round" strokeWidth="2"	d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
                {
                isOpen && 
                <div className="md:hidden" id="mobile-menu">
                    <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        <Link  to="/">
                        Documentation
                        </Link>
                    </div>
                    <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        <Link  to="/">
                        Pricing
                        </Link>
                    </div>
                    <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        <Link  to="/">
                        FAQ
                        </Link>
                    </div>
                    <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        <Link to="/">
                        Contact
                        </Link>
                    </div>
                        <div className="cursor-pointer text-md mr-24">
                            <button className="py-2 text-blue-600 border-2 border-blue-600 px-4 rounded-lg ">Sign Up</button>
                        </div>
                    </div>
                </div>
                }
        </nav>
        </>
    )
}

export default Navbar1