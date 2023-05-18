import React from 'react';
import Lottie from "lottie-react";
import errorlottie from '../../../public/error-page.json'


import { Link, useRouteError } from 'react-router-dom';

const ErroePage = () => {
    const { error } = useRouteError()
    return (
        <div className='flex justify-center'>

            <div className='text-center'>
            <Lottie animationData={errorlottie} loop={true} />;
                <p className='text-2xl font-semibold md:text-3xl mb-8'>
                    {error?.message}
                </p>
                <Link
                    to='/'
                    className='px-8 py-3 font-semibold rounded bg-gray-900 text-white'
                >
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default ErroePage;