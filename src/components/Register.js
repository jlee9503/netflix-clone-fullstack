import React, { useRef, useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleEmail = () => { setEmail(emailRef.current.value); }
  const handlePassword = () => { setPassword(passwordRef.current.value); }
  return (
    <div className='login-container w-full h-[100vh]'>
      <div className='flex justify-between items-center'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='logo-img' className='w-[12rem] h-[6rem] ml-[5%]' />
        <button className='bg-red-500 text-white rounded px-[20px] py-[7px] text-xl mr-[5%] hover:bg-red-600'>Sign in</button>
      </div>
      <div className='h-[75%] flex flex-col justify-center items-center'>
        <p className='text-white font-bold text-[3.5rem]'>Unlimited movies, TV Shows, and more.</p>
        <p className='text-white font-bold text-[2rem] mb-4'>Watch anytime. Cancel anytime.</p>
        <p className='text-white text-[1.5rem] mb-8'>Ready to watch? Enter your email to create or restart your membership.</p>
        {!email ? (
          <div className='flex items-center'>
            <input type='email' className='w-[37rem] px-2 py-[15px] rounded-[5px]' placeholder='Enter your email' ref={emailRef} />
            <button className='bg-red-500 text-white rounded-[5px] px-[25px] py-[10px] text-2xl hover:bg-red-600' onClick={handleEmail}>Get Started</button>
          </div>
        ) : (
          <form className='flex items-center'>
            <input type='password' className='w-[37rem] px-2 py-[15px] rounded-[5px]' placeholder='Enter your password' ref={passwordRef} />
            <button className='bg-red-500 text-white rounded-[5px] px-[25px] py-[10px] text-2xl hover:bg-red-600' onClick={handlePassword}>Login</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register