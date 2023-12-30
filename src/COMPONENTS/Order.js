import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Card, Typography } from "@material-ui/core";
import { useSearchParams ,useNavigate} from "react-router-dom";
import { Button } from "@mui/material";
import IMG from "../ASSETS/dark-gradient.webp";
import gradient from "../ASSETS/gradient-blue.avif";
import gif1 from "../ASSETS/food_card.gif";
import money from "../ASSETS/white.jpeg";
import Celebration from "../ASSETS/ccc.gif";
import { Snackbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  backGround: {
    backgroundColor: "#0cbaba",
    backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
    height: "100vh",
    width: "100%",
  },
  progress: {
    height: "150px",
    width: "80%",
    // paddingLeft: "240px",
    // paddingTop: "50px",
    margin: "0",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    height: "800px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "@keyframes letterAppear": {
    from: {
      opacity: 0,
      transform: "translateY(100px)",
      color: "black",
    },
    to: {
      opacity: 1,
      transform: "translateY(100px)",
      color: "red",
    },
  },
  letterAnimation: {
    fontSize: "80px",
    textAlign: "center",
    animation: "$letterAppear 4s ease-in-out infinite alternate",
    fontFamily: "ui-sans-serif",
  },
  "@keyframes letterAppear2": {
    from: {
      opacity: 1,
      transform: "translateY(100px)",
      color: "black",
    },
    to: {
      opacity: 0,
      transform: "translateY(100px)",
      color: "red",
    },
  },
  letterAnimation2: {
    fontSize: "80px",
    textAlign: "center",
    animation: "$letterAppear2 4s ease-in-out infinite alternate",
    fontFamily: "sans-serif",
  },
}));
function Order() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [open, setopen] = useState(false);
  const [snackMessage, setMessage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSelection = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const changeValue = () => {
    if (value === 68) {
      setValue(32);
    } else {
      setValue(0);
    }
  };
  const handleAddress = (event) => {
    setSelectedAddress(event);
    console.log(selectedAddress);
    getCartData();
    setValue(32);
  };

  const handleClose = (event, reason) => {
    if (reason !== "clickaway") {
      return;
    }
    setopen(false);
  };

  const handleConfirmation = () => {
    setValue(68);
  };
  const finishOrder = () => {
    save();
  };

  async function save() {
    if (selectedButton !== null && selectedAddress !== {}) {
      let result = await fetch(
        "http://localhost:8082/res/v1/user/order/products",
        {
          method: "POST",
          crossDomain: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: null,
            user: {
              id: userId,
            },
            address: selectedAddress,
            paymentMethod: selectedButton,
          }),
        }
      );
      if (result.ok) {
        setValue(100);
      }
    } else {
      setopen(true);
      setMessage("Something went wrong");
    }
  }
  useEffect(() => {
    fetchData();
  }, [value]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickForMenu = () => {
    navigate("/menu?id=" + userId);

    // setIsDisabled(true); // Disable the button during the delay
    // setTimeout(() => {
    //   // Perform the action or logic you want after the delay
    //   console.log("Delayed action executed");
    //   // Enable the button again after the action is performed
    //   setIsDisabled(false);
    // }, 2000); // 2000 milliseconds (2 seconds) delay
  };

  async function fetchData() {
    await fetch("http://localhost:8082/res/v1/user/" + userId + "/address", {
      method: "GET",
      dataType: "application/json",
      crossDomain: true,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFirst(data.first);
        setSecond(data.second);
      });
  }

  async function getCartData() {
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
      });
  }

  return (
    <div className={classes.backGround}>
      <Snackbar
        open={open}
        autoHideDuration={30000}
        message={snackMessage}
        onClose={handleClose}
      ></Snackbar>
      <div className={classes.progress}>
        {(value === 32 || value === 68) && (
          <div
            style={{
              height: "100%",
              width: "20%",
              float: "left",
            }}
          >
            <Button
              onClick={changeValue}
              style={{
                height: "80px",
                width: "80px",
                background: "brown",
                borderRadius: "50px",
                marginLeft: "50px",
                marginTop: "45px",
              }}
            >
              <ArrowBackIcon
                fontSize="large"
                sx={{ width: "100%", height: "100%", color: "yellow" }}
              />
            </Button>
          </div>
        )}
        <div
          style={{
            height: "100%",
            width: "80%",
            float: "right",
          }}
        >
          <div style={{ height: "50%" }}></div>
          <div style={{ height: "50%" }}>
            <ProgressBar
              percent={value}
              filledBackground="linear-gradient(to right, red, black)"
              height="25px"
            >
              <Step transition="scale">
                {({ accomplished }) => (
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "30px",
                      backgroundColor: "red",
                    }}
                  >
                    <HomeIcon
                      fontSize="large"
                      sx={{ width: "100%", height: "100%", color: "yellow" }}
                    />
                  </div>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "30px",
                      backgroundColor: "red",
                    }}
                  >
                    <ThumbUpOffAltIcon
                      fontSize="large"
                      sx={{ width: "100%", height: "100%", color: "yellow" }}
                    />
                  </div>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "30px",
                      backgroundColor: "red",
                    }}
                  >
                    <CurrencyRupeeIcon
                      fontSize="large"
                      sx={{ width: "100%", height: "100%", color: "yellow" }}
                    />
                  </div>
                )}
              </Step>
              <Step transition="scale">
                {({ accomplished }) => (
                  <div
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "30px",
                      backgroundColor: "red",
                    }}
                  >
                    <ThumbUpAltIcon
                      fontSize="large"
                      sx={{ width: "100%", height: "100%", color: "yellow" }}
                    />
                  </div>
                )}
              </Step>
            </ProgressBar>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        {value === 0 && (
          <Card
            style={{
              height: "85%",
              width: "78%",
              marginTop: "20px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "50%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundImage: "url(" + gif1 + ")",
                backgroundRepeat: "unset",
              }}
            >
              {first.map((address) => (
                <Card
                  elevation={5}
                  style={{
                    width: "30%",
                    height: "70%",
                    backgroundImage: "url(" + gradient + ")",
                    color: "white",
                  }}
                >
                  <div style={{ height: "80%", overflow: "hidden" }}>
                    <h2
                      style={{
                        paddingTop: "10px",
                        paddingLeft: "30px",
                        fontSize: "30px",
                        fontFamily: "monospace",
                      }}
                    >
                      {address.houseNo}&nbsp;&nbsp;
                      {address.street}
                      <br></br>
                      {address.area}
                    </h2>
                  </div>
                  <div style={{ height: "20%" }}>
                    <Button
                      onClick={() => handleAddress(address)} // Use an arrow function
                      variant="outlined"
                      style={{
                        height: "40px",
                        width: "150px",
                        marginLeft: "130px",
                        bottom: "0",
                        backgroundColor: "#C0C0C0",
                        borderRadius: "10px",
                        color: "red",
                        boxShadow: "0 0 1px 2px #C0C0C0",
                      }}
                    >
                      select
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div
              style={{
                height: "50%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundImage: "url(" + gif1 + ")",
                backgroundRepeat: "unset",
              }}
            >
              {second.map((address) => (
                <Card
                  elevation={5}
                  style={{
                    width: "35%",
                    height: "80%",
                    backgroundImage: "linear-gradient(to right,blue,blue)",
                  }}
                >
                  <div style={{ height: "80%", overflow: "hidden" }}>
                    <h2
                      style={{
                        paddingTop: "10px",
                        paddingLeft: "30px",
                        fontSize: "30px",
                        fontFamily: "monospace",
                      }}
                    >
                      {address.houseNo}&nbsp;&nbsp;
                      {address.street}
                      <br></br>
                      {address.area}
                    </h2>
                  </div>
                  <div style={{ height: "20%" }}>
                    <Button
                      onClick={() => handleAddress(address)} // Use an arrow function
                      variant="outlined"
                      style={{
                        height: "40px",
                        width: "150px",
                        marginLeft: "130px",
                        bottom: "0",
                        backgroundColor: "#C0C0C0",
                        borderRadius: "10px",
                        color: "red",
                        boxShadow: "0 0 1px 2px #C0C0C0",
                      }}
                    >
                      select
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        )}
        {value === 32 && (
          <Card
            style={{
              height: "85%",
              width: "78%",
              borderRadius: "20px",
              // background: "#fdfa72",
              // background: "#fa86c4",
              background: "grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Card
              elevation={10}
              style={{
                height: "70%",
                width: "70%",
                // backgroundColor: "#FF69B4",
                background: "#333333",
              }}
            >
              {data.map((s) => (
                <h1
                  style={{
                    paddingLeft: "80px",
                    fontFamily: "monospace",
                    color: "white",
                    fontSize: data.length > 5 ? "20px" : "40px",
                  }}
                >
                  {s.count}&nbsp;&nbsp;x&nbsp;&nbsp;{s.name}
                </h1>
              ))}
            </Card>
            <Button
              onClick={handleConfirmation}
              style={{
                height: "50px",
                width: "200px",
                backgroundColor: "blue",
                color: "white",
              }}
            >
              proceed
            </Button>
          </Card>
        )}
        {value === 68 && (
          <Card
            style={{
              height: "85%",
              width: "78%",
              borderRadius: "20px",
              // background: "red",
              backgroundImage: "url(" + money + ")",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "85%",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                elevation={7}
                style={{
                  height: "90px",
                  width: "700px",
                  borderRadius: "30px",
                  border: "2px solid #555555",
                  boxShadow: "0px 2px 4px rgba(0, 6, 0, 6)",
                  background: selectedButton === "UPI" ? "black" : null,
                }}
                // variant={selectedButton === "UPI" ? "contained" : "outlined"}
                onClick={() => handleSelection("UPI")}
              >
                <h2
                  style={{
                    fontSize: "35px",
                    color: selectedButton === "UPI" ? "red" : null,
                    fontFamily: "ui-sans-serif",
                  }}
                >
                  UPI
                </h2>
              </Button>
              <Button
                elevation={7}
                style={{
                  height: "90px",
                  width: "700px",
                  borderRadius: "30px",
                  fontSize: "25px",
                  background: selectedButton === "DEBIT CARD" ? "black" : null,
                  border: "2px solid #555555",
                  boxShadow: "0px 2px 4px rgba(0, 6, 0, 6)",
                }}
                // variant={
                //   selectedButton === "DEBIT CARD" ? "contained" : "outlined"
                // }
                onClick={() => handleSelection("DEBIT CARD")}
              >
                <h2
                  style={{
                    fontSize: "35px",
                    color: selectedButton === "DEBIT CARD" ? "red" : null,
                    fontFamily: "ui-sans-serif",
                  }}
                >
                  DEBIT CARD
                </h2>
              </Button>
              <Button
                elevation={7}
                style={{
                  height: "90px",
                  width: "700px",
                  borderRadius: "30px",
                  fontSize: "25px",
                  background:
                    selectedButton === "CASH ON DELIVERY" ? "black" : null,
                  border: "2px solid #555555",
                  boxShadow: "0px 2px 4px rgba(0, 6, 0, 6)",
                }}
                // variant={
                //   selectedButton === "CASH ON DELIVERY"
                //     ? "contained"
                //     : "outlined"
                // }
                onClick={() => handleSelection("CASH ON DELIVERY")}
              >
                <h2
                  style={{
                    fontSize: "35px",
                    color: selectedButton === "CASH ON DELIVERY" ? "red" : null,
                    fontFamily: "ui-sans-serif",
                  }}
                >
                  CASH ON DELIVERY
                </h2>
              </Button>
              <Button
                elevation={7}
                style={{
                  height: "90px",
                  width: "700px",
                  fontSize: "25px",
                  borderRadius: "30px",
                  background: selectedButton === "CREDIT CARD" ? "black" : null,
                  border: "2px solid #555555",
                  boxShadow:
                    "0px 2px 4px rgba(0, 6, 0, 6)" /* Black box shadow */,
                }}
                // variant={
                //   selectedButton === "CREDIT CARD" ? "contained" : "outlined"
                // }
                onClick={() => handleSelection("CREDIT CARD")}
              >
                <h2
                  style={{
                    fontSize: "35px",
                    color: selectedButton === "CREDIT CARD" ? "red" : null,
                    fontFamily: "ui-sans-serif",
                  }}
                >
                  CREDIT CARD
                </h2>
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20%",
                width: "100%",
              }}
            >
              <Button
                onClick={finishOrder}
                style={{
                  height: "50px",
                  width: "200px",
                  backgroundImage: "linear-gradient(to right,#00bcf2,#00b294)",
                  color: "purple",
                  fontSize: "20px",
                  fontFamily: "monospace",
                  fontStyle: "italic",
                }}
              >
                PLACE ORDER
              </Button>
            </div>
          </Card>
        )}
        {value === 100 && (
          <Card
            style={{
              height: "85%",
              width: "78%",
              display: "flex",
              flexDirection: "column",
              backgroundImage: "url(" + Celebration + ")",
              backgroundSize: "cover",
            }}
          >
            <Typography>
              <h2 className={classes.letterAnimation}>
                <strong>{"D O N E"}</strong>
              </h2>
            </Typography>
            <Typography>
              <h2 className={classes.letterAnimation2}>
                <strong>{"order placed"}</strong>
              </h2>
            </Typography>
            <Button
              onClick={handleClickForMenu}
              // disabled={isDisabled}
              style={{
                height: "60px",
                width: "220px",
                background: "linear-gradient(to right,red,black)",
                marginLeft: "600px",
                marginTop: "80px",
                fontSize: "15px",
                color: "white",
              }}
            >
              back to menu
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Order;
