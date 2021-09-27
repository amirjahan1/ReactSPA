import React, {Fragment} from "react";




export const SearchBox=(props)=>(
    <Fragment>
        <div className="p-8">
            <div className="bg-white flex items-center rounded-full shadow-xl">
                <input className="rounded-l-full w-full py-4 px-6 text-3xl text-gray-700 leading-tight focus:outline-none" onChange={props.handelchange}  id="search" type="text" placeholder="Search"/>

                <div className="p-4 ">
                    <button className="bg-blue-500 text-white rounded-full p-0 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="2 2 20 20 " stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </Fragment>
)