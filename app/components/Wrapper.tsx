import React from 'react'
import { ToastContainer } from 'react-toastify'
import NavBar from './NavBar'

type WrapperProps = {
    children: React.ReactNode
}

const Wrapper = ({children}: WrapperProps) => {
  return (
    <div>
        <NavBar />
         <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
          />
      <div className='px-5 md:px-[10%] mt-8 mb-10'> 
        {children}
      </div>
    </div>
  )
}

export default Wrapper
