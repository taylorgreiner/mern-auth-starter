import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderStyle.css";

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenicated) {
      return (
        <div>
          <Link to={"/signout"}>Sign out</Link>
          <Link to={"/feature"}>Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Sign up</Link>
          <Link to={"/signin"}>Sign in</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header">
        <Link to={"/"}>Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenicated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
