import { Link } from "react-router-dom"

const Index = () => {
    return (
        <div>
            <div className="text-6xl font-montserrat text-center pt-28 pb-20">Components</div>
            <div className="flex flex-row">
                <div className="w-1/4 flex flex-col items-center space-y-12">
                <div>
                    <Link to="/Navbars/Navbar1">
                        <div className=" w-52 h-16 cursor-pointer rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold">Navbar</div>
                    </Link>
                </div>
                <div>
                    <Link to="/buttons">
                        <div className=" w-52 h-16 cursor-pointer rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold">Buttons</div>
                    </Link>
                </div>
                </div>
                <div className="w-1/4 flex flex-col items-center space-y-12">
                <div>
                    <Link to="/forms">
                        <div className=" w-52 h-16 cursor-pointer rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold ">Forms</div>
                    </Link>
                </div>
                <div>
                    <Link to="/footer">
                        <div className=" w-52 h-16 cursor-pointer rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold ">Footers</div>
                    </Link>
                </div>
                </div>
                <div className="w-1/4 flex flex-col items-center space-y-12">
                <div>
                    <Link to="/cards">
                        <div className=" w-52 h-16 cursor-pointer rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold">Cards</div>
                    </Link>
                </div>
                <div>
                    <Link to="/herosection">
                    <div className=" w-52 h-16 cursor-pointer rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold">Hero Section</div>
                    </Link>
                </div>
            </div>
            <div className="w-1/4 flex flex-col items-center space-y-12">
                <div>
                    <Link to="/faq">
                        <div className=" w-52 h-16 cursor-pointer rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold">FAQ</div>
                    </Link>
                </div>
                <div>
                    <Link to="/fourzerofour">
                        <div className=" w-52 h-16 cursor-pointer rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold">404</div>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Index
