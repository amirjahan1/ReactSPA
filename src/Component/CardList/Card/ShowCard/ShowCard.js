import React , {useState , useEffect , useContext} from "react";
import {useParams} from "react-router-dom";
import BasketBuyContext from "../../../../Context/BasketBuy";


const ShowCard = (props) => {

    const intialState = useContext(BasketBuyContext);
    const [ basket , setBasket] = useState(intialState.basketbuy)
    const { id , fname , lname , email , money } = useParams();

    useEffect(()=> {
       setBasket(prevstate =>
           [...prevstate,
               {
                   'id': id,
                   'fname': fname,
                   'lname': lname,
                   'email': email,
                   'money': money,
               }
              ])

   },[])
    // onClick Function
    function buyrobo (){
        setBasket(prevstate =>
            [
            ...prevstate,
                {
                    'id': id,
                    'fname': fname,
                    'lname': lname,
                    'email': email,
                    'money': money,
                }])
       intialState.basketbuy = basket
        intialState.current += 1
        console.log(intialState.current)

    }

return(
    <BasketBuyContext.Provider value={{
        basket : intialState.basketbuy,
        current : intialState.current
    }}>
    <div className="flex flex-col justify-center items-center mt-5">

            <div className="w-4/12">
                <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6">
                    <div className="flex flex-col ">
                        <div className="">
                            <div className="relative h-62 w-full mb-3">
                                <div className="absolute flex flex-col top-0 right-0 p-3">

                                </div>
                                <img
                                    src={`https://robohash.org/${id}.png`}
                                    alt="Just a flower" className=" w-full   object-fill  rounded-2xl"/>
                            </div>
                            <div className="flex-auto justify-evenly">
                                <div className="flex flex-wrap ">
                                    <div className="w-full flex-none text-sm flex items-center text-gray-600">






                                    </div>
                                    <div className="flex items-center w-full justify-between min-w-0 ">
                                        <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate "> my name is {fname} {lname}</h2>
                                        <div
                                            className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                                            Offer
                                        </div>
                                    </div>
                                    <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate "> my email is {email}</h2>
                                </div>
                                <div className="text-xl text-white font-semibold mt-1">{money}</div>
                                <div className="lg:flex  py-4  text-sm text-gray-600">
                                    <div className="flex-1 inline-flex items-center  mb-3">
                                        <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                            <ul className="flex flex-row justify-center items-center space-x-2">
                                                <li className="">
                        <span
                            className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                          <a href="#blue" className="block w-3 h-3 bg-blue-600 rounded-full"></a>
                        </span>
                                                </li>
                                                <li className="">
                        <span
                            className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                          <a href="#yellow" className="block w-3 h-3  bg-yellow-400 rounded-full"></a>
                        </span>
                                                </li>
                                                <li className="">
                        <span
                            className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                          <a href="#red" className="block w-3 h-3  bg-red-500 rounded-full"></a>
                        </span>
                                                </li>
                                                <li className="">
                        <span
                            className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                          <a href="#green" className="block w-3 h-3  bg-green-500 rounded-full"></a>
                        </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex-1 inline-flex items-center mb-3">
                                        <span className="text-secondary whitespace-nowrap mr-3">Size</span>
                                        <div className="cursor-pointer text-gray-400 ">
                                            <span className="hover:text-purple-500 p-1 py-0">S</span>
                                            <span className="hover:text-purple-500 p-1 py-0">M</span>
                                            <span className="hover:text-purple-500 p-1 py-0">L</span>
                                            <span className="hover:text-purple-500 p-1 py-0">XL</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-2 text-sm font-medium justify-start">
                                    <button onClick={buyrobo}
                                        className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                        <span>Buy me ;)</span>
                                    </button>
                                    <button
                                        className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BasketBuyContext.Provider>
)
}

export default ShowCard