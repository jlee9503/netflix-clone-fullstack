import React from 'react'

const Login = () => {
  return (
    <div className='login-container w-full h-[100vh] flex justify-center items-center'>
      <form className='text-white bg-black w-[400px] h-fit rounded px-8 py-7'>
        <h3 className='text-4xl font-bold mb-5'>Sign in</h3>
        <input type='text' placeholder='Email or phone number' className='w-full mb-4 py-3 px-2 rounded bg-gray-500 placeholder:text-white' />
        <input type='password' placeholder='Password' className='w-full py-3 px-2 rounded bg-gray-500 placeholder:text-white' />
        <button className='w-full py-2 rounded bg-red-500 hover:bg-red-600 my-5'>Sign In</button>
        <p>New to Netflix? <span className='font-bold cursor-pointer'>Sign up now.</span></p>
        <small className='mt-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='cursor-pointer text-blue-500 underline'>Learn more</span></small>
      </form>
    </div>
  )
}

export default Login