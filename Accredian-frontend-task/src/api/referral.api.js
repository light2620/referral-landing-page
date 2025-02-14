import { axiosInstance } from "./axiosInstance";


const referralApi = async(data) => {
    try{
       const response = await axiosInstance.post("/referrals",data);
       return response
    }catch(err){
        throw err
    }
}
export {referralApi}