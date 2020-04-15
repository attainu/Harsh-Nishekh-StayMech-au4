import React from "react";
import Navbar from "../navigation/navigation";

import "./profile.scss";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <h3>User Name</h3>
              <p>user mail</p>
            </div>
            <div className="col-md-8">
              <div className="shadow-sm p-3 mb-5 bg-white rounded mt-5">
                <h4 className="mb-4">Education</h4>
                <a href="/education">+Add your education history</a>
              </div>
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <h4 className="mb-4">Work Experience</h4>
                <a href="/">
                  +Add work experience, including contracts and experience
                </a>
              </div>
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <h4 className="mb-4">Contest History</h4>
                <p className="text-muted text-center">
                  You have not participated in any contests yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
