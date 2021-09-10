import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'


const Signin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [alert,setAlert]=useState(false)

    const submitHandle=(e)=>{
        e.preventDefault();

        console.log('email ',email)

        if(!email||!password)
        {
            setAlert(true)
        }
        else{
            setAlert(false)
            setEmail('')
            setPassword('')
        }
    }

    return (
        <div className='signin'>
            <div className="form">
            <span className='signin-logo mt-3'>
                Class Manager
            </span>
            <span style={{color:'#F2962F',marginTop:'10px'}}>Sign in to your account</span>
            <span style={{color:'#006989'}}>or</span>
            <Link to='/signup' className='form-links'>create new account</Link>
            {alert&&
                <span style={{color:'red',fontSize:'12px'}}>
                    Please complete form
                </span>}
            <form className='signin-form m-3' onSubmit={submitHandle}>
                <input className='inp-fields m-3' 
                type='email' 
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/>
                <input className='inp-fields m-3'
                type='password' 
                placeholder='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
               
                <br/>
                <Link to='/' className='form-links'>Forget your password?</Link>
                <br/>
                <button className='form-signin-btn my-3' type='submit'>Sign in</button>
            </form> 
            </div>
        </div>
    )
}

export default Signin
