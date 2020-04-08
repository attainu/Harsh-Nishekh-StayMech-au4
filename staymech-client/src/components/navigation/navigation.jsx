import React, { Component, Fragment } from "react";
import logo from "../../cogs-solid.svg";

import "./navigation.scss";
// import history from "../../history";

import { connect } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import PropTypes from "prop-types";

class Navbar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLink = (
      <Fragment>
        <nav>
          <span className="navbar-text mr-3">
            <strong>{user ? `welcome ${user.name}` : ""}</strong>
          </span>
        </nav>
        <nav className="logout" onClick={this.props.logout}>
          <span className="navbar-text">
            <strong> Logout</strong>
          </span>
        </nav>
      </Fragment>
    );

    const guestLink = (
      <Fragment>
        <a className="nav-link" href="/register">
          Register
        </a>
        <a className="nav-link" href="/login">
          Login
        </a>
      </Fragment>
    );
    return (
      <div className="container ">
        <nav className="navbar navbar-expand-lg mt-2 navigation">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="logo-img" />
            StayMech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="/practice">
                  Practice
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contest">
                  Contests
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {isAuthenticated ? authLink : guestLink}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
