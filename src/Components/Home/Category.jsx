import React from 'react';

const Category = ({category}) => {
    

    return (
        <div className='bg-purple-50 rounded-xl p-5'>
            <img className='bg-purple-100 rounded p-2' src={category.logo} alt="" />
            <h2 className='font-bold text-lg my-2'>{category.category}</h2>
            <p>{category.availability} Jobs Available</p>
        </div>
    );
};

export default Category;