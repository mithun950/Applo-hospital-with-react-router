
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'

function DoctorDetail() {
     
    const detailData = useLoaderData();
    const {name,contact} = detailData;
  return (
    <div className='text-center bg-[#2582A1] p-4 rounded-xl mt-8'>
      <h2>{name}</h2>
      <h4>Contacts:{contact}</h4>
    </div>
  )
}

DoctorDetail.propTypes = {

}

export default DoctorDetail

