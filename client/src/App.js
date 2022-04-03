import React, { useEffect, useState } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ThemeProvider, createTheme, CssBaseline } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { getPosts } from "./actions/posts";
import "./index.css";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const theme = createTheme({
    palette: {
      type: "dark",
    },
    typography: {
      fontFamily: "Nunito Sans",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Container maxWidth="xl">
          <Box p={2}>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              className={classes.title}
            >
              Community Platform
            </Typography>
          </Box>
        </Container>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </ThemeProvider>
  );
};

export default App;
