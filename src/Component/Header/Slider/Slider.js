import {Carousel} from '3d-react-carousal';


let slides = [
    <img   src="images/1.jpg"  alt="1" />,
    <img   src="images/2.jpg"  alt="2" />  ,
    <img   src="images/3.jpg"  alt="3" />  ,
    <img   src="images/4.jpg"  alt="4" />  ,
    <img   src="images/5.jpg"  alt="5" />  ];
export const Slider = ()=>(
    <div className="w-full flex justify-center items-center hidden sm:block">
        <div className="my-5 lg:w-11/12 md:w-6/12 md:mx-auto sm:w-8/12 ">
        <Carousel slides={slides}  interval={1500}/>
        </div>
    </div>
)
