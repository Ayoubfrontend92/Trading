import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="content">
                <h2>Join Our Adubi Community</h2>
                <form action='https://getform.io/f/3f24b39a-5087-439d-aa08-e2d441673876' method="POST">
                    <div className="form-container display-col">
                        <input type="email" name='email' placeholder='Enter your email' />
                        <button className="btn">Sign Up</button>
                    </div>
                    <div className="form-container">
                        <input type="checkbox"/> <p>Yes, I agree to receive email communications from Adubi.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscribe