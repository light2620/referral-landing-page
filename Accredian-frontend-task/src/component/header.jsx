import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Header(){
   return <header className="flex justify-between px-3 h-[10vh] border-b-2 shadow border-gray-200">
       <div className="flex items-center gap-5">
           <div>
              <h1 className="text-4xl font-bold text-blue-500">accredian</h1>
              <p className="text-sm text-center font-light">credentials that matters</p>
           </div>
           <div className="lg:flex items-center hidden  px-4 py-3 bg-blue-500 rounded font-semibold text-xl text-white">
             <p>courses</p>
             <IoMdArrowDropdown size={24} className=""/>
           </div>
       </div> 

        <div className="lg:flex items-center gap-5 hidden">
            <p className="text-xl text-neutral-800">Refer & Earn</p>
            <div className="bg-gray-300  text-lg px-4 rounded py-2">Login</div>
            <div className="bg-blue-500  text-lg px-4 rounded py-2 text-white font-bold">Try for free</div>
        </div>
        <div className="flex justify-center items-center lg:hidden">
        <RxHamburgerMenu size={44} />
        </div>
   </header>
}