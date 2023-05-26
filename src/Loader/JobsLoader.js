import { getAppliedJobs } from "../utility/fakedb.js";

const JobProductsData=async ()=>{
    const responseJobDetails=await fetch('jobData.json')
    const jobsData=await responseJobDetails.json()
    // console.log(jobsData)
    // if cart data is in database, you have to use async await
    const savedJobs = getAppliedJobs();

    const jobArray = [];
    for(const id in savedJobs){
        const foundJob=jobsData.find(job=>job.id==id)
        if(foundJob){
            foundJob.quantity=savedJobs[id]
            jobArray.push(foundJob)
        }
    }
    // console.log(savedJobs)
    return jobArray
}

export default JobProductsData