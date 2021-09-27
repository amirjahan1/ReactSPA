import React, {Fragment, useState, useContext, useEffect} from "react";
import { NavLink} from "react-router-dom";
import Burger from 'react-css-burger';
import "./Navbar.css"
import {ShowCard} from "../../CardList/Card/ShowCard/ShowCard";
import BasketBuyContext from "../../../Context/BasketBuy";



function Navbar () {

const currentcontext = useContext(BasketBuyContext)

    const [nav , setnav] = useState(true)

    const [current,setcurrent] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setcurrent(currentcontext.basketbuy.length);
        }, 10);
    }, [currentcontext.basketbuy.length]);

    const handelClick = () => {
      setnav(!nav)
    }

    function clickme(){


    console.log( currentcontext.basketbuy.length )

    }

 return(
    <BasketBuyContext.Consumer>
        { context=>(
            <nav
                className={`w-full relative transition duration-150 ease-in-out justify-between mb-10 flex bg-indigo-700 ${nav ? "close" : "open"} `}>

                <div onClick={handelClick} className="ml-4 absolute top-0 sm:hidden">

                    <Burger

                        active={!nav}
                        burger="arrow"
                        color="gray"
                        hoverOpacity={0.8}
                        scale={1.2}
                    />


                </div>


                <ul className="flex sm:flex-row  flex-col py-4 mx-4">

                    {/*   Home  */}
                    <li className="px-2  mx-2 transition duration-250 ease-in-out hover:text-white ">
                        <NavLink exact to="/" activeClassName="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 inline bottom-1 mx-1 relative w-6"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                            Home</NavLink></li>

                    {/*   Sign In  */}
                    <li className="px-2 mx-2 transition duration-250 ease-in-out hover:text-white ">
                        <NavLink to="/Sign" activeClassName="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 inline bottom-0.5 mx-1 relative w-6"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                            </svg>
                            Sign in</NavLink></li>


                    {/*  About Us  */}
                    <li className="px-2 mx-2 transition duration-250 ease-in-out hover:text-white ">
                        <NavLink activeClassName="text-white" to="/About">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 inline bottom-0.5 mx-1 relative w-6"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            About us</NavLink></li>


                    <li className="px-2 mx-2 transition duration-250 ease-in-out hover:text-white ">
                        <NavLink activeClassName="text-white" to="/ShoppingCart">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 inline bottom-0.5 mx-1 relative w-6"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                            Basket <span
                            className="w-6 h-6 rounded-2xl text-center inline-block bg-gray-700" >  {currentcontext.basketbuy.length}</span></NavLink>
                    </li>


                </ul>

                <div className="flex items-center justify-center">
                    <h2 className="text-2xl" id="roboLandtxt">Robo LAnd</h2>
                    <img src="https://robohash.org/106.5.174.79.png" className="w-16" alt="Robot" id="roboLandlog"/>

                </div>
            </nav>
        )}
    </BasketBuyContext.Consumer>)


}

export default Navbar