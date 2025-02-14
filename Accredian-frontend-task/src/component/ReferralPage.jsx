import { useState } from "react"
import Faq from "./FaqSection"
import Refer from "./Refer"
import Support from "./Support"
import Benefits from "./Benefits"
import ReferralModel from "./ReferralModel"
import HowDowIRefer from "./HowDoIRefer"

export default function Referral(){

    const [sections,setSections] = useState({
        referSection : true,
        benefits : false,
        faq : false,
        support : false
    })

    

     const [referralModel , setReferralModel] = useState(false);
    

    
    function handleToogle(section){
        console.log(section)
        setSections({
        referSection : false,
        benefits : false,
        faq : false,
        support : false,
        [section] : true
        }) 
    }

   
    return <section className="w-full bg-white flex flex-col gap-10  items-center justify-center mt-6 ">
       <div className="flex lg:w-[700px] w-[400px] text-2xl bg-blue-100 p-2 rounded-full justify-evenly">
          <p  onClick={() => handleToogle("referSection")} className={`${sections.referSection && "text-blue-500"} hover:text-blue-500 cursor-pointer`}>Refer</p>
          <p  onClick={() => handleToogle("benefits")}className={`${sections.benefits && "text-blue-500"} hover:text-blue-500 cursor-pointer`}>Benefit</p>
          <p  onClick={() => handleToogle("faq")}className={`${sections.faq && "text-blue-500"} hover:text-blue-500 cursor-pointer`}>FAQ's</p>
          <p  onClick={() => handleToogle("support")}className={`${sections.support && "text-blue-500"} hover:text-blue-500 cursor-pointer`}>Support</p>
       </div>
       <div className="lg:w-full w-full flex justify-center">
        {
            sections.faq && 
            <div className=" lg:h-[70vh] rounded shadow-xl flex flex-col items-center gap-15 p-2 lg:w-[90%] w-full">
            <h1 className="text-3xl font-bold">Frequently Asked <span className="text-blue-700">Questions</span></h1>
            <Faq />
            </div>
        }

        {
            sections.referSection && 
            <Refer openReferralModel ={ () => setReferralModel(true)} />
        }

        {
            sections.support && 
            <Support />
        }

       {
            sections.benefits && 
            <Benefits/>
        }
    
        
       
       </div>
       <HowDowIRefer openReferralModel ={ () => setReferralModel(true)} />
       {referralModel &&< ReferralModel  close={() => setReferralModel(false)}/ >}
    </section>
}