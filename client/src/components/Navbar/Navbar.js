import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Box,
  Toolbar,
  Avatar,
  Button,
  Link,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Get (retrieve something) from localStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // get user data without refreshing the web
  useEffect(() => {
    const token = user?.token;

    // JWT
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
    window.location.reload(false);
  };

  return (
    <AppBar
      position="static"
      color="default"
      className={classes.appBar}
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <div className={classes.brandContainer}>
        <Container maxWidth="xl">
          <Box p={2}>
            <Link href="/" underline="none">
              <Typography
                variant="h4"
                noWrap
                to="/"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                className={classes.title}
              >
                Complat
              </Typography>
            </Link>
          </Box>
        </Container>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName}>
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          // need component, to
          <Button
            variant="contained"
            color="primary"
            href="/auth"
            className={classes.signin}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
