import React from 'react'

// const Header = (props) => {



//   const logOutUser=()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('');
//     // window.location.reload();
//   }
//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{props.firstName}</span></h1>
//       <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'>Log out</button>
//     </div>
//   )
// }

// export default Header





const Header = (props) => {

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('');
    // window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{props.firstName}</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'>Log out</button>
    </div>
  )
}

export default Header