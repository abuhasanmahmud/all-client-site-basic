import React from "react";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "./../../../Hooks/useFirebase";

const Nav = () => {
  const { user, logInWithGoogle, logOut } = useFirebase();

  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/booking">Booking</Link>
      {user?.email ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <Link to="/login">
          <button onClick={logInWithGoogle}>Login</button>
        </Link>
      )}
      {user?.email && <h2>{user.displayName}</h2>}
    </div>
  );
};

export default Nav;
