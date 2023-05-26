import React, { useEffect, useState } from 'react';
import Category from './Category';
import Features from './Features';

const Home = () => {
    // category part load
    const [categories, setCategories]=useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
 
    return (
        <section>
            <section className='bg-slate-100'>
                <div className='container mx-auto'>
                    <div className='md:flex justify-between items-center p-3'>
                        <div>
                            <h1 className="text-bold text-2xl md:text-5xl font-bold">One step closer to your <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-violet-400 bg-clip-text text-transparent">dream job</span></h1>
                            <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className='btn my-btn'>Get Started</button>
                        </div>
                        <img className='w-2/4' src="https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-9-img/All%20Images/P3OLGJ1%20copy%201.png" alt="" />
                    </div>
                </div>
            </section>
            
            <section className='container mx-auto'>
                <section>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold mt-10 mb-2'>Job Category List</h1>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-4'>
                        {
                            categories.map(category=>
                                <Category 
                                    key={category.id}
                                    category={category}
                                ></Category>
                            )
                        }
                    </div>
                </section>

                <section>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold mt-10 mb-2'>Featured Jobs</h1>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div>
                        <Features></Features>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Home;