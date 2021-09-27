import React from "react";
import {Card} from "./Card/Card";


export const CardList=(props)=>(

    <div className="px-4 grid lg:grid-cols-5 md:grid-cols-3 md:grid-cols-2 gap-4">
        {
            props.robots.map(
                robot =>
<Card key={robot.id} robot={robot} />
            )
        }


            </div>
)