import React from 'react'

const Tech = () => {
    return (
        <div className="px-5 mt-6">
            <div className='md:px-10 mb-2 grid gap-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>

                <div href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Frontend</h5>
                    <div className="flex flex-wrap   mx-auto">
                        <p className='border border-green-700 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Html</p>
                        <p className='border border-teal-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Css</p>
                        <p className='border border-blue-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Java Script</p>
                        <p className='border  border-indigo-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>React Js</p>
                        <p className='border border-purple-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Next Js</p>
                        <p className='border border-pink-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>React Native</p>
                    </div>
                </div>
                <div href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backend</h5>
                    <div className="flex flex-wrap   mx-auto">
                        <p className='border border-red-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Node Js</p>
                        <p className='border border-pink-500 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Express</p>
                        <p className='border  border-green-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Laravel</p>
                        <p className='border border-orange-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Php</p>
                        {/* <p className='border mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Next Js</p> */}
                        {/* <p className='border mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>React Native</p> */}
                    </div>
                </div>
                <div href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Database</h5>
                    <div className="flex flex-wrap   mx-auto">
                        <p className='border border-yellow-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>MySql</p>
                        <p className='border border-teal-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>MongoDB</p>
                        <p className='border border-purple-600 mt-2 ms-2 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>FireBase</p>

                    </div>
                </div>
                <div href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Devops</h5>
                    <div className="flex flex-wrap   mx-auto">
                        <p className='border mt-2 ms-2 border-pink-700 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Docker</p>
                        <p className='border mt-2 ms-2 border-pink-700 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>Git</p>
                        <p className='border mt-2 ms-2 border-pink-700 dark:text-white dark:bg-slate-900 rounded-lg bg-gray-100 px-2 py-1'>AWS</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tech
