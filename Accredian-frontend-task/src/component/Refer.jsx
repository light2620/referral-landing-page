import image1 from "../assets/image1.svg"

export default function Refer({openReferralModel }){
    return <section className="lg:w-[80%] w-[90%] rounded-3xl mx-auto flex md:h-[50vh] lg:h-[70vh]  h-[30vh] gap-2 shadow-xl overflow-hidden ">
        <div className="w-[50%] hidden lg:block md:block">
           <img src={image1} alt="" className="w-full h-full" />
        </div>
        <div className="lg:w-[50%] md:w-[50%] w-full  bg-blue-500 flex flex-col items-center justify-center p-5 gap-10">
            <h1 className="text-white font-bold lg:text-5xl md:text-5xl text-3xl  text-center">
               Earn <span className="text-neutral-900">10x</span> reward With Our Referal Scheme.
            </h1>
            <button
            onClick={openReferralModel}
            className="bg-white text-lg font-bold p-3 text-blue-600 shadow rounded hover:shadow-2xl cursor-pointer ">
                 Refer and Earn
            </button>
        </div>
    </section>
}