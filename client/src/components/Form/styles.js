import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 20,
    background: "#303942",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  fileInput: {
    width: "100%",
    margin: 8,
  },
  buttonSubmit: {
    margin: 8,
    marginBottom: 10,

    background:
      "linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 220.06%)",
  },
  clear: {
    color: "#c51162",
    background: "transparent",
    "&:hover": {
      background: "transparent",
    },
  },
}));
