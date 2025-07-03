// import React, { useContext } from 'react'
// import { useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {

//     // const [userData, setuserData] = useContext(AuthContext)
//     const [taskTitle, settaskTitle] = useState('')
//     const [taskDescription, settaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [assignTo, setAssignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const [newTask, setNewTask] = useState('')

//     const submitHandler = (e) => {
//         e.preventDefault()
//         setNewTask({ taskTitle, taskDate, taskDate, category, active: false, newTask: true, completed: false, failed: false })

//         const data = JSON.parse(localStorage.getItem('employees'))
//         data.forEach(function (elem) {
//             if (assignTo == elem.firstName) {
//                 elem.tasks.push(newTask)

//                 elem.taskCounts.newTask = elem.taskCounts.newTask + 1
//             }

//         })

//         localStorage.setItem('employees', JSON.stringify(data))
//         settaskTitle('')
//         setTaskDate('')
//         settaskDescription('')
//         setCategory('')
//         setAssignTo('')
//     }


//     return (

//         <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
//             <form onSubmit={(e) => {
//                 submitHandler(e)
//             }} className='flex flex-wrap w-full items-start justify-between'>
//                 <div className='w-1/2'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
//                     <input
//                         value={taskTitle}
//                         onChange={(e) => {
//                             settaskTitle(e.target.value)
//                         }}

//                         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make UI Design' />
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input
//                             value={taskDate}
//                             onChange={(e) => {
//                                 setTaskDate(e.target.value)
//                             }}

//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="Date" />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
//                         <input
//                             value={assignTo}
//                             onChange={(e) => {
//                                 setAssignTo(e.target.value)
//                             }}


//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>category</h3>
//                         <input
//                             value={category}
//                             onChange={(e) => {
//                                 setCategory(e.target.value)
//                             }}

//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design,dev etc' />
//                     </div>
//                 </div>

//                 <div className='w-1/2'>

//                     <h3 className='text-sm text-gray-300 mb-0.5'>Discription</h3>
//                     <textarea
//                         value={taskDescription}
//                         onChange={(e) => {
//                             settaskDescription(e.target.value)
//                         }}

//                         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
//                 </div>

//                 <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>

//             </form>
//         </div>

//     )
// }

// export default CreateTask

// import React, { useState } from 'react'

// const CreateTask = () => {
//   const [taskTitle, setTaskTitle] = useState('')
//   const [taskDescription, setTaskDescription] = useState('')
//   const [taskDate, setTaskDate] = useState('')
//   const [assignTo, setAssignTo] = useState('')
//   const [category, setCategory] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()

//     const newTask = {
//       title: taskTitle,
//       description: taskDescription,
//       category: category,
//       date: taskDate,
//       active: false,
//       newTask: true,
//       completed: false,
//       failed: false,
//     }

//     // Get data from localStorage
//     const data = JSON.parse(localStorage.getItem('employees')) || []

//     let employeeFound = false

//     const updatedEmployees = data.map((employee) => {
//       if (employee.firstName === assignTo) {
//         employeeFound = true

//         const updatedTasks = [...employee.tasks, newTask]
//         const updatedSummary = {
//           ...employee.taskSummary,
//           newTask: employee.taskSummary.newTask + 1,
//           count: employee.taskSummary.count + 1,
//         }

//         return {
//           ...employee,
//           tasks: updatedTasks,
//           taskSummary: updatedSummary,
//         }
//       }
//       return employee
//     })

//     if (!employeeFound) {
//       alert(`Employee with name "${assignTo}" not found.`)
//       return
//     }

//     localStorage.setItem('employees', JSON.stringify(updatedEmployees))

//     // Reset form
//     setTaskTitle('')
//     setTaskDescription('')
//     setTaskDate('')
//     setAssignTo('')
//     setCategory('')
//   }

//   return (
//     <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
//       <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
//         <div className='w-1/2'>
//           <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
//           <input
//             value={taskTitle}
//             onChange={(e) => setTaskTitle(e.target.value)}
//             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//             type="text"
//             placeholder='Make UI Design'
//             required
//           />
//           <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//           <input
//             value={taskDate}
//             onChange={(e) => setTaskDate(e.target.value)}
//             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//             type="date"
//             required
//           />
//           <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
//           <input
//             value={assignTo}
//             onChange={(e) => setAssignTo(e.target.value)}
//             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//             type="text"
//             placeholder='employee name'
//             required
//           />
//           <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//           <input
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//             type="text"
//             placeholder='design, dev etc'
//             required
//           />
//         </div>

//         <div className='w-1/2'>
//           <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//             rows="10"
//             required
//           ></textarea>
//         </div>

//         <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
//           Create Task
//         </button>
//       </form>
//     </div>
//   )
// }

// export default CreateTask

import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask