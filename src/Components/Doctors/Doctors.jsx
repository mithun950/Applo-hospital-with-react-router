
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import Doctor from './Doctor';

function Doctors() {

    const doctors = useLoaderData();

    
  return (
    <div className='w-11/12 mx-auto grid-cols-1 md:grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
      {
        doctors.map(doctorData => <Doctor key={doctorData.id} doctorData={doctorData}></Doctor>)
      }
    </div>
  )
}

Doctors.propTypes = {

}

export default Doctors

