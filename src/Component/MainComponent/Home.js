import React, {Component, Fragment} from "react";
import {CardList} from "../CardList/CardList";
import {SearchBox} from "../SearchComponent/SearchBox";
import axios from "axios";
import BasketBuyContext from "../../Context/BasketBuy";

class Home extends Component{
    constructor() {
        super();
        this.state={
            robots:[],
            searchRobot:"",
            start:0,
            end:0,
        }
    }

   async componentDidMount() {
      await  axios.get("https://mocki.io/v1/f1cdab7d-f382-4cb8-895b-34dea68f9c30")
            .then(response => this.setState({ robots : response.data}) )
             .catch(error => console.log(error))
       await this.setState({ end : Math.ceil(this.state.robots.length / 9)})
        }


    HandelChange = e => {this.setState({ searchRobot: e.target.value})}


    pagedown =()=>{
        if (this.state.start  == 0 ){
            alert("Have not any item")
            document.getElementById("pagedown").setAttribute("disabled", "disabled")
            document.getElementById("pageup").removeAttribute("disabled");
        }
        else {
            document.getElementById("pagedown").removeAttribute("disabled");
            document.getElementById("pageup").removeAttribute("disabled");
            this.setState({
                start: this.state.start - 10,
                end: this.state.end - 10
            })
        }
    }

    pageother =(e)=>{

            this.setState({
                start : parseInt(e.target.innerText) * 10 - 10,
                end :   parseInt(e.target.innerText) * 10 ,
            })

    }


    pageup =()=>{
        if (this.state.end == 90 ){
            alert("have not any item")
            document.getElementById("pageup").setAttribute("disabled", "disabled")
            document.getElementById("pagedown").removeAttribute("disabled");
        }
        else {
            document.getElementById("pageup").removeAttribute("disabled");
            document.getElementById("pagedown").removeAttribute("disabled");
            this.setState({
                start : this.state.start + 10,
                end : this.state.end + 10
            })
        }
    }

    render() {
        const {robots , searchRobot ,start , end} = this.state
        const filterRobot = robots.slice(start,end).filter( robots => robots.first_name.toLowerCase().includes(searchRobot.toLowerCase()))
        // console.log( "start : " + start + ".........." + "end : " + end)


        return(
            <Fragment>

              <SearchBox handelchange={this.HandelChange} />
                <CardList robots={filterRobot}  />




                {/*         Pagination start             */}
                <div className="pagination w-full flex justify-evenly my-5">

                    <div className="container mx-auto px-4">

                        <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
                             aria-label="Pagination">


                            <button onClick={this.pagedown}
                            id="pagedown"
 className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
                                 title="Previous Page">
                                <span className="sr-only" >Previous Page</span>
                                <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true"
                                     role="presentation">
                                    <path
                                        d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                                </svg>
                            </button>



                            {
                               this.state.robots.filter((item , index)=>  index < 9 ,).map((val,index   )=>{
                                    return (
                                        <div key={index} className="flex items-center space-x-1">
                                            {

                                                <span onClick={this.pageother}
      className={`px-4 mx-2 py-2 cursor-pointer bg-gray-200 

      ${ (index  / 10) * 100  == this.state.start ? " bg-blue-400 text-white " : "bg-gray-200 text-gray-700"}
        rounded-md hover:bg-blue-400 hover:text-white`}>
                                                {index + 1}
                                                 </span>
                                            }
                                        </div>
                                            )
                            })
                            }


                            <button
                                onClick={this.pageup}
                                id="pageup"
     className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
                                 title="Next Page">
                                <span className="sr-only" >Next Page</span>
                                <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true"
                                     role="presentation">
                                    <path
                                        d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                                </svg>
                            </button>

                        </nav>
                    </div>
                </div>
                {/*           Pagination Finish              */}


            </Fragment>
        )
    }

}

export default Home;