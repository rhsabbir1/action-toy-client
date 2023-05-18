import React from 'react';
import img1 from '../../../assets/gallery1.jpg'
import img2 from '../../../assets/galley2.jpg'
import img3 from '../../../assets/gelley3.jpg'
import img4 from '../../../assets/gellary4.jpg'
import img5 from '../../../assets/gellary5.jpg'
import img6 from '../../../assets/gellary6.jpg'


const Gellary = () => {
    return (
        <div className=" bg-base-200"> 
                    <div>
                        <h1 className='text-center font-bold text-5xl my-8'>Our Gellaey</h1>
                    </div>
                <div className='w-4/6 mx-auto grid md:grid-cols-3 gap-2'>
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={img2} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={img3} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={img4} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={img5} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={img6} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
        </div>
    );
};

export default Gellary;