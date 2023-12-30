import React, { useState, useEffect } from "react";
import BackGround from "../ASSETS/AboutUsSamples/AboutBackground.avif";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@mui/material";
import PIZZA from "../ASSETS/AboutUsSamples/pizza.jpeg";
import BURGER from "../ASSETS/AboutUsSamples/burger.jpeg";
import SANDWICH from "../ASSETS/AboutUsSamples/sandwich.png";
import CHAT from "../ASSETS/AboutUsSamples/CoverImage.jpg";
import ICE from "../ASSETS/AboutUsSamples/Ice6.jpeg";
const Dishes = [
  {
    label: "PIZZA",
    backgroundImage: "url(" + PIZZA + ")",
  },
  { label: "BURGER", backgroundImage: "url(" + BURGER + ")" },
  { label: "SANDWICH", backgroundImage: "url(" + SANDWICH + ")" },
];

const firstRowFavorites = [
  {
    label: "SeaFoodSandwich",
    backgroundImage: "url(" + PIZZA + ")",
  },
  { label: "BURGER", backgroundImage: "url(" + BURGER + ")" },
  { label: "SANDWICH", backgroundImage: "url(" + SANDWICH + ")" },
  { label: "PIZZA", backgroundImage: "url(" + SANDWICH + ")" },
];
const useStyles = makeStyles((theme) => ({
  // letterAnimation: {
  //   // display: "inline-block",
  //   animation: "$letterAppear 2s forwards",
  //   color: "red",
  //   fontFamily: "monoscope",
  //   fontSize: "80px",
  // },
  // another: {
  //   animation: "$letterAppear 2s forwards",
  //   color: "white",
  //   fontFamily: "monoscope",
  //   fontSize: "80px",
  // },
  "@keyframes letterAppear": {
    from: {
      opacity: 0,
      transform: "translateY(100px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  letterAnimation: {
    fontSize: "80px",
    color: "#fff",
    textAlign: "center",
    animation: "$letterAppear 4s ease-in-out infinite alternate", // Use classes.glow
  },

  "@keyframes glow": {
    from: {
      textShadow:
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px yellow, 0 0 40px yellow, 0 0 50px yellow, 0 0 60px yellow, 0 0 70px yellow",
    },

    to: {
      textShadow:
        "0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6",
    },
  },
  square: {
    height: "40%",
    width: "15%",
    animation: "$shadow 3s infinite",
    borderRadius: "30px",
  },

  "@keyframes shadow": {
    from: {
      boxShadow:
        "inset 0 0 50px white," +
        "inset 20px 0 80px red," +
        "inset -20px 0 80px blue," +
        "inset 20px 0 300px red," +
        "inset -20px 0 300px blue," +
        "0 0 50px white," +
        "-10px 0 80px red," +
        "10px 0 80px blue",
    },

    to: {
      boxShadow:
        "inset 0 0 50px aqua," +
        "inset 20px 0 80px gray," +
        "inset -20px 0 80px pink," +
        "inset 20px 0 300px lime," +
        "inset -20px 0 300px pink," +
        "0 0 50px aqua," +
        "-10px 0 80px lime," +
        "10px 0 80px pink",
    },
  },
  squares: {
    height: "40%",
    width: "15%",
    animation: "$shadows 3s infinite",
    borderRadius: "30px",
  },

  "@keyframes shadows": {
    from: {
      boxShadow:
        "inset 0 0 50px aqua," +
        "inset 20px 0 80px gray," +
        "inset -20px 0 80px pink," +
        "inset 20px 0 300px lime," +
        "inset -20px 0 300px pink," +
        "0 0 50px aqua," +
        "-10px 0 80px lime," +
        "10px 0 80px pink",
    },

    to: {
      boxShadow:
        "inset 0 0 50px white," +
        "inset 20px 0 80px red," +
        "inset -20px 0 80px blue," +
        "inset 20px 0 300px red," +
        "inset -20px 0 300px blue," +
        "0 0 50px white," +
        "-10px 0 80px red," +
        "10px 0 80px blue",
    },
  },
  second: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  third: {
    height: "600px",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(skyblue,pink)",
  },
  insideThirdOne: {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  insideThirdTwo: {
    height: "500px",
    // border: "2px solid green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  fourth: {
    height: "800px",
    backgroundImage: "url(" + CHAT + ")",
    backgroundSize: "cover",
    borderRadius: "5px",
    overflow: "hidden",
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fifth: {
    height: "1000px",
    backgroundImage: "url(" + ICE + ")",
    backgroundSize: "cover",
    borderRadius: "5px",
    overflow: "hidden",
    // WebkitMaskImage: "-webkit-radial-gradient(white, black)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0",
  },
  rightLast: {
    float: "left",
    fontSize: "80px",
    paddingLeft: "320px",
    fontFamily: "serif",
    color: "orange",
    borderRadius: "40px",
    animation: "$colorChange 4s ease-in-out infinite alternate", // Use classes.glow
  },
  "@keyframes colorChange": {
    "0%": {
      color: "red",
    },
    "20%": {
      color: "yellow",
    },
    "60%": {
      color: "maroon",
    },
    "80%": {
      color: "aqua",
    },
    "100%": {
      color: "pink",
    },
  },
}));

function AboutUs() {
  const classes = useStyles();
  const [firstRowFavorites, setFirstRow] = useState([]);
  const [secondRowFavourites, setSecondRow] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await fetch("http://localhost:8082/res/v1/variety/favorite", {
      method: "GET",
      dataType: "application/json",
      crossDomain: true,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFirstRow(data.first);
        setSecondRow(data.second);
      });
  }
  return (
    <div>
      {/* <div className={classes.first}></div> */}
      <div
        style={{
          backgroundImage: "url(" + BackGround + ")",
          height: "980px",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: "35%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "60%",
          }}
        >
          <div className={classes.square}></div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30%",
            width: "60%",
          }}
        >
          <h1 className={classes.letterAnimation}>PIZZA&nbsp;&nbsp;PLAZA</h1>
        </div>
        <div
          style={{
            height: "35%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "20px",
            width: "60%",
          }}
        >
          <div className={classes.squares}></div>
        </div>
      </div>
      <div style={{ height: "10px", backgroundColor: "red" }}></div>
      <div className={classes.second}>
        <h1
          style={{
            paddingLeft: "130px",
            fontSize: "45px",
            paddingBottom: "50px",
            fontFamily: "cursive",
            background: "linear-gradient(to right, #32CD32, aqua)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          PIZZA PLAZA IS A FRESH TAKE ON THE CLASSIC MEDITERRANEAN GRILL
        </h1>
        <h3
          style={{
            paddingLeft: "100px",
            fontSize: "23px",
            paddingBottom: "70px",
            color: "#3f63b5",
            fontFamily: "cursive",
          }}
        >
          serving up fresh pizza, burger, sandwich, and chicken on your choice
          on salad, pita, or plate accompanied by a selection of fresh pickles
          and sauces. Perfect for take out,<br></br> delivery, or a casual meal
          on the town, our menu is designed for optimal simplicity and maximum
          flavor
        </h3>
        {/* </div> */}
      </div>
      <div style={{ height: "10px", backgroundColor: "black" }}></div>
      <div className={classes.third}>
        <div className={classes.insideThirdOne}>
          <h1
            style={{
              fontFamily: "cursive",
              fontStyle: "italic",
              fontSize: "70px",
            }}
          >
            MAIN DISHES
          </h1>
        </div>
        <div className={classes.insideThirdTwo}>
          {Dishes.map((menu) => (
            <Card
              elevation={7}
              style={{
                height: "300px",
                width: "350px",
                backgroundImage: menu.backgroundImage,
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "50px",
                  color: "white",
                  fontStyle: "italic",
                  paddingBottom: "5px", // Adjust the padding as needed
                  margin: 0,
                }}
              >
                {menu.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <div style={{ height: "10px", backgroundColor: "black" }}></div>
      <div className={classes.fourth}>
        <h1 style={{ fontSize: "80px", color: "white" }}>WITH CHAT ITEMS</h1>
      </div>
      <div style={{ height: "10px", backgroundColor: "black" }}></div>
      <div
        style={{
          height: "1000px",
          backgroundColor: "#ffcca5",
          // display: "flex",
          // flexDirection: "coloum",
        }}
      >
        <div
          style={{
            height: "10%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontFamily: "monospace", fontSize: "40px" }}>
            Some of our favorites
          </h1>
        </div>
        <div
          style={{
            height: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {firstRowFavorites.map((favorite) => (
            <Card
              elevation={7}
              style={{
                height: "300px",
                width: "350px",
                backgroundImage: favorite.imgUrl,
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "50px",
                  color: "white",
                  fontStyle: "italic",
                  paddingBottom: "5px", // Adjust the padding as needed
                  margin: 0,
                }}
              ></p>
            </Card>
          ))}
        </div>
        <div
          style={{
            height: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {secondRowFavourites.map((favorite) => (
            <Card
              elevation={7}
              style={{
                height: "300px",
                width: "350px",
                backgroundImage: favorite.imgUrl,
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "50px",
                  color: "white",
                  fontStyle: "italic",
                  paddingBottom: "5px", // Adjust the padding as needed
                  margin: 0,
                }}
              ></p>
            </Card>
          ))}
        </div>
      </div>
      <div style={{ height: "10px", backgroundColor: "red" }}></div>
      <div className={classes.fifth}>
        <h1
          style={{
            fontSize: "80px",
            fontFamily: "sans-serif",
            color: "red",
            paddingTop: "240px",
          }}
        >
          ICE&nbsp;&nbsp;CREAM
        </h1>
        <br></br>
        <h1
          style={{
            fontSize: "60px",
            fontFamily: "sans-serif",
            color: "yellow",
          }}
        >
          TOO
        </h1>
      </div>
      <div style={{ height: "5px", backgroundColor: "red" }}></div>
      <div
        style={{
          height: "330px",
          background: "linear-gradient(to right,#ee9ca7,#ffdde1)",
        }}
      >
        <h2 className={classes.rightLast}>
          PIZZA <br></br>PLAZA
        </h2>
        <h2
          style={{
            float: "right",
            fontSize: "40px",
            fontFamily: "cursive",
            fontStyle: "italic",
            paddingTop: "100px",
            paddingRight: "500px",
            color: "#e0115f",
          }}
        >
          Do try<br></br>
          this
        </h2>
      </div>
    </div>
  );
}

export default AboutUs;
