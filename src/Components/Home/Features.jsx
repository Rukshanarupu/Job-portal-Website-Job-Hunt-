import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Features = () => {
    // category part load
    const [features, setFeatures]=useState([])
    useEffect(()=>{
        fetch('jobData.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    },[])

    const [displayJobs, setDisplayJobs]=useState(4)
    
    return (
        <div>
            <div className='gap-4 grid md:grid-cols-2 my-4'>
                {
                    features.slice(0, displayJobs).map(feature=>
                        <GetFeatures
                            key={feature.id}
                            feature={feature}
                        ></GetFeatures> 
                    )
                }
                
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setDisplayJobs(displayJobs + 2)} className='btn my-btn'>See more</button>
            </div>
        </div>
    );
};

const GetFeatures=({feature})=>{
    const {company_logo, job_title, company_name, location, salary, id, remote_or_onsite, fulltime_or_partTime}=feature
    return(
        <div className='border rounded-lg py-5 px-6'>
            <img className='w-40 h-14' src={company_logo} alt="" />
            <h1 className='font-semibold text-2xl py-2'>{job_title}</h1>
            <p>{company_name}</p>
            <button className='py-1 px-3 rounded-md text-indigo-500 border border-indigo-400 mr-2 mt-3'>{remote_or_onsite}</button> <button className='py-1 px-3 rounded-md text-indigo-500 border border-indigo-400'>{fulltime_or_partTime}</button>
            <div className='my-2'>
                <span className='mr-5'>
                    <FontAwesomeIcon className='w-3 h-3 mr-1 rounded-full border p-1 border-slate-400' icon={faLocationArrow} /> {location} 
                </span>
                <FontAwesomeIcon className='w-3 h-3 mr-1 rounded-full border p-1 border-slate-400' icon={faDollarSign} /> Salary: {salary}
            </div>
            <Link to={`Features/${feature.id}`} ><button className='py-2 px-3 rounded my-btn'>View Details</button></Link>
        </div>
    )
}

export default Features;