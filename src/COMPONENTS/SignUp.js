import { ClassNames, css } from "@emotion/react";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { margin } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import Logo from "../ASSETS/Menu/logo.png";
import backGround1 from "../ASSETS/signUpBackGround/key1.jpeg";
import backGround2 from "../ASSETS/signUpBackGround/key2.webp";
import backGround3 from "../ASSETS/signUpBackGround/key3.jpeg";
import backGround4 from "../ASSETS/signUpBackGround/key4.jpeg";
import backGround5 from "../ASSETS/signUpBackGround/key5.jpg";
import backGroundInside from "../ASSETS/Menu/Gradient.webp";
import styled, { keyframes } from "styled-components";
import { to } from "react-spring";
import { Snackbar } from "@mui/material";
function SignUp() {
  console.log("entered");
  const [name, setUserName] = useState("");
  const [number, setphoneNumber] = useState("");
  const [open, setopen] = useState(false);
  const [snackMessage, setMessage] = useState(null);

  const navigate = useNavigate();

  const onChangeLocation = (event) => {
    setUserName(event.target.value);
  };

  const onChangeValue = (e) => {
    const regex = /^[0-9\b]+$/;
    console.log(e.target.value.length);
    if (e.target.value === "" || regex.test(e.target.value)) {
      if (e.target.value.length < 11) {
        setphoneNumber(e.target.value);
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason !== "clickaway") {
      return;
    }
    setopen(false);
  };

  async function save() {
    if (name !== null && number !== null) {
      let result = await fetch("http://localhost:8082/res/v1/new/user", {
        method: "POST",
        crossDomain: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: null,
          userName: name,
          phoneNumber: number,
        }),
      });
      if (result.ok) {
        // history.push('/menu')
        navigate("/menu");
      }
    } else {
      setopen(true);
      setMessage("Please Fill all the required Fields");
    }
  }

  return (
    // <Page>
    <Page>
      <Snackbar
        open={open}
        autoHideDuration={30000}
        message={snackMessage}
        onClose={handleClose}
      ></Snackbar>
      <Card
        sx={{
          height: "650px",
          width: "600px",
          border: "2px solid red",
          borderRadius: "16px",
          display: "flex",
          backgroundImage: "linear-gradient(to right, #6f9c3d, #019CAD)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "500px",
            width: "100%",
          }}
        >
          <img src={Logo} width={100} height={100}></img>
          <p style={{ color: "maroon", fontSize: "30px" }}>Pizza Plaza</p>
          <TextField
            hiddenLabel
            variant="filled"
            size="normal"
            onChange={onChangeLocation}
            required
            label={name === "" ? "USERNAME" : ""}
            border="3px-solid-black"
            InputLabelProps={{
              style: { color: "maroon" },
            }}
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "50%",
              height: "30%",
              type: "text",
              fontFamily: "cursive",
            }}
          />
          <TextField
            hiddenLabel
            label={number === "" ? "PHONENUMBER" : ""}
            variant="filled"
            size="normal"
            onChange={onChangeValue}
            required
            border="3px-solid-black"
            value={number}
            InputLabelProps={{
              style: { color: "maroon" },
            }}
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "50%",
              height: "30%",
              type: "text",
            }}
          />
          <Button
            variant="outlined"
            onClick={save}
            style={{ color: "white", backgroundColor: "black" }}
          >
            Register{" "}
          </Button>
        </div>
        {/* </div> */}
      </Card>
      {/* </Page> */}
    </Page>
  );
}

export default SignUp;

const animate = keyframes`
0%{
  background-image: url(${backGround1});
}
20%{
  background-image: url(${backGround2});
}
40%{
  background-image: url(${backGround3});
}
60%{
  background-image: url(${backGround4});
}
80%{
  background-image: url(${backGround5});
}
100%{
  background-image: url(${backGround3});
}
`;

const Page = styled.div`
  margin: "0";
  padding: "0";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: "5s";
  animation: ${animate};
  animation-direction: "alternate-reverse";
  animation-duration: 10s;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
