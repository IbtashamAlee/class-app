import React from 'react'
import { Link } from 'react-router-dom'
import image from '../design.png'

const LandingPage = () => {
    return (
        <div className='lan-page'>
            <div className='container-fluid px-4 py-3 lan-page-head'>
              <span className='lan-page-head-logo'>Class Manager</span>
              <Link to='/signin' className='signin-btn'>sign in</Link>
            </div>

            <div className='lan-page-body'>
                
              <div className='lan-page-body-dark'>
              <img src={image} className='hero-image'/>
                <div className="dark">
                <span className='lan-page-body-ol'>
                    Stay in contact to teach and learn
                </span>
                <br/>
                <span className='lan-page-site-name'>
                    Class Manager
                </span>
                <br/>
                <Link to='/signup' className='signup-btn'>sign up</Link>
              </div>
              </div>
              <div className='container-fluid lan-page-body-med mt-2'>
                <div className='lan-page-body-med-l'>
                  <span>Product description</span>
                </div>
                <div className='lan-page-body-med-r'>
                  <span>Product</span>
                </div>
              </div>

              <div className='container-fluid lan-page-body-light mt-2'>
                <div className='lan-page-body-light-l'>
                  <span>Features</span>
                </div>
                <div className='lan-page-body-light-r'>
                  <span>features description</span>
                </div>
              </div>

            </div>

            <div className='lan-page-footer'>
                <span className='lan-page-footer-logo'>
                    Class Manager
                    </span>
            </div>
        </div>
    )
}

export default LandingPage
