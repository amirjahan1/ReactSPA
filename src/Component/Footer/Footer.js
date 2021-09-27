import React from "react";
function Footer() {
    return (
        <>

            <div className="font-open-sans mt-12 pt-10 bg-gray-700" >
                <div className="container mx-auto px-20 pb-10 flex">
                    <div className="w-1/3">
                        <h3 className="font-bold text-gray-400 text-3xl mb-4">About</h3>
                        <h3 className="text-gray-500 text-justify pr-3">
                            <b>Sathi Pest Control</b> is a locally focused service company which provides the best,
                            trustable, 100%
                            reliable service to your home, gaurden, hotels, commercial buildings etc. We believe in
                            transparency and
                            fair business and do not make empty declarations and promises.
                        </h3>
                    </div>
                    <div className="w-1/3 px-4">
                        <h3 className="font-bold text-gray-400 text-3xl mb-4">Facebook Page</h3>

                    </div>
                    <div className="w-1/3">
                        <h3 className="font-bold text-gray-400 text-3xl mb-4">Address</h3>
                        <h3 className="text-xl font-open-sans font-semibold text-gray-500 mb-4">Sathi Pest Control Pvt.
                            Ltd.</h3>
                        <p className="text-gray-500 text-justify">
                            <ul>
                                <li className="text-gray-500 py-2 font-bold">
                                    <i className="fas fa-map-marker-alt px-1 fill-current text-gray-600 mr-2"></i>

                                    Bhugal
                                    Park, New Road
                                    Kathmandu
                                </li>
                                <li className="text-gray-500 py-2 font-bold">
                                    <i className="fas fa-blender-phone fill-current text-gray-600 mr-2"></i>
                                    +977 9841060639, +977 9841141892
                                </li>
                                <li className="text-gray-500 py-2 font-bold">
                                    <i className="fas fa-envelope-open-text fill-current text-gray-600 mr-2"></i>
                                    sathipest@gmail.com
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <hr className="border-t border-gray-700"/>
                    <div className="container mx-auto px-20">
                        <div className="flex items-center justify-between">
                            <div className="py-4 text-gray-500">&copy; 2020 All right reserved.</div>
                            <div className="py-4 text-gray-500">
                                Design by
                                <a className="font-semibold text-gray-500 underline" target="_blank"
                                   href="https://bedramtamang.com.np">
                                    Amir Jahan</a>
                            </div>
                        </div>
                    </div>
            </div>


        </>
    );
}

export default Footer;
