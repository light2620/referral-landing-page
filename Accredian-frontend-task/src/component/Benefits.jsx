import { PiHandCoins } from "react-icons/pi";
import { BsFastForward } from "react-icons/bs";
import { FaInfinity } from "react-icons/fa6";
export default function Benefits(){
    return <section className="lg:h-[70vh] md:h-[60vh] h-[30vh] rounded-2xl shadow-2xl bg-white lg:w-[80%] w-[90%] flex flex-col items-center justify-evenly ">
        <h1 className="lg:text-5xl text-3xl  font-semibold text-black">What Are The Referral Benefits?</h1>
        <div className="flex items-center gap-5">
        <div className="bg-blue-300 rounded-full lg:p-5 p-3 shadow-2xl">
        <PiHandCoins  className="text-blue-800 text-4xl" />
        </div>
        <p className="text-black lg:text-4xl text-2xl font-light">Earn ₹10K per successful Referral</p>
        </div>

        <div className="flex items-center gap-5 mr-3">
        <div className="bg-blue-300 rounded-full lg:p-5 p-3 shadow-2xl">
        <BsFastForward className="text-blue-800 text-4xl " />
        </div>
        <p className="text-black lg:text-4xl text-2xl font-light">Quick and Easy Referral process</p>
        </div>


        <div className="flex items-center gap-5 lg:mr-20 mr-12">
        <div className="bg-blue-300 rounded-full lg:p-5 p-3 shadow-2xl">
        <FaInfinity  className="text-blue-800 text-4xl" />
        </div>
        <p className="text-black lg:text-4xl text-2xl font-light">Unlimited Referral Potential</p>
        </div>

        

    </section>
}