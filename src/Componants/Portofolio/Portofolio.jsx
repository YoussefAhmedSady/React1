import React, { useState } from 'react';
import img1 from '../../Assets/poert1.png'
import img2 from '../../Assets/port2.png'
import img3 from '../../Assets/port3.png'
import style from './porto.module.css'
const Portofolio = () => {
    const [img, setimg] = useState('');
    const [layout, setlayout] = useState(false);
    let imges=[{img:img1 ,id:1},{img:img2,id:2},{img:img3,id:3},{img:img1, id:4},{img:img2,id:5},{img:img3,id:6}]
    function viewImg(img) {
        setlayout(true)
        setimg(img)
    }
    function closeView() {
        setlayout(false)
    }
    return <>
    {layout==true?<div className='layimg d-flex justify-content-center align-items-center' onClick={()=>{closeView()}}>
        <img src={img} alt=""  className='w-50 '/>
    </div>:''}
   <div className=" d-flex justify-content-center align-items-center mt-5 text-center">
   <div className="mt-5">
   <h2 className='fw-bolder fs-1'>PORTFOLIO COMPONENT</h2>
    <div className="d-flex justify-content-center align-items-center">
            <div className="line2 me-2"></div>
            <div className="position-relative star "><i className="fa-solid fa-star"></i></div>
            <div className="line2 ms-2"></div>
            </div>
            <div className="container py-5 ">
            <div className="row gy-3">
            {imges.map(img=><div className={style.item2+' '+'col-lg-4'} onClick={()=>{viewImg(img.img)}}  key={img.id}> 
            <div className="position-relative"><img src={img.img} alt="#" className='w-100' />
            <div className={style.item3+' '+'d-flex justify-content-center align-items-center'}>
            <i className="fa-solid fa-plus fa-5x text-white"></i>
            </div>
            </div>
             </div>)}
            </div>
        </div>
   </div>
   </div>
    </>
}
export default Portofolio;
