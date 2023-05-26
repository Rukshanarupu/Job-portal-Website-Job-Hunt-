// use local storage to manage job data

const addToDb = id => {
    let appliedJobs = getAppliedJobs();

    // add quantity
    const quantity = appliedJobs[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        appliedJobs[id] = newQuantity;
    }
    else {
        appliedJobs[id] = 1;
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const getAppliedJobs = () => {
    let appliedJobs = {};

    //get the applied job from local storage
    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

export { addToDb, getAppliedJobs }