import { Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";

const useStyles = makeStyles((theme) => ({
 backGround:{
    background:'linear-gradient(0deg,#243b55,#141e30)',
    height:'100vh'
},
upper:{
    height:'40%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'flex-end',
},
middle:{
    height:'20%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
},
lower:{
       height:'40%',
       display:'flex',
       alignItems:'flex-start',
       justifyContent:'space-around',
       flexDirection:'row',

}
// curve:{
//     width: '500px', 
//     height: '100px',  
//     border: '4px solid white',
//     // borderColor: 'white transparent transparent transparent',
//     borderRadius: '40%/0 0 100px 100px',
//     backgroundColor:'black'
// }
 
  }));

;

function FrontPage() {
    const classes = useStyles();
  return (
    <div className={classes.backGround}>
        <div className={classes.upper}>
            <Button variant='outlined' style={{backgroundColor:'black',width:'350px',height:'150px',border:'5px solid white',color:'red',fontSize:'30px'}}>
             Menu
            </Button>
            <Button variant='outlined' style={{backgroundColor:'black',width:'350px',height:'150px',border:'5px solid white',color:'red',fontSize:'30px'}}>
About Us
            </Button>
        </div>
        <div className={classes.middle}>
        {/* <Button variant='outlined' style={{backgroundColor:'black',width:'250px',height:'100px',border:'3px solid white',color:'red',fontSize:'20px'}}>
            Add Address
        </Button> */}
        <Card style={{borderRadius:'50px',height:'250px',width:'250px',backgroundColor:''}}>
        </Card>
            </div>
            <div className={classes.lower}>
        <Button variant='outlined' style={{backgroundColor:'black',width:'350px',height:'150px',border:'5px solid white',color:'red',fontSize:'30px'}}>
             Add Address
            </Button>
            <Button variant='outlined' style={{backgroundColor:'black',width:'350px',height:'150px',border:'5px solid white',color:'red',fontSize:'30px'}}>
               Cart
            </Button>
       
            </div>
    </div>
  )
}

export default FrontPage