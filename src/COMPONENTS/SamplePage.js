import { Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
const useStyles = makeStyles((theme) => ({
  backGround: {
    background: "linear-gradient(0deg,#243b55,#141e30)",
    height: "100vh",
  },
  upper: {
    height: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  middle: {
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end", 
  },
  lower: {
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
  },
  // curve:{
  //     width: '500px',
  //     height: '100px',
  //     border: '4px solid white',
  //     // borderColor: 'white transparent transparent transparent',
  //     borderRadius: '40%/0 0 100px 100px',
  //     backgroundColor:'black'
  // }
}));

function FrontPage() {
  const navigate = useNavigate();
  const MenuPage = () => {
    console.log(id, "second one");
    navigate("/menu?id=" + id);
  };
  const cartPage = () => {
    navigate("/previousOrders?id=" + id);
  };
  const AddressPage = () => {
    navigate("/address?id=" + id);
  };
  const AboutPage = () => {
    navigate("/about?id=" + id);
  };
  const [hover1, setIsHoveredFirst] = useState(false);
  const [hover2, setIsHoveredSecond] = useState(false);
  const [hover3, setIsHoveredThird] = useState(false);
  const [hover4, setIsHoveredFourth] = useState(false);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const classes = useStyles();
  const shapeName = "vj";

  return (
    <div className={classes.backGround}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "red",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              bubble: {
                distance: 400,
                size: 20,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className={classes.upper}>
        <Button
          variant="outlined"
          onClick={MenuPage}
          onMouseEnter={() => setIsHoveredFirst(true)}
          onMouseLeave={() => setIsHoveredFirst(false)}
          style={{
            backgroundColor: "black",
            width: "350px",
            height: "150px",
            border: hover1 ? "7px solid white" : "3px solid white",
            color: "red",
            fontSize: "30px",
            boxShadow: hover1 ? "0 5px 15px #afe0f5" : null,
          }}
        >
          Menu
        </Button>
        <Button
          variant="outlined"
          onClick={AboutPage}
          onMouseEnter={() => setIsHoveredSecond(true)}
          onMouseLeave={() => setIsHoveredSecond(false)}
          style={{
            backgroundColor: "black",
            width: "350px",
            height: "150px",
            border: hover2 ? "7px solid white" : "3px solid white",
            color: "red",
            fontSize: "30px",
            boxShadow: hover2 ? "0 5px 15px #afe0f5" : null,
          }}
        >
          About Us
        </Button>
      </div>
      <div className={classes.middle}>
        {/* <Button variant='outlined' style={{backgroundColor:'black',width:'250px',height:'100px',border:'3px solid white',color:'red',fontSize:'20px'}}>
             Add Address
         </Button> */}
      </div>
      <div className={classes.lower}>
        {/* <div className={classes.curve}>
         </div> */}
        <Button
          variant="outlined"
          onClick={AddressPage}
          onMouseEnter={() => setIsHoveredThird(true)}
          onMouseLeave={() => setIsHoveredThird(false)}
          style={{
            backgroundColor: "black",
            width: "350px",
            height: "150px",
            border: "6px solid white",
            color: "red",
            fontSize: "30px",
            boxShadow: hover3 ? "0 5px 15px #afe0f5" : null,
            border: hover3 ? "7px solid white" : "3px solid white",
          }}
        >
          Add Address
        </Button>
        <Button
          variant="outlined"
          onClick={cartPage}
          onMouseEnter={() => setIsHoveredFourth(true)}
          onMouseLeave={() => setIsHoveredFourth(false)}
          style={{
            backgroundColor: "black",
            width: "350px",
            height: "150px",
            border: "6px solid white",
            color: "red",
            fontSize: "30px",
            boxShadow: hover4 ? "0 5px 15px #afe0f5" : null,
            border: hover4 ? "7px solid white" : "3px solid white",
          }}
        >
          Your Orders
        </Button>
      </div>
    </div>
  );
}

export default FrontPage;
