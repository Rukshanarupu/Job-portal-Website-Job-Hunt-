import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-gray-100'>
        <div className="container mx-auto navbar md:flex flex-col md:flex-row justify-between">
            <div className='flex justify-between lg:w-3/4'>
                <div className="navbar ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                            <li><NavLink to='./' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
                            <li className='my-2'><NavLink to='./statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink></li>
                            <li><NavLink to='./application' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink></li>
                            <li className='mt-2'><NavLink to='./blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to='./' className="btn btn-ghost normal-case text-xl">
                        <FontAwesomeIcon className='w-6 h-6 text-violet-500 pr-2' icon={faLocation} />
                        JobHunt
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='./' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
                        <li className='mx-2'><NavLink to='./statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink></li>
                        <li><NavLink to='./application' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink></li>
                        <li className='ml-2'><NavLink to='./blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <a className="btn my-btn">Start Applying</a>
            </div>
        </div>
    </div>
  );
};

export default Header;