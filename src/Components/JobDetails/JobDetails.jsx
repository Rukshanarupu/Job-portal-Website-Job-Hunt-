import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faPhone, faCalendarDays, faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'
import {addToDb } from '../../utility/fakedb';

const JobDetails = () => {
    let details=useParams()
    const jobDetailsData=useLoaderData()
    const [detailsJob, setDetailsJob]=useState({})

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        if(jobDetailsData){
            const jobData=jobDetailsData.find(jobDetail=>jobDetail.id==details.id)
            setDetailsJob(jobData)
        }
    },[])

    const applyBtnHandler=(jobDetail) => {
        console.log(jobDetail)

        let newJobs = []
        const exists = jobs.find(existingJob => existingJob.id === jobDetail.id)

        if (!exists) {
            jobDetail.quantity = 1
            newJobs = [...jobs, jobDetail]
        } 
        else {
            exists.quantity = exists.quantity + 1
            const rest = jobs.filter(
            existingJob => existingJob.id !== jobDetail.id
          )
          newJobs = [...rest, exists]
        }
    
        setJobs(newJobs)
        addToDb(jobDetail.id)
      }
    

    const {id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, phone, email, location}=detailsJob
    
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold py-20 bg-slate-100'>Job Details</h1>
            </div>
            <div className='container mx-auto md:flex gap-4 my-10'>
                <div className='lg:w-8/12 w-full md:2/4'>
                    <p className='py-3'><span className='font-bold'>Job Description:</span> {job_description}</p>
                    <p><span className='font-bold'>Job Responsibility:</span> {job_responsibility}</p>
                    <h2 className='py-3'><span className='font-bold'>Educational Requirements:</span> {educational_requirements}</h2>
                    <p><span className='font-bold'>Experiences:</span> {experiences}</p>
                    
                </div>
                <div className='lg:w-4/12 w-full md:2/4 '>
                    <div className='bg-violet-100 p-6 rounded-lg'>
                        <h2 className='font-bold text-lg py-2'>Job Details</h2>
                        <hr className='h-[2px] bg-violet-200 mb-2' />
                        <p className='py-1 flex items-center'>
                            <FontAwesomeIcon className='w-3 h-3 rounded-full border border-violet-400 p-1 text-violet-500 mr-1' icon={faDollarSign} />
                            <span className='font-semibold mr-2'>Salary :</span> {salary}
                        </p>
                        <p className='py-1 flex items-center'>
                            <FontAwesomeIcon className='w-3 h-3 rounded-full border border-violet-400 p-1 text-violet-500 mr-1' icon={faPhone} />
                            <span className='font-semibold mr-2'>job Title :</span> {job_title}
                        </p>
                        <h2 className='font-bold text-lg py-2'>Contact Information</h2>
                        <hr className='h-[2px] bg-violet-200 mb-2' />
                        <p className='py-1 flex items-center'>
                            <FontAwesomeIcon className='w-3 h-3 rounded-full border border-violet-400 p-1 text-violet-500 mr-1' icon={faCalendarDays} />
                            <span className='font-semibold mr-2'>Phone :</span> {phone}
                        </p>
                        <p className='py-1 flex items-center'>
                            <FontAwesomeIcon className='w-3 h-3 rounded-full border border-violet-400 p-1 text-violet-500 mr-1' icon={faEnvelope} />
                            <span className='font-semibold mr-2'>Email :</span> {email}
                        </p>
                        <p className='py-1 flex items-center'>
                            <FontAwesomeIcon className='w-3 h-3 rounded-full border border-violet-400 p-1 text-violet-500 mr-1' icon={faLocation} />
                            <span className='font-semibold mr-2'>Address :</span> {location}
                        </p>
                    </div>
                    <button onClick={()=>applyBtnHandler(detailsJob)} className='btn my-btn w-full mt-4'>Apply Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default JobDetails;