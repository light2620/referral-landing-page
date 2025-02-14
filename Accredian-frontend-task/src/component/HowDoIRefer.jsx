import image2 from "../assets/image2.svg"
import image3 from "../assets/image3.svg"
export default function HowDowIRefer({ openReferralModel}){
    return <section className="w-full bg-blue-100 mt-10 flex flex-col justify-center py-15 lg:gap-10 items-center">
        <h1 className="text-4xl  font-semibold">How Do I <span className="text-blue-600">Refer</span></h1>
         <div>
            <img src={image2} alt="how to refer image" className=" hidden lg:block"/>
            <img src={image3} alt="how to refer image" className="lg:hidden md:hidded"/>
         </div>
         <button
         onClick={ openReferralModel}
         className="bg-blue-700 text-white text-xl p-3 cursor-pointer rounded hover:shadow-2xl">
                Refer Now
         </button>
    </section>
}