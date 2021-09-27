import React, {Fragment} from "react";
import { Link} from "react-router-dom";
import './Card.css'
import {ShowCard} from "./ShowCard/ShowCard";


export const Card = (props) =>(
    <Fragment>


    <Link to={`/ShowCard${props.robot.id}/${props.robot.first_name}/${props.robot.last_name}/${props.robot.email}/${props.robot.money}`}>
            <div className=" animate__animated animate__rotateInDownLeft bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg mainCard ">
            <img className=" w-full rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500 " src={`https://robohash.org/${props.robot.id}.png`} alt="Robot" />
            <div className="py-6 px-8 rounded-lg bg-white">
            <h2 className="text-gray-700 font-bold text-2xl  mb-3 hover:text-gray-900 hover:cursor-pointer">I'm super Robot.</h2>
            <p className="text-gray-700 tracking-wide text-xl font-bold">Name : {props.robot.first_name} {props.robot.last_name}</p>
            <p className="text-gray-700 tracking-wide text-sm font-bold mb-16"> Email : {props.robot.email}</p>
            <button className="absolute bottom-5 mt-6  py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">more detail...</button>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
            <span className="text-md">{props.robot.money}</span>
            </div>
            </div>

    </Link>

               </Fragment>
)