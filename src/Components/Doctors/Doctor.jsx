
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

function Doctor({doctorData}) {
    const navigate = useNavigate();
    const {image_url,name,specialization,hospital,id} = doctorData;

    const handleDetails = () => {
        navigate(`/doctorDetail/${id}`)
    }


  return (
    <div className='bg-[#2582A1] p-6 mt-4 rounded-2xl shadow-md text-center '>
      <div className='  flex justify-center '>
        <img className='w-full rounded-2xl' src={image_url} alt="" />
      </div>
      <h2 className='mt-4 text-2xl text-white font-bold'>{name}</h2>
      <h3 className='mt-1 text-2xl text-yellow-300 font-semibold'>{specialization}</h3>
      <p className='text-green-200 mt-2'>{hospital}</p>
      <button onClick={handleDetails} className='px-5 py-2 rounded-xl font-bold bg-[#FDB931] text-[#2582A1] mt-4'>Show More Details</button>
    </div>
  )
}

Doctor.propTypes = {

}

export default Doctor

