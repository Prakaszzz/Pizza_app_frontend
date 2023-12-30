import { Card } from "@material-ui/core";
import { Sick } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

function CartCard({ image, num, name, id, userId, price, updateData, size }) {
  // const [num,setCount]=useState(num);
  const [value, setValue] = useState(false);

  const handleDecrement = async () => {
    // setCount(num - 1);
    if (num >= 1) {
      await addToCart(false, num);
    }
  };

  const handleIncrement = async () => {
    // setCount(num=> num+1);
    // setCount(num);
    if (num >= 0) {
      await addToCart(true, num);
    }
  };

  async function addToCart(b, num) {
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
    }).then((response) => {
      if (response.ok) {
        if (value) {
          setValue(false);
        } else {
          setValue(true);
        }
      }
    });
  }

  useEffect(() => {
    updateData();
  }, [value]);

  return (
    <div style={{ marginTop: "20px" }}>
      <Card
        elevation={10}
        style={{
          height: size ? "430px" : "300px",
          width: "100%",
          borderRadius: "20px",
          border: "2px solid grey",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            backgroundColor: "grey",
            paddingTop: "40px",
            float: "left",
          }}
        >
          <div
            style={{
              height: "80%",
              width: "80%",
              backgroundImage: image,
              backgroundSize: "cover",
              marginLeft: "50px",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "100%",
            width: "50%",
            float: "right",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Card
            elevation={5}
            style={{
              height: "50%",
              width: "70%",
              border: "2px solid grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "gray",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontFamily: "monospace",
                color: "white",
              }}
            >
              {num} x {name}
            </p>
          </Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              height: "100px",
              width: "500px",
            }}
          >
            <p
              style={{
                fontFamily: "monoscope",
                fontSize: "25px",
                color: "grey",
              }}
            >
              QTY
            </p>
            <Card
              style={{
                height: "40px",
                width: "150px",
                backgroundColor: "grey",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <button onClick={handleDecrement}>-</button>
              <span style={{ color: "white", fontSize: "20px" }}>{num}</span>
              <button onClick={handleIncrement}>+</button>
            </Card>
            <div
              style={{
                display: "flex",
                float: "right",
                height: "100%",
                width: "30%",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <p
                style={{
                  fontFamily: "monoscope",
                  fontSize: "25px",
                  color: "grey",
                }}
              >
                {num * price}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CartCard;
