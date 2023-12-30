import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { Snackbar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import Logo from "../ASSETS/Menu/React Use.jpeg";
import { Link } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { display } from "@mui/system";
import { SnackbarContent } from "@mui/material";
import Pic from "../ASSETS/Menu/logo.png";
import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  notchedOutline: {
    borderColor: "red !important",
  },
}));
function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [userName, setUserName] = useState("");
  const [open, setopen] = useState(false);
  const [snackMessage, setMessage] = useState(null);
  const [userId, setUserId] = useState("");
  const classes = useStyles();

  const navigate = useNavigate();

  const onChangeLocation = (event) => {
    setUserName(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason !== "clickaway") {
      return;
    }
    setopen(false);
  };

  const Change = () => {
    navigate("/signup");
  };

  async function login() {
    let item = userName;
    if (item !== null && item !== "") {
      let result = await fetch(
        "http://localhost:8082/res/v1/validate/user/" + item,
        {
          method: "GET",
          crossDomain: true,
          headers: {
            Accept: "*/*",
          },
        }
      );
      if (result.ok === true) {
        if (item !== null && item !== "") {
          let result = await fetch(
            "http://localhost:8082/res/v1/user/" + item,
            {
              method: "GET",
              crossDomain: true,
              headers: {
                Accept: "*/*",
              },
            }
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setUserId(data.id);
              navigateToPage(data.id);
            });
        }
      } else {
        setopen(true);
        setMessage("Sign up if you are not registered before");
      }
    } else {
      setopen(true);
      setMessage("Please add your name");
    }
  }

  function navigateToPage(id) {
    console.log(id, "first one");
    navigate("/samplePage?id=" + id);
  }
  const glowingAnimation = {
    height: "75px",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    border: "5px solid #fff",
    boxShadow: "0 0 5px #fff",
    animation: "glow 1s ease-in-out infinite",
    "@keyframes glow": {
      "0%": {
        boxShadow: "0 0 5px #fff",
      },
      "50%": {
        boxShadow: "0 0 15px #fff",
      },
      "100%": {
        boxShadow: "0 0 5px white",
      },
    },
  };

  const inputStyle = {
    borderColor: "green",
  };

  return (
    <div
      className="navBar"
      style={{ display: "block", height: "100%", width: "100%" }}
    >
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message={snackMessage}
        onClose={handleClose}
      ></Snackbar>
      <div className="left">
        <img
          src={Logo}
          style={{
            height: "100vh",
            width: "60%",
            float: "left",
          }}
        />
      </div>
      <div
        className="right"
        style={{
          height: "100vh",
          width: "40%",
          display: "flex",
          alignItems: "center",
          backgroundColor: isHovered ? "aquamarine" : "#1c2331",
          opacity: isHovered ? 1 : 7,
          transition: "all 1s",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            fontSize: "32px",
            height: "70vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img src={Pic}></img>
          <h1
            style={{
              fontFamily: "cursive",
              fontStyle: "italic",
              color: isHovered ? "black" : "white",
            }}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            Pizza Plaza
          </h1>
          <Card
            style={glowingAnimation}
            // height: '75px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', border: '5px solid #fff',
            // boxShadow: '0 0 5px #fff',
            // animation: 'glow 1s ease-in-out infinite',

            // "&:hover": {
            //   backgroundColor: 'blue',
            //   border: '3px solid maroon'
            // },
          >
            <p
              style={{
                color: "white",
                fontFamily: "fantasy",
              }}
            >
              welcome
            </p>
          </Card>
          <TextField
            // style={inputStyle}
            hiddenLabel
            id="filled-hidden-label-small"
            // variant="none"
            size="normal"
            onChange={onChangeLocation}
            required
            helperText="username please"
            FormHelperTextProps={{
              sx: { color: isHovered ? "blue" : "green" },
            }}
            InputLabelProps={{
              style: { color: "green" },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "50%",
              color: "transparent",
            }}
          />
          <Button onClick={login} variant="outlined" style={{}}>
            Sign in{" "}
          </Button>
          <Link component="button" variant="body2" onClick={Change}>
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
