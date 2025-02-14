import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { referralApi } from "../api/referral.api";
import image4 from "../assets/image4.svg"
import toast from "react-hot-toast";

<IoClose />
export default function ReferralModel({close}){
    const [courses,setCourses] = useState(["Software Engineer","Data Science","Machine Learning"])
   
    const [formData,setFormData] = useState({
        referrerName : "",
        referrerEmail : "",
        refereeName: "",
        refereeEmail : "",
        refereeNumber : "",
        course : "",
    })
    const isButtonActive = Object.values(formData).every(el => el != "");
    function handleChange(e){
          const {name,value} = e.target;
          setFormData({...formData,[name] : value})
          console.log(formData)
    }

    async function submitData(e){
        e.preventDefault()
         try{
             const response = await referralApi(formData)
             if(response.data.error){
                toast.error(response.data.message);
             }
             if(response.data.success){
                toast.success(response.data.message)
                setFormData({
                    referrerName : "",
                    referrerEmail : "",
                    refereeName: "",
                    refereeEmail : "",
                    refereeNumber : "",
                    course : "",
                })
             }
             console.log(response);

         }catch(err){ 
            console.log(err)
            toast.error("somethin went... try again")
         }
    }


    return <>
    <div className=" fixed top-0 bottom-0 left-0 right-0 bg-amber-100 flex items-center justify-center p-2" style = {{backgroundColor : "rgba(0,0,0,0.3)"}}>
        <div className="w-[80%] flex rounded-2xl overflow-hidden mx-auto">
         <div className="w-[40%] bg-blue-700 hidden lg:block">
            <img src={image4} alt="" className="w-full h-full" />
         </div>
        <div className="bg-white  lg:w-[40%] w-full lg:px-15 p-10 md:p-10 rounded shadow-2xl flex flex-col relative" >
            <div className="absolute top-3 right-4" onClick={close}> <IoClose size={26} className="cursor-pointer"/></div>
            <form action="" onSubmit={submitData} className="flex flex-col gap-2">
            {/* referrer details */}
            <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <label className="text-lg" htmlFor="referrerName">Your Name: </label>
                <input
                id="referrerName" 
                type="text"
                required
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                className="outline-none border rounded p-2 border-blue-300 bg-blue-100 focus-within:border-blue-500 focus-within:border-2 focus-within:outline-none"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-lg" htmlFor="refferrerEmail">Your Email: </label>
                <input
                id="refferrerEmail"
                required
                type="email"
                name="referrerEmail"
                onChange={handleChange}
                value={formData.referrerEmail}
                className="outline-none border rounded p-2 border-blue-300 bg-blue-100 focus-within:border-blue-500 focus-within:border-2 focus-within:outline-none"
                />
            </div>
            </div>
           
             {/* referee details */}
            <div className="flex flex-col  gap-2">
            <p className="text-2xl font-semibold">Referee Details</p>
             <div className="flex flex-col gap-1">
                <label className="text-lg" htmlFor="refereeName">Name: </label>
                <input
                id="refereeName" 
                type="text"
                required
                name="refereeName"
                onChange={handleChange}
                value={formData.refereeName}
                className="outline-none border rounded p-2 border-blue-300 bg-blue-100 focus-within:border-blue-500 focus-within:border-2 focus-within:outline-none"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-lg" htmlFor="refereeEmail">Email: </label>
                <input
                id="refereeEmail"
                required
                type="email"
                name="refereeEmail"
                value={formData.refereeEmail}
                onChange={handleChange}
                className="outline-none border rounded p-2 border-blue-300 bg-blue-100 focus-within:border-blue-500 focus-within:border-2 focus-within:outline-none"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-lg" htmlFor="refereeNumber">Phone : </label>
                <input
                id="refereeNumber"
                required
                type="text"
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  maxLength={10}
                name="refereeNumber"
                value={formData.refereeNumber}
                onChange={handleChange}
                className="outline-none border rounded p-2 border-blue-300 bg-blue-100 focus-within:border-blue-500 focus-within:border-2 focus-within:outline-none"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-lg" >Course to refer</h1>
                <select name="course" id="" value = {formData.course} className="w-full p-2 focus-within:outline-none border border-blue-400 rounded px-3 text-xl focus-within:border-2 focus-within:border-blue-600"  onChange={handleChange} >
                <option value="" disabled selected >Select a course</option>
                {
                    courses.map((course,index)=>{
                        return <option value={course} key={index}>{course}</option>
                    })
                }
                </select>
            </div>
         </div>
            <button disabled={!isButtonActive} role="submit" className={`${isButtonActive ? "bg-blue-600" : "bg-gray-700" } cursor-pointer text-white w-full text-lg py-2 font-semibold rounded shadow mt-2`}>Refer Now</button>
            

        </form>
        </div>
        

        </div>
        
       
    </div>
    </>
}