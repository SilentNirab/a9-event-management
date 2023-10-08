import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="">
            <div className="md:h-screen md:bg-[url(src/assets/Images/bg_1.jpg)] bg-cover">
                <Navbar></Navbar>
                <div className="md:h-full flex items-center px-2">
                    <div className="md:max-w-screen-sm ">
                        <h1 className="text-5xl font-bold"><span className="text-[#F5A425]">Developer</span><br />
                            Conference 2023</h1>
                        <h3 className="py-5 text-2xl font-semibold">Comming Soon</h3>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;