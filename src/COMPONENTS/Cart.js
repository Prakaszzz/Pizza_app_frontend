import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Card, Typography } from "@mui/material";
import Slider from "react-slick";
import Piza from "../ASSETS/Menu/burger.jpg";
import burger from "../ASSETS/Menu/pizaa.jpeg";
import CartCard from "./CartCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const useStyles = makeStyles((theme) => ({
  backGround: {
    //    backgroundImage:'linear-gradient(white,lightgreen,white,yellow,white)',
    //   backgroundColor:'aqua',
    height: "100%",
    width: "100%",
  },

  letfSideBar: {
    width: "70%",
    height: "100vh",
    float: "left",
    marginTop: "20px",
    marginLeft: "30px",
  },
  sideBar: {
    width: "25%",
    height: "100vh",
    float: "right",
    marginRight: "20px",
    position: "fixed",
    right: "0",
  },
}));
function Cart() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const [value, setValue] = useState(false);
  const [showDiv, setShowDiv] = useState(true);
  const [cardSize, setSize] = useState(false);

  const orderPage = () => {
    navigate("/order?id=" + userId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await fetch(
      "http://localhost:8082/res/v1/user/" + userId + "/cart/products",
      {
        method: "GET",
        dataType: "application/json",
        crossDomain: true,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        if (data.length <= 0) {
          setShowDiv(false);
        }
        if (data.length < 3) {
          console.log(data.length, " lenn");
          setSize(true);
        }
        console.log(data, "fetch");
      });
  }

  useEffect(() => {
    fetchData();
  }, [value]);

  async function updateData() {
    await new Promise((resolve) => setTimeout(resolve, 120));
    if (value) {
      setValue(false);
    } else {
      setValue(true);
    }
  }
  let amount = 0;
  {
    data.map((usercart) => (amount += usercart?.price));
  }
  let total = amount + 60;
  return (
    <div>
      {showDiv ? (
        <div className={classes.backGround}>
          <div className={classes.letfSideBar}>
            {data.map((usercart) => (
              <CartCard
                image={usercart?.imgUrl}
                num={usercart?.count}
                name={usercart?.name}
                id={usercart?.id}
                userId={userId}
                price={usercart?.price}
                updateData={updateData}
                size={cardSize}
              />
            ))}
          </div>

          <div className={classes.sideBar}>
            <Card
              elevation={5}
              style={{
                width: "100%",
                height: "900px",
                borderRadius: "10px",
                marginTop: "37px",
                // ,backgroundImage:'linear-gradient(white,#FFF2E6,#FFE6CC,#ffD9B3,#FFCC99,#FFBF80)'
                backgroundColor: "grey",
                // ,backgroundImage:'linear-gradient(#23395d, #203354, #1c2e4a, #192841, #152238)'
                border: "1px solid #152238",
                boxShadow: "0 5px 15px #152238",
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "20%",
                  marginTop: "20px",
                  marginLeft: "15px",
                }}
              >
                <Card
                  style={{
                    height: "70%",
                    width: "100%",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid white",
                    backgroundColor: "grey",
                    boxShadow: "0 5px 15px grey",
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    fontSize={"cover"}
                    position={"absolute"}
                    gutterBottom
                  >
                    <p
                      style={{
                        color: "white",
                        fontFamily: "monospace",
                        fontSize: "60px",
                        textShadow:
                          "0 0 10px white, 0 0 20px red,0 0 30px aqua",
                      }}
                    >
                      summary
                    </p>
                  </Typography>
                </Card>
              </div>
              <div style={{ height: "40%", width: "90%", marginLeft: "15px" }}>
                <Card
                  style={{
                    height: "80%",
                    width: "100%",
                    display: "flex",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    backgroundColor: "grey",
                    border: "1px solid white",
                    boxShadow: "0 5px 15px grey",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    fontSize={"cover"}
                    position={"absolute"}
                    marginLeft={"30px"}
                    gutterBottom
                  >
                    <p style={{ color: "white", fontFamily: "monospace" }}>
                      subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {amount}
                    </p>
                    <p style={{ color: "white", fontFamily: "monospace" }}>
                      deliveryfee&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60
                    </p>
                  </Typography>
                </Card>
              </div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "30px",
                  fontFamily: "monospace",
                  color: "white",
                }}
              >
                {" "}
                Total : &nbsp;{total}
              </p>
              <div
                style={{
                  height: "40%",
                  width: "90%",
                  marginLeft: "30px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "90px",
                }}
              >
                <Button
                  onClick={orderPage}
                  sx={{
                    height: "50px",
                    width: "300px",
                    borderRadius: "30px",
                    backgroundColor: "white",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#152238",
                      color: "white",
                      boxShadow: "none",
                    },
                  }}
                >
                  {" "}
                  order
                </Button>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #00b4db, #0083b0)",
              height: "80%",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50px",
            }}
          >
            <div
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
                height: "70%",
                width: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  fontFamily: "monospace",
                  color: "maroon",
                  marginTop: "20px",
                }}
              >
                NO&nbsp; ITEMS &nbsp;ADDED
                <br></br>&nbsp; IN THE CART
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
