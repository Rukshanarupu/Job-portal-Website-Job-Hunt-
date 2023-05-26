import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold py-10 bg-slate-100'>What are the Questions in your mind?</h1>
            </div>
            <div className='container mx-auto'>
                <div className='my-3'>
                    <h2 className='font-bold text-xl'>(Qs. No. 1) When should you use context API?</h2>
                    <p><span className='text-violet-600 font-semibold my-3'>Use of context API: </span>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context</p>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>(Qs. No. 2) What is a custom hook?</h2>
                    <p><span className='text-violet-600 font-semibold mt-3'>Custom hook: </span>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                    <p className='mb-3 mt-2'>With custom React Hooks, we can reuse stateful logic easily across different components in an optimized and scalable format. Custom Hooks also produce a clean and structured codebase that reduces complexity and redundancy in your React project.</p>
                </div>
                <div className='my-3'>
                    <h2 className='font-bold text-xl'>(Qs. No. 3) What is useRef?</h2>
                    <p><span className='text-violet-600 font-semibold my-3'>useRef:</span> The useRef Hook allows you to persist values between renders. <br /> It can be used to store a mutable value that does not cause a re-render when updated.
    <br /> It can be used to access a DOM element directly.</p>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>(Qs. No. 4) What is useMemo?</h2>
                    <p><span className='text-violet-600 font-semibold my-3'>useMemo:</span> useMemo is a hook in React that allows you to optimize the performance of your functional components by memoizing the results of expensive calculations.The basic idea behind useMemo is that it will only recompute the memoized value when one of its dependencies changes. This can help avoid expensive calculations being repeated unnecessarily on each component render.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;