import React from "react";

function Footer() {
    return (
        <>
            <footer className="bg-gray-800 p-5 grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-2 pb-2 md:mb-0">
                    <span className="text-gray-200"> more detail</span>
                    <ul className="pt-5 text-gray-400">
                        <li>Lorem ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        <li>+0912234598</li>

                    </ul>
                </div>
                <div className="md:col-span-2 pb-2 md:mb-0">
                    <span className="text-gray-200">Follow us</span>
                    <ul className="pt-5 text-gray-400">
                        <li><a  target="_blank" className="hover:underline" href="https://www.instagram.com/amirjahan_1"> <i className="fa fa-instagram"></i> Instagram </a></li>
<li><a target="_blank"  className="hover:underline" href="https://twitter.com/amirjahan_1"><i className="fa fa-twitter"></i> Twitter </a></li>
<li><a target="_blank"  className="hover:underline" href="https://t.me/Amirjahan_1"><i className="fa fa-telegram"></i> Telegram </a></li>
                     </ul>
                </div>
                <div className="md:col-span-2 pb-2 md:mb-0">
                    <span className="text-gray-200">Service</span>
                    <ul className="pt-5 text-gray-400">
                        <li>Robotic</li>
                        <li>AIO</li>
                        <li>Machin learning</li>
                    </ul>
                </div>

                <div className="md:col-span-4 pb-2 md:mb-0">
                    <span className="text-gray-200">News About ROBOT</span>
                    <div className="pt-5">
                        <input type="text" className="rounded p-2 w-full"
                               placeholder="Join US for new robot ..."/>
                            <button className="bg-red-600 text-white px-3 py-2 rounded mt-2">Join us ;)</button>
                    </div>
                </div>
                <div className="mt-5 md:col-span-12 text-center text-gray-400 pt-2">
                   A project build with <a href="https://github.com/amirjahan1" target="_blank" className="underline font-extrabold">Amir Jahan</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
