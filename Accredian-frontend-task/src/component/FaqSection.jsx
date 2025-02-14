import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
export default function Faq(){
   const [faqOtions,setFaqOptions] = useState({
    eligibility : true,
    referralProcess : false,
    termAndConditions : false
   })
   const [eligibilityQuestion,setEligibilityQuestion] = useState([
    {
        question : "Who is eligible for the referral bonus?",
        answer : "The referrer (the person making the referral) is eligible for the bonus if they refer a family member or friend to an Accredian program, and that person completes the admission process and enrolls in one of Accredian's programs.",
        display: true
    },
    {
        question : "What are the conditions for eligibility in Accredian's referral program?",
        answer : "The referred individual must be a new inquiry, having had no prior contact with Accredian for any intake or program.",
        display: false
    }
   ])
   const [referralProcessQuestion , setReferralQuestion] = useState([
    {
        question : "How can I submit a referral to Accredian?",
        answer : "Referrals can be submitted via Accredian's website's referral section.",
        display : true,
    },
    {
        question : "What happens after I submit a referral through the website?",
        answer : "After submitting a referral, an admission counselor from Accredian will contact the referred individual.",
        display : false,
    },
    {
        question : "Do both the referrer and the referred individual become eligible for the referral bonus?",
        answer : "No, only the referrer is eligible for the referral bonus.",
        display : false
    }
   ])
   const [termAndConditions , setTermAndCondition] = useState([
    {
        question : "Terms & Conditions",
        answer : "Soon",
        display : true
    }
   ])
   function handleQuestionDisplay(index) {
    setEligibilityQuestion((prevQuestions) =>
      prevQuestions.map((item, idx) =>
        idx === index ? { ...item, display: !item.display } : {...item, display : false}
      )
    );
  }
  function handleReferralProcessQuestion(index) {
    setReferralQuestion((prev) => {
        return prev.map((item,idx) =>
         idx === index ? {...item,display : !item.display} : {...item, display : false}
        )
    })
  }
  function handleTermAndConditon(index){
    setTermAndCondition((prev) => {
        return prev.map((item,idx) =>
          idx === index  ? {...item,display : !item.display} : {...item, display : false}
        )
    })
  }
   function toogleFaqOptions(section){
         setFaqOptions({
            eligibility : false,
            referralProcess : false,
            termAndConditions : false,
            [section] : true
         })
   }


    return <div className= " flex lg:flex-row flex-col mx-auto  gap-15 w-full p-5">
        <div className="flex lg:flex-col gap-6 overflow-hidden lg:w-[30%] w-full">
            
            <div onClick={()=> toogleFaqOptions("eligibility")} className={`cursor-pointer border-1 border-gray-300 rounded ${faqOtions.eligibility ? "text-blue-600  shadow-xl" : "text-neutral-500" } min-w-[300px] p-5 lg:py-5 font-bold text-xl w-[200px] flex items-center justify-center `}>
                <p >Eligibility</p>
            </div>
            <div onClick={()=> toogleFaqOptions("referralProcess")}  className={`cursor-pointer border-1 border-gray-300 rounded ${faqOtions.referralProcess ? "text-blue-600  shadow-xl" : "text-neutral-500" } min-w-[300px]  p-5 lg:py-5 font-bold text-xl w-[300px] flex items-center justify-center`}>
                <p >Referral Process</p>
            </div>
            <div onClick={()=> toogleFaqOptions("termAndConditions")}  className={`cursor-pointer border-1 border-gray-300 rounded ${faqOtions.termAndConditions ? "text-blue-600  shadow-xl" : "text-neutral-500" } min-w-[250px] p-2 lg:py-5 font-bold text-xl w-[300px] flex items-center justify-center`}>
                <p >Term and Conditions</p>
            </div>
        </div>
        <div className ="w-full">
        {faqOtions.eligibility && 
        <div className=" w-full  flex flex-col gap-6">
                {
                    eligibilityQuestion.map((item,index) => {
                        return <div key = {index} className=" w-full p-2"> 
                           <div onClick={() => handleQuestionDisplay(index)} className =" cursor-pointer flex justify-between items-center">
                              <p className={`${item.display ? "text-blue-600" : "text-neutral-700"} font-bold text-xl`}>{item.question}</p>
                              
                              { !item.display ? <IoMdArrowDropdown size={24}/> : <IoMdArrowDropup size={24}/>}
                             
                             
                           </div>
                        {item.display && <p className="mt-5">
                              {item.answer}
                           </p>}  
                        
                    </div>
                    })
                }

                
            
        </div>}

        {faqOtions.referralProcess && 
        <div className=" p-2 flex flex-col gap-6">
                {
                    referralProcessQuestion.map((item,index) => {
                        return <div key={index} > 
                           <div onClick={() =>handleReferralProcessQuestion(index)} className =" cursor-pointer flex justify-between items-center">
                              <p className={`${item.display ? "text-blue-600" : "text-neutral-700"} font-bold text-xl`}>{item.question}</p>
                              
                              { !item.display ? <IoMdArrowDropdown size={24}/> : <IoMdArrowDropup size={24}/>}
                             
                             
                           </div>
                        {item.display && <p className="mt-5">
                              {item.answer}
                           </p>}  
                        
                    </div>
                    })
                }

                
            
        </div>}

        {faqOtions.termAndConditions && 
        <div className=" p-2 flex flex-col gap-6">
                {
                    termAndConditions.map((item,index) => {
                        return <div key={index} > 
                           <div onClick={() => handleTermAndConditon(index)} className =" cursor-pointer flex justify-between items-center">
                              <p className={`${item.display ? "text-blue-600" : "text-neutral-700"} font-bold text-xl`}>{item.question}</p>  
                              { !item.display ? <IoMdArrowDropdown size={24}/> : <IoMdArrowDropup size={24}/>}
                           </div>
                        {item.display && <p className="mt-5" >
                              {item.answer}
                           </p>}  
                        
                    </div>
                    })
                }

                
            
        </div>}
        </div>
       
    </div>

} 