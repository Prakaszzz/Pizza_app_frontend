import React, { useRef, useState } from "react";
import "../CSS/Address.css";
import { Grid } from "@material-ui/core";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import { Button } from "@mui/material";
import FrontPage from "./SamplePage";
import { Snackbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  parent: {
    margin: "0",
    padding: "0",
    height: "100vh",
    /* background: linear-gradient(skyblue,pink,hotpink);  */
    backgroundColor: "black",
  },
  main: {
    height: "80px",
    marginLeft: "400px",
    marginRight: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  second: {
    height: "850px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    display: "flex",
    justifyContent: "center",
  },
  inside: {
    height: "100%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  square: {
    height: "15%",
    width: "30%",
    boxShadow:
      "inset 0 0 50px #fff," +
      "inset 20px 0 80px #f0f," +
      "inset -20px 0 80px #0ff," +
      "inset 20px 0 300px #f0f," +
      "inset -20px 0 300px #0ff," +
      "0 0 50px #fff," +
      "-10px 0 80px #f0f," +
      "10px 0 80px #0ff",
  },
  middle: {
    border: "3px solid red",
    boxShadow: "0 0 15px 20px red",
    borderRadius: "20px",
  },
  middle1: {
    display: "flex",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
  },
  middle2: {
    marginTop: "30px",
    height: "700px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  head: {
    fontSize: "50px",
    color: "white",
    fontFamily: "Courier New, Courier, monospace",
  },
  right: {
    display: "flex",
    justifyContent: "center",
  },
  inside3: {
    height: "100%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  customSnackbar: {
    padding: theme.spacing(2),
    height: "40px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right,red,red)",
  },
}));

function AddressPage() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [houseNo, setHouseNo] = useState("");
  const [area, setArea] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandMark] = useState("");
  const [open, setopen] = useState(false);
  const [snackMessage, setMessage] = useState(null);

  const FrontPage = () => {
    {
      save();
    }
  };

  const onChangeValue = (event) => {
    setHouseNo(event.target.value);
  };

  const onChangeLocation = (event) => {
    setArea(event.target.value);
  };

  const onChangeStreet = (event) => {
    setStreet(event.target.value);
  };

  const onChangeLandmark = (event) => {
    setLandMark(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason !== "clickaway") {
      return;
    }
    setopen(false);
  };
  async function save() {
    if (
      area !== null &&
      area !== "" &&
      street !== null &&
      street !== "" &&
      houseNo !== null &&
      houseNo !== ""
    ) {
      let result = await fetch("http://localhost:8082/res/v1/address", {
        method: "POST",
        crossDomain: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: null,
          area: area,
          houseNo: houseNo,
          street: street,
          landmark: landmark,
          user: {
            id: id,
          },
        }),
      });
      if (result.ok) {
        {
          navigate("/samplePage?id=" + id);
        }
      }
    } else {
      setopen(true);
      setMessage("YO YOU MISSED SOMETHIN");
    }
  }
  return (
    <div className={classes.parent}>
      <Snackbar
        open={open}
        autoHideDuration={30000}
        message={snackMessage}
        onClose={handleClose}
        anchorOrigin={{ vertical: "center", horizontal: "left" }}
        ContentProps={{
          className: classes.customSnackbar,
        }}
      ></Snackbar>
      <div className={classes.main}></div>
      <div className={classes.second}>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={3} className={classes.left}>
            <div className={classes.inside}>
              {/* <div className={classes.insideFirst}>
</div> */}
              <Square></Square>
              <div className={classes.square}></div>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.middle}>
            <div className={classes.middle1}>
              <p className={classes.head}> Add Your Address</p>
            </div>
            <div className={classes.middle2}>
              <TextField
                hiddenLabel
                // variant="outlined"
                size="normal"
                onChange={onChangeValue}
                required
                label={houseNo === "" ? "PLOT/HOUSE NO" : ""}
                InputLabelProps={{
                  style: { color: "lime" },
                }}
                outline="none"
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "700px",
                  type: "text",
                  fontFamily: "cursive",
                  backgroundColor: "#2a6592",
                  borderRadius: "30px",
                  boxShadow: "0 0 3px 6px #45b6fe",
                  color: "red",
                }}
              />
              <TextField
                hiddenLabel
                size="large"
                label={street === "" ? "STREET" : ""}
                onChange={onChangeStreet}
                required
                border="3px solid red"
                InputLabelProps={{
                  style: { color: "lime" },
                }}
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "700px",
                  type: "text",
                  fontFamily: "cursive",
                  backgroundColor: "#2a6592",
                  boxShadow: "0 0 3px 6px #45b6fe",
                  color: "red",
                  borderRadius: "30px",
                }}
              />
              <TextField
                hiddenLabel
                // variant="outlined"
                size="normal"
                onChange={onChangeLocation}
                label={area === "" ? "AREA" : ""}
                required
                border="3px solid red"
                InputLabelProps={{
                  style: { color: "lime" },
                }}
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "700px",
                  type: "text",
                  fontFamily: "cursive",
                  backgroundColor: "#2a6592",
                  boxShadow: "0 0 3px 6px #45b6fe",
                  color: "red",
                  borderRadius: "30px",
                }}
              />
              <TextField
                hiddenLabel
                // variant="outlined"
                size="normal"
                onChange={onChangeLandmark}
                label={landmark === "" ? "NEARBY LANMORK" : ""}
                border="3px solid red"
                InputLabelProps={{
                  style: { color: "lime" },
                }}
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "700px",
                  type: "text",
                  fontFamily: "cursive",
                  backgroundColor: "#2a6592",
                  boxShadow: "0 0 3px 6px #45b6fe",
                  color: "red",
                  borderRadius: "30px",
                }}
              />
              <Button
                onClick={FrontPage}
                sx={{
                  height: "50px",
                  width: "300px",
                  borderRadius: "30px",
                  backgroundColor: "white",
                  color: "black",
                  fontFamily: "monospace",
                  fontSize: "20px",
                  "&:hover": {
                    backgroundColor: "blue", // Set the same background color as default
                    color: "white", // Set the same text color as default
                    boxShadow: "none", // Disable any hover shadow effects if applied
                  },
                }}
              >
                {" "}
                save
              </Button>
            </div>
          </Grid>
          <Grid item xs={3} className={classes.right}>
            <div className={classes.inside3}>
              {/* <div className={classes.inside3First}>
</div> */}
              <div className={classes.square}></div>
              <Square></Square>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AddressPage;

const animate = keyframes`
 0% { transform: rotateX(0deg) rotateY(360deg) rotateZ(90deg); }
  25% { transform: rotateX(90deg) rotateY(270deg) rotateZ(180deg); }
  50% { transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg); }
  75% {transform: rotateX(270deg) rotateY(90deg) rotateZ(360deg); }
  100% {transform: rotateX(360deg) rotateY(0deg) rotateZ(270deg); }
`;

const Square = styled.div`
  height: 20%;
  width: 40%;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
  transition: "5s";
  animation: ${animate} 20s linear infinite;
  // animation-direction: 'alternate-reverse';
  animation-duration: 5s;
  animation-fill-mode: backwards;
  animation-play-state: running;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-style: preserve-3d; /* Single value here */
`;
