import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "10px 50px",
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    "@media (max-width: 780px)": {
      width: "fit-content",
      justifyContent: "space-evenly",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    "@media (max-width: 780px)": {
      width: "300px",
      justifyContent: "space-evenly",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  title: {
    // background: "linear-gradient(90.83deg, #fc354c -27.26%, #0abfbc 128.08%)",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    color: "white",
    fontWeight: "500",
    "@media (max-width: 780px)": {
      width: "auto",
      width: "fit-content",
      justifyContent: "space-evenly",
      fontSize: "20px",
    },
    //   -webkit-background-clip: "text",
    // -webkit-text-fill-color: "transparent",
  },
  signin: {
    background:
      "linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 220.06%)",
  },
}));
