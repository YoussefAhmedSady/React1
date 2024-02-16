import React from 'react';

const Contact = () => {
    return <>
    <div className="container py-5 mt-5 text-center">
        <h2>CONATCT SECTION</h2>
        <div className="d-flex justify-content-center align-items-center">
            <div className="line2 me-2"></div>
            <div className="position-relative star "><i className="fa-solid fa-star"></i></div>
            <div className="line2 ms-2"></div>
            </div>
            
                <input type="text" placeholder='UserName'   className='w-100 rounded-2  shadow my-3' />
                <input type="text" placeholder='userAge'   className='w-100 rounded-2  shadow my-3' />
                <input type="text" placeholder='userEmail'   className='w-100 rounded-2  shadow my-3' />
                <input type="text" placeholder='userPassword'  className='w-100 rounded-2  shadow my-3'  />
                <div className="text-start"> <button className='  main-color border-0 text-white p-3 rounded-4 px-5 '>Submit</button></div>
            
    </div>
    </>
}

export default Contact;
