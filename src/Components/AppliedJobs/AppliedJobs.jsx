import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const AppliedJobs = () => {
    const [filter, setFilter] = useState([]);
    const jobArray=useLoaderData()

  useEffect(() => {
    if (jobArray) {
        setFilter(jobArray);
    }
  }, [jobArray]);

  // filter part
    const dataRemote = (data) => {
        if ((data = "Remote")) {
            const remote = jobArray.filter(
            (data) => data.remote_or_onsite === "Remote"
            );
            setFilter(remote);
        }
    };
    const dataOnsite = (data) => {
        if (data = "Onsite") {
            const onsite = jobArray.filter(
            (data) => data.remote_or_onsite === "Onsite"
            );
            setFilter(onsite);
        } 
    };
    console.log(jobArray);

    
    return (
        <div className="container mx-auto">
            <div className="text-end">
                <div className="dropdown">
                    <label tabindex="0" className="btn bg-violet-400 hover:bg-violet-600 border-0 me-8 mt-8">Filter by</label>
                    <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
                        <li className='mb-2'><button onClick={() => dataOnsite('Onsite')}>Onsite</button></li>
                        <li><button onClick={() => dataRemote('Remote')}>Remote</button></li>
                    </ul>
                </div>
            </div>
            {
                filter.map(job=>
                    <GetApplyCard
                        key={job.id}
                        job={job}
                    ></GetApplyCard>    
                )
            }
                
            
        </div>
    );
};

const GetApplyCard=({job})=>{
    console.log(job)
    const {company_logo, job_title,remote_or_onsite, fulltime_or_partTime, location, salary, company_name}=job
    return(
        <div className="flex items-center my-9 border-gray-200 rounded-lg border p-4 justify-between">
                    {/* //Render the job data here  */}
            <div className='flex items-center gap-4'>
                <img className='w-40 h-14' src={company_logo} alt="" />
                <div>
                    <h1 className='font-semibold text-2xl py-2'>{job_title}</h1>
                    <p>{company_name}</p>
                    <button className='py-1 px-3 rounded-md text-indigo-500 border border-indigo-400 mr-2 mt-3'>{remote_or_onsite}</button> 
                    <button className='py-1 px-3 rounded-md text-indigo-500 border border-indigo-400'>{fulltime_or_partTime}</button>
                    <div className='my-2'>
                        <span className='mr-5'>
                            <FontAwesomeIcon className='w-3 h-3 mr-1 rounded-full border p-1 border-slate-400' icon={faLocationArrow} /> {location} 
                        </span>
                        <FontAwesomeIcon className='w-3 h-3 mr-1 rounded-full border p-1 border-slate-400' icon={faDollarSign} /> Salary: {salary}
                    </div>
                </div>
            </div>
            <div class="">
                {/* <Link to={`Features/${feature.id}`} ><button className='py-2 px-3 rounded my-btn'>View Details</button></Link> */}
                <button className='py-2 px-3 rounded my-btn'>View Details</button>
            </div>
        </div>
    )
}

export default AppliedJobs;