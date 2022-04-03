import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  title: {
    background: "linear-gradient(90.83deg, #fc354c -27.26%, #0abfbc 128.08%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    //   -webkit-background-clip: "text",
    // -webkit-text-fill-color: "transparent",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
