// use local storage to manage job data
const addToDb = id => {
    let appliedJobs = getAppliedJobs();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJobs[id] = newQuantity;
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

// const removeFromDb = id => {
//     const appliedJobs = getAppliedJobs();
//     if (id in appliedJobs) {
//         delete appliedJobs[id];
//         localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
//     }
// }

const getAppliedJobs = () => {
    let appliedJobs = {};

    //get the applied job from local storage
    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

// const deleteAppliedJobs = () => {
//     localStorage.removeItem('applied-jobs');
// }

