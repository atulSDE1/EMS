
import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data)
    return (

        <div className='h-full w-[300px] p-5 shrink-0 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-2 text-sm  py-1 rounded'>{data.category}</h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
            </div>

        </div>

    )
}

export default AcceptTask