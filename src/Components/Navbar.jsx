import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-navbarColor py-5'>
    <div className='flex justify-around text-textColor'>
        <h1 className='text-2xl'>Notes App</h1>
        <div>
            <button className='border p-2 rounded bg-textColor text-navbarColor font-semibold '>SingUp</button>
        </div>
    </div>
    </header>
  )
}

export default Navbar
