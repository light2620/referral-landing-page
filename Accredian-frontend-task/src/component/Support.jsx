import { MdOutlineSupportAgent } from "react-icons/md";

export default function Support(){
    return <section className="lg:h-[70vh] md:h-[60vh] h-[30vh] rounded-2xl bg-blue-500 lg:w-[80%] w-[90%] flex flex-col items-center justify-evenly p-2">
         <MdOutlineSupportAgent size={100}   className="text-blue-600 shadow rounded-2xl p-2 border-5 border-gray-400 bg-white " />
         <div>
         <h1 className="lg:text-7xl md:text-6xl text-2xl font-bold text-white text-center">Have questions about referrals?</h1>
         <p className="lg:text-2xl md:text-lg text-white text-center lg:mt-5 md:mt-5 ">Get expert guidance today!</p>
         </div>
         <button className="cursor-pointer bg-white text-blue-500 font-bold lg:text-3xl text-xl lg:p-4 p-2 rounded shadow hover:shadow-2xl">Get in touch</button>
    </section>
}