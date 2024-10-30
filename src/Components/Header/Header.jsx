
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";


function Header() {

    const [open,setOPen] = useState(false)
  return (
    <div  className='w-11/12 mx-auto flex justify-between items-center relative '>
        <nav>
            <img className='w-20' src="https://apolloinformationcentre.com/wp-content/uploads/2019/07/apollo-information-centre-favicon.png" />
        </nav>
      <nav>
     <div onClick={() => setOPen(!open)}>

        {
            open === true ? <IoMdClose  className='text-2xl text-[#2582A1] md:hidden'/> :  
            <IoMenu  className=' text-2xl font-bold text-[#2582A1] md:hidden ' />
        }

    
     </div>


       <ul className={`absolute top-16  right-0  w-25 bg-[#2582A1] p-5 rounded-lg text-white md:static md:flex md:bg-transparent md:w-auto transition-all duration-300 ease-in-out ${
          open ? 'block' : 'hidden'
        }`}>
       <p ><NavLink className="mr-7 font-semibold text-xl hover:bg-[#FDB931]  px-4 rounded-2xl md:text-black " to='/'>Home</NavLink></p>
       <p> <NavLink className="mr-7 font-semibold text-xl hover:bg-[#FDB931]  px-4 rounded-2xl md:text-black" to="/doctors">Doctors</NavLink></p>
        <p><NavLink className="mr-7 font-semibold text-xl hover:bg-[#FDB931]  px-4 rounded-2xl md:text-black" to = "/about">About Us</NavLink></p>
       <p> <NavLink className="mr-7 font-semibold text-xl hover:bg-[#FDB931]  px-4 rounded-2xl md:text-black" to="/diagnostic">Diagnostic</NavLink></p>
       <p> <NavLink className="mr-7 font-semibold text-xl hover:bg-[#FDB931]  px-4 rounded-2xl md:text-black" to="/contact">Contact</NavLink></p>
       </ul>
      </nav>
    </div>
  )
}

Header.propTypes = {

}

export default Header

