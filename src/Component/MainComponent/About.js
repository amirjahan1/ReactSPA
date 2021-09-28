import React, {Fragment} from "react";

export const About=()=>(

    <Fragment>

    <div className=" text-center   py-40">

        <div className="container flex text-center ml-auto mr-auto mt-20 max-w-lg  ">
            <div className="w-1/3 border border-green">
                <img src="./images/me.jpg"/>
            </div>
            <div className="w-2/3 p-8 bg-green-700 flex items-center text-blue-darker border border-green">
                <div className="text-center w-full"><h3 className="font-medium">Amir Jahan</h3>
                    <h2>FullSTACK DEVELOPER</h2>
                    <div/>
                    <div className="mt-8">
                        <a href="mailto: amirjahan454@gmail.com"
                           className="bg-blue text-white font-medium tracking-wide py-2 px-4 rounded-full shadow-md hover:shadow-lg no-underline"
                           target="_blank">
                            <i className="far fa-envelope"></i> Contact Me
                        </a>
                    </div>
                </div></div></div>
                </div>
    </Fragment>
)
