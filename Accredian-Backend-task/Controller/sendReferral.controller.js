import { prisma } from "../config/db.js";
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { referralEmailTemplate } from "../utils/ReferalEmailTemplate.js";
dotenv.config()
const sendReferral = async(req,res) => {

    const { referrerName ,referrerEmail, refereeName, refereeEmail, refereeNumber,course} = req.body
    

    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !refereeNumber || !course) {
        return res.json({ 
            message : "All fields are requied",
            error : true,
            success : false
         });
     }
     if(referrerEmail === refereeEmail){
        return res.json({
            message : "You cant refer to your self",
            error : true,
            success : false
        })
     }

     let tranporter = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : process.env.EMAIL,
            pass : process.env.EMAIL_PASSWORD
        }
     })
    

     try{ 

        

        const referalDetail = await prisma.referral.create({
            data : { referrerName,referrerEmail, refereeName,refereeNumber,course,refereeEmail}
        })
            const url = `${process.env.FRONTEND_URL}/welcome-page`
            const mailOption = {
                from : process.env.EMAIL,
                to : refereeEmail,
                subject : `${referrerName} has refer you to join the ${course} course`,
                html  : referralEmailTemplate(url)
            }
            const send = await tranporter.sendMail(mailOption)
            console.log(send)
       

        res.json({
            message : `Referal Link Sent to ${refereeName}`,
            success : true,
            error : false
        });
     }catch(err){
        res.status(500).json({ error: err.message || err });
     }


}


export {sendReferral}