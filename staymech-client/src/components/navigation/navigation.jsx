import React from "react";
import logo from "../../cogs-solid.svg";

import "./navigation.scss";
// import history from "../../history";

class Navbar extends React.Component {

    render() {
        return (
            <div className="container ">
                <nav className="navbar navbar-expand-lg mt-2">
                    <a className="navbar-brand" href="/"><img src={logo} alt="logo" className="logo-img"/>StayMech</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="#" >Practice</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" >Contests</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">

                            <a className="nav-link" href="/login" >SignIn/SignUp</a>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;