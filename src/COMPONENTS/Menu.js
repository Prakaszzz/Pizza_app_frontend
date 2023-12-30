import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import Logo from "../ASSETS/Menu/food.jpeg";
import { useSearchParams } from "react-router-dom";
import Burger from "../ASSETS/Menu/burger.jpg";
import Fries from "../ASSETS/Menu/fries.jpg";
import SandWitch from "../ASSETS/Menu/sandwitch.png";
import SoftDrinks from "../ASSETS/Menu/soft-drinks.webp";
import Chicken from "../ASSETS/Menu/chicken.jpg";
import Puff from "../ASSETS/Menu/puffs.jpg";
import Rolls from "../ASSETS/Menu/rolls.jpg";

const Menus = [
  {
    label: "Pizza",
    backgroundImage:
      "url(http://drive.google.com/uc?export=view&id=1p4WlE2qxs-mS0NBSo0FnpdnS_6jhIciI)",
  },
  { label: "Burger", backgroundImage: "url(" + Burger + ")" },
  { label: "Fries", backgroundImage: "url(" + Fries + ")" },
];

const Arrays = [
  { label: "Sandwitch", backgroundImage: "url(" + SandWitch + ")" },
  { label: "Drinks", backgroundImage: "url(" + SoftDrinks + ")" },
  { label: "Chicken", backgroundImage: "url(" + Chicken + ")" },
];

const Items = [
  {
    label: "juice",
    backgroundImage:
      "url(http://drive.google.com/uc?export=view&id=1p4WlE2qxs-mS0NBSo0FnpdnS_6jhIciI)",
  },
  { label: "puff", backgroundImage: "url(" + Puff + ")" },
  { label: "roll", backgroundImage: "url(" + Rolls + ")" },
];

function Menu() {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await fetch("http://localhost:8082/res/v1/menus", {
      method: "GET",
      dataType: "application/json",
      crossDomain: true,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRow1(data.result.row1);
        setRow2(data.result.row2);
        setRow3(data.result.row3);
      });
  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundImage: "url(" + Logo + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={prakash.as}>
        {row1.map((menu) => (
          <MenuCard
            label={menu?.name}
            backgroundImage={menu?.imgUrl}
            id={menu.id}
            userId={id}
          />
        ))}
      </div>
      <div style={prakash.bs}>
        {row2.map((menu) => (
          <MenuCard
            label={menu?.name}
            backgroundImage={menu?.imgUrl}
            id={menu.id}
            userId={id}
          />
        ))}
      </div>
      <div style={prakash.cs}>
        {row3.map((menu) => (
          <MenuCard
            label={menu?.name}
            backgroundImage={menu?.imgUrl}
            id={menu.id}
            userId={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;

const prakash = {
  as: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "start",
    margin: "3em",
  },
  bs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "3em",
  },
  cs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "end",
    margin: "3em",
  },
};
