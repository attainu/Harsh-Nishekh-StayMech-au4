import React from "react";

import "./practice.scss";
import Navbar from "../navigation/navigation";

/* eslint no-use-before-define: 0 */
class Practice extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="shadow-sm p-3 mb-5 bg-white rounded practice-head">
                    <p>
                        Practice
                    </p>
                    <h2>
                        Dashboard
                    </h2>
                </div>
                <div className="container ">
                    <h4>Skills Available For Practice</h4>
                    <div className="row shadow p-3 mb-5 bg-white rounded mt-4 practice-list">
                        <div className="col">
                            <ul class="list-group mt-2 mb-2 ">
                                <li class="list-group-item"><a href="">Production</a> </li>
                                <li class="list-group-item"><a href="">Manufacturing</a> </li>
                                <li class="list-group-item"><a href=""> Design</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul class="list-group mt-2 mb-2">
                                <li class="list-group-item"><a href="">Production</a> </li>
                                <li class="list-group-item"><a href="">Manufacturing</a> </li>
                                <li class="list-group-item"><a href=""> Design</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul class="list-group mt-2 mb-2">
                                <li class="list-group-item"><a href="">Production</a> </li>
                                <li class="list-group-item"><a href="">Manufacturing</a> </li>
                                <li class="list-group-item"><a href=""> Design</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4>Tutorials</h4>
                    <div class="row mb-5 mt-4 practice-tutorial">
                        <div class="col-sm-6 ">
                            <div class="card shadow p-3 mb-5 bg-white rounded">
                                <div class="card-body">
                                    <h5 class="card-title">Production</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">View Tutorial</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card shadow p-3 mb-5 bg-white rounded">
                                <div class="card-body">
                                    <h5 class="card-title">Manufacturing</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">View Tutorial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Practice;