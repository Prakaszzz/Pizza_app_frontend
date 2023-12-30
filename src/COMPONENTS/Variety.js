import React from "react";
import CardContent from "@mui/material/CardContent";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import IconButton from "@mui/material/IconButton";

function Variety({ label, backGroundImage, id, userId, price }) {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await fetch(
      "http://localhost:8082/res/v1/user/" +
        userId +
        "/variety/" +
        id +
        "/count",
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
        setCount(data);
      });
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      if (count >= 1) {
        addToCart(false);
      }
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count, "Count");
    if (count >= 0) {
      console.log("Hi");
      addToCart(true);
    }
  };

  async function addToCart(b) {
    await fetch("http://localhost:8082/res/v1/cart/product?s=" + b, {
      method: "PUT",
      crossDomain: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
      body: JSON.stringify({
        userId: userId,
        varietyId: id,
      }),
    });
  }

  return (
    <div>
      <Card
        sx={{
          height: "500px",
          width: "100%",
          color: "black",
          border: "5px solid black",
          borderRadius: "16px",
          display: "flex",
          position: "relative",
          margin: "5px",
          padding: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "85%",
            width: "100%",
            perspective: "1000px", // Set the perspective for 3D transforms
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              transformStyle: "preserve-3d", // Ensure proper rendering of 3D transforms
              transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)", // Apply flip on hover
              transition: isHovered ? "none" : "transform 0.6s ease", // No transition on hover, smooth on leave
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Front side */}
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                backfaceVisibility: "hidden", // Hide the back side when front is visible
                backgroundImage: backGroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>

            {/* Back side */}
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                backfaceVisibility: "hidden", // Hide the front side when back is visible
                transform: "rotateY(180deg)", // Rotate to face the opposite direction (back side)
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(to right, #c4d7e6 50%, #66a5ad 50%, #66a5ad 50%)",
              }}
            >
              <div style={{ width: "50%" }}>
                <CurrencyRupeeIcon
                  fontSize="large"
                  sx={{ width: "30%", height: "30%" }}
                />
              </div>
              <p
                style={{
                  fontSize: "75px",
                  fontFamily: "monoscope",
                  fontPalette: "dark",
                }}
              >
                {price}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "15%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            border: "3px solid black",
            backgroundImage: "linear-gradient(to right,#CF9FFF,#FFCCCB,white)",
          }}
        >
          <CardContent style={{ width: "100%" }}>
            <Typography
              variant="h3"
              fontWeight={700}
              fontSize={"cover"}
              position={"absolute"}
              gutterBottom
            >
              {label}
            </Typography>
          </CardContent>
          <CardActions>
            <Card
              style={{
                color: "red",
                display: "flex",
                backgroundColor: "white",
                position: "relative",
                minWidth: "150px",
                minHeight: "50px",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "linear-gradient(to right, lightgreen, aqua)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
            </Card>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default Variety;
