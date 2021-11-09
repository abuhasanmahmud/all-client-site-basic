import React from "react";
import { useHistory, useLocation } from "react-router";
import useFirebase from "./../../../Hooks/useFirebase";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
const Login = () => {
  const { logInWithGoogle } = useFirebase();
  const history = useHistory();
  const location = useLocation();
  const handelGoogleSignIn = () => {
    logInWithGoogle(location, history);
  };
  console.log(location, history);
  return (
    <div>
      <h2>login page</h2>
      <button onClick={handelGoogleSignIn}>logInWithGoogle</button>
      <Button variant="text" sx={{ mt: 2 }}>
        New user ? <Link to="/regi">Register now</Link>
      </Button>
    </div>
  );
};

export default Login;
