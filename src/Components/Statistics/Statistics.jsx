import React from 'react';
import { AreaChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Area } from 'recharts';

const Statistics = () => {
    const marksArray = [
        {
          id: 1,
          name: "Assignment 1",
          Exam_Score: 65,
          Marks: 60
        },
        {
          id: 2,
          name: "Assignment 2",
          Exam_Score: 60,
          Marks: 59
        },
        {
          id: 3,
          name: "Assignment 3",
          Exam_Score: 60,
          Marks: 60
        },
        {
          id: 4,
          name: "Assignment 4",
          Exam_Score: 65,
          Marks: 58
        },
        {
          id: 5,
          name: "Assignment 5",
          Exam_Score: 60,
          Marks: 55
        },
        {
          id: 6,
          name: "Assignment 6",
          Exam_Score: 65,
          Marks: 58
        },
        {
          id: 7,
          name: "Assignment 7",
          Exam_Score: 60,
          Marks: 60
        },
        {
          id: 8,
          name: "Assignment 8",
          Exam_Score: 60,
          Marks: 60
        }
      ];
    //   console.log(marksArray)

        return (
            <div className=''>
                <div>
                    <h1 className='text-center text-3xl font-bold py-20 bg-slate-100'>Assignment Statistics</h1>
                </div>
                {/* width: 100%; height: 400px; min-width: 0px; */}
                <div className='container mx-auto my-10 flex justify-center'>
                    <AreaChart className='w-full'
                        width={1000}
                        height={500}
                        data={marksArray}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area 
                        type="monotone" 
                        dataKey="Exam_Score" 
                        stroke="#82ca9d" 
                        fillOpacity={1} 
                        fill="url(#colorUv)"
                        />
                        <Area 
                        type="monotone" 
                        dataKey="Marks" 
                        stroke="#8884d8"
                        fillOpacity={1} 
                        fill="url(#colorPv)"
                        />
                    </AreaChart>
                </div>
            </div>
        );
};

export default Statistics;

// onClick={() => setNumJobsToShow(jobs.length)}