import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToDb } from '../../../milestone-8-react/emajon-e-commerce/src/utilities/fakedb';

const Feature = ({feature}) => {
    
   
 const {Company_Logo,Company_Name,Educational_Requirements,Experience,Job_Responsibility,
   Job_description,Job_title,Location,Onsite,Remote,Salary,email,id,phone} = feature

   const dynamic = useParams()
  
   const [jobsId,setJobsId] = useState([])

   useEffect(()=>{
       fetch('company.json')
       .then(res => res.json())
       .then(data=> setJobsId(data))
       
    const job =  jobsId.find(jobId => jobId.id === dynamic.id)
     setJobsId(job)
     console.log(jobsId)
    //   addToDb(id)

   },[])
   
   
   return (
      
      <div className='border-2 p-6 rounded-2xl shadow-xl bg-gray-200'>
           <img className='md:w-24 md:h-24 w-full' src={Company_Logo} alt="" /> 
           <h2>{Job_title}</h2>
           <p>{Company_Name}</p>
          <div className='flex flex-row justify-start gap-3 mt-3'>
          <span className='border-2 p-1 text-blue-500 border-blue-300'>{Remote}</span>
           <span className='border-2 p-1 text-blue-500 border-blue-300'>{Onsite}</span>
          </div>
       
            <div className='  mt-2'>
                <p>Location : {Location}</p>
                <p>$ Salary : {Salary}</p>
            </div>

            <Link to={`/JodDetails/${id}`}>
            
            <button className='border-2 bg-blue-400 p-2 text-white mt-4
            rounded-lg'>View Details</button>
            </Link>
     </div>
    );
};

export default Feature;