import React, { useState } from 'react';
const Categoury = () => {
    let [count,setcount]=useState(0)
    function changeCount() {
        setcount(Math.random())
    }
    return<>
    <div className="container">
    <h2>{count}</h2>
    <button className='btn btn-outline-success' onClick={changeCount} >Change</button>
    </div>
    </>
}

export default Categoury;
