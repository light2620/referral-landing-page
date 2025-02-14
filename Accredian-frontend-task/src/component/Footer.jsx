import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer(){
    return <footer className="bg-neutral-900 w-full flex justify-center gap-60">
        <div>
            <h1 className="lg:text-6xl text-3xl font-bold text-white">accredian</h1>
            <p className="text-sm text-white text-center">credentials that matters</p>
        </div>
        <div className="text-white flex lg:text-6xl text-3xl mt-5 gap-3">
        <FaInstagram />
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaLinkedin />
        </div>
    </footer>
}