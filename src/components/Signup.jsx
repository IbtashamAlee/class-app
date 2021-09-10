import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    const [email,setEmail]=useState('')
    const [fullName,setFullName]=useState('')
    const [password,setPassword]=useState('')
    const [isTutor,setIsTutor]=useState(false)
    const [alert,setAlert]=useState(false)

    const submitHandle=(e)=>{
        e.preventDefault();

        console.log(isTutor)

        if(!email||!fullName||!password)
        {
            setAlert(true)
        }
        else{
            setAlert(false)
            setEmail('')
            setFullName('')
            setPassword('')
            setIsTutor(false)
        }

    }

    return (
        <div className='signin'>
            <div className="form">
            <span className='signin-logo mt-3'>
                Class Manager
            </span>
            <span style={{color:'#F2962F',marginTop:'10px'}}>Sign up to your account</span>
            <span style={{color:'#006989'}}>or</span>
            <Link to='/signin' className='form-links'>Login with existing account</Link>
            {alert&&
                <span style={{color:'red',fontSize:'12px'}}>
                    Please complete form
                </span>}
            <form className='container signin-form m-3' onSubmit={submitHandle}>
                <input className='inp-fields m-3' 
                type='email' 
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/>
                <input className='inp-fields m-3'
                type='text' 
                placeholder='Full name'
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                />
                <br/>
                <input className='inp-fields m-3'
                type='password' 
                placeholder='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/>
                <div className="form-checkbox">
                  <input type='checkbox'
                  onChange={(e)=>setIsTutor(e.target.checked)}
                  />
                  <span className='checkbox-ol mx-3'>I'm a teacher</span>
                </div>
                <br/>
                <button className='form-signin-btn my-3' type='submit'>Sign up</button>
            </form> 
            </div>
        </div>
    )
}

export default Signup
