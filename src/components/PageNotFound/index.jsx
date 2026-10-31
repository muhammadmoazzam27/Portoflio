import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='bg-black h-screen w-screen flex justify-center items-center overflow-hidden'>
            <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-10 w-full max-w-2xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-center">
                    404 Not Found
                </h1>
                <div className="h-px w-48 sm:w-64 md:w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-4 sm:my-6 md:my-7"></div>
                <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-sm sm:max-w-md md:max-w-lg text-center px-2">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    to="/" 
                    className="group flex items-center gap-2 bg-white hover:bg-gray-200 px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base text-gray-800 rounded-full mt-8 sm:mt-10 font-medium active:scale-95 transition-all shadow-lg"
                >
                    Back to Home
                    <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound