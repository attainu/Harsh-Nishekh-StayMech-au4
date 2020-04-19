import React from "react";
import Navbar from "../navigation/navigation";
import "./profile.scss";

import Edmodal from "../modal/education-modal";
import Workmodal from "../modal/work-modal";

import { connect } from "react-redux";

class Profile extends React.Component {
  render() {
    const { education } = this.props.details;
    const { user } = this.props.auth;
    const { work } = this.props.work;

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              {user ? (
                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-8">
              <div className="shadow-sm p-3 mb-5 bg-white rounded mt-5">
                <h4 className="mb-4">Education</h4>
                {education &&
                  education.map((detail, idx) => (
                    <div key={idx}>
                      <h6>{detail.college}</h6>
                      <p>
                        {detail.program},{detail.degree}
                      </p>
                    </div>
                  ))}
                <Edmodal />
              </div>
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <h4 className="mb-4">Work Experience</h4>
                {work &&
                  work.map((detail, idx) => (
                    <div key={idx}>
                      <h6>{detail.company}</h6>
                      <p>{detail.role}</p>
                    </div>
                  ))}
                <Workmodal />
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

const mapStateToProps = (state) => ({
  details: state.edDetails.details,
  auth: state.auth,
  work: state.workDetails.work,
});

export default connect(mapStateToProps)(Profile);
