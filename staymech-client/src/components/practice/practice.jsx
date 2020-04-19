import React from "react";

import "./practice.scss";
import Navbar from "../navigation/navigation";
import { Link } from "react-router-dom";

/* eslint no-use-before-define: 0 */
class Practice extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <div className="shadow-sm p-3 mb-5 bg-white rounded practice-head">
            <p>Practice</p>
            <h2>Dashboard</h2>
          </div>
          <div className="container ">
            <h4>Skills Available For Practice</h4>
            <div className="row shadow p-3 mb-5 bg-white rounded mt-4 practice-list">
              <div className="col">
                <ul className="list-group mt-2 mb-2 ">
                  <li className="list-group-item">
                    <Link to="/content/Theories Of Failure">
                      Theories Of Failure
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/content/Torsion">Torsion</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/content/Cast Iron">Cast Iron</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group mt-2 mb-2">
                  <li className="list-group-item">
                    <Link to="/content/Preferred numbers">
                      Preferred numbers
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/content/Theories Of Failure">production</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/content/Springs">Springs</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group mt-2 mb-2">
                  <li className="list-group-item">
                    <Link to="/content/Basic Som">Basic Som</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/content/Springs">Springs</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/content/Preferred numbers">Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4>Tutorials</h4>
            <div className="row mb-5 mt-4 practice-tutorial">
              <div className="col ">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <div className="card-body">
                    <h5 className="card-title">Production</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Tutorial
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <div className="card-body">
                    <h5 className="card-title">Manufacturing</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Tutorial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Practice;
