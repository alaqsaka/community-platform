import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  loader: {
    alignSelf: "center",
    textAlign: "center",
  },
}));
