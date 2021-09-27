import React, {Fragment} from 'react';
import GoogleLogin from "react-google-login";
import './Sign.css';


class Sign extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    render() {

        const responseGoogle = (response) => {
            console.log(response);
        }
        return (
            <Fragment>



                <div className="font-sans">
                    <div className="relative min-h-screen flex flex-col sm:justify-center items-center ">
                        <div className="relative sm:max-w-sm w-full">
                            <div
                                className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                            <div
                                className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                                <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                   Sign in
                                </label>


                                <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}  className="mt-10">

                                    <div>
                                        <input type="text"  placeholder="userName" name="username" value={this.state.fields.username} onChange={this.handleChange}
                                               className="mt-1 block w-full border-none bg-gray-100 h-11 focus:outline-none rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                        <div className="errorMsg ml-10">{this.state.errors.username}</div>
                                    </div>

                                    <div className="mt-7">
                                        <input  type="text" placeholder="email" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}
                                               className="mt-1 block w-full border-none  focus:outline-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                        <div className="errorMsg ml-10">{this.state.errors.emailid}</div>
                                    </div>


                                    <div className="mt-7">
                                        <input  type="text" placeholder="Mobile" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}
                                                className="mt-1 block w-full border-none  focus:outline-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                        <div className="errorMsg ml-10">{this.state.errors.mobileno}</div>
                                    </div>


                                    <div className="mt-7">
                                        <input type="password" placeholder="Password"
                                               className="mt-1 block w-full border-none  focus:outline-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                    </div>


                                    <div className="mt-7">
                                        <button
                                            className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Sign in
                                        </button>
                                    </div>

                                    <div className="flex mt-7 items-center text-center">
                                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                                            <label className="block font-medium text-sm text-gray-600 w-full">
                                               Sign In with
                                            </label>
                                            <hr className="border-gray-300 border-1 w-full rounded-md"/>
                                    </div>

                                    <div className="flex mt-7 justify-center w-full">
                                        <button
                                            className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                            Facebook
                                        </button>

                                        {/*<button*/}
                                        {/*    className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">*/}

                                        {/*    Google*/}
                                        {/*</button>*/}
                                        <GoogleLogin
                                            clientId="689220892326-n84n8se0k8c3elnin1natltqq8hpocn4.apps.googleusercontent.com"
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }


}


export default Sign;