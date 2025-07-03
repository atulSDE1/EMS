// import React from 'react'

// const TaskListNumbers = ({data}) => {
//     return (
//         <div className='flex mt-10 justify-between gap-5 screen'>
//             <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400'>
//                 <h2 className='text-3xl font-semibold'>{data.taskSummary.newTask}</h2>
//                 <h3 className='text-xl font-semibold'>New Task</h3>
//             </div>
//              <div className='px-9 py-6 rounded-xl w-[45%] bg-blue-400'>
//                 <h2 className='text-3xl font-semibold'>{data.taskSummary.completed}</h2>
//                 <h3 className='text-xl font-semibold'>Completed Task</h3>
//             </div>
//              <div className='px-9 py-6 rounded-xl w-[45%] bg-green-400'>
//                 <h2 className='text-3xl font-semibold'>{data.taskSummary.active}</h2>
//                 <h3 className='text-xl font-semibold'>Accept Task</h3>
//             </div>
//              <div className='px-9 py-6 rounded-xl w-[45%] bg-yellow-400'>
//                 <h2 className='text-3xl font-semibold'>{data.taskSummary.failed}</h2>
//                 <h3 className='text-xl font-semibold'>Failed Task</h3>
//             </div>
//         </div>
//     )
// }

// export default TaskListNumbers

import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400 '>
            <h2 className='text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 text-black font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers