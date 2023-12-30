import Variety from './Variety'
import { useLocation, useNavigate ,useSearchParams} from "react-router-dom";
import { Button, Card, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styled, { keyframes } from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';




// const Menus = [{ label: 'A' }, { label: 'B' }, { label: 'C' }]
   
const useStyles = makeStyles((theme) => ({
    // arrowButton: {
    //   position: 'relative',
    //   overflow: 'hidden',
    // },
    arrowButtonLeft: {
        position: 'relative',
        width: '0',
        height: '0',
        padding: '0',
        borderTop: '50px solid transparent',
        borderBottom: '100px solid transparent',
        borderRight: `70px solid ${theme.palette.primary.main}`,
        // transform: 'rotate(-360deg)',
        borderRadius: '4px',
        overflow: 'hidden',
      },
      arrowButtonRight:{
        position: 'relative',
        width: '0',
        height: '0',
        padding: '0',
        borderTop: '35px solid transparent',
        borderBottom: '50px solid transparent',
        borderRight: `70px solid ${theme.palette.primary.main}`,
        transform: 'rotate(-180deg)',
        borderRadius: '4px',
        overflow: 'hidden',
      }
  }));

;

function VarietyList() {
    const navigate = useNavigate();

    // const [list, setList] = useState([]);
    const [firstHalf, setFirstHalf] = useState([]);
    const [secondHalf, setSecondhalf] = useState([]);

    const classes = useStyles();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const userId=searchParams.get('userId')
console.log(id)
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try{
        await fetch("http://localhost:8082/res/v1/variety/list/menu/" + id, {
            method: 'GET',
            dataType: 'application/json',
            crossDomain: true,
        }).then(response => {
            return response.json();
        }).then(res => {
            setFirstHalf(res.first);
            setSecondhalf(res.second);
        })
    }
    catch (error) {
        console.error('An error occurred:', error.message);
        // Handle the error gracefully
      }
    }
    const Cart = () => {
        navigate("/cart?id="+userId)
    }
    const Menu=()=> {
        navigate("/menu?id="+userId)
    }
    return (
        <div>
            <div> 
            <StyledCard>
            <Button  color='primary' variant='contained' size='large' onClick={Menu} style={{borderRadius:'25px'
, color: 'black' ,width:'200px',height:'75px',background: 'linear-gradient(45deg, black, transparent)'}}>
                                <p style={{color:'white'}}>Back</p>
             </Button>
                <div style={{width:'40%',display:'flex',justifyContent:'center'}}>
                 <p style={{fontFamily:'monospace',font:'icon',fontSize:'50px'}}>Pizza Plaza</p>
                 </div>
             <Button  color='primary' variant='contained' size='large' onClick={Cart} style={{borderRadius:'25px',color: 'black' ,width:'200px',height:'75px',background: 'linear-gradient(45deg, transparent,black)'}}>
                <p style={{color:'white'}}>Cart</p>
              </Button>
                </StyledCard>  
            </div>

        <div style={{
            position: 'relative', display: 'flex', flexDirection: 'row', width: '100%', paddingBottom: '40px', gap: "2rem",
            overflowY: 'scroll'
        }}>
            <div style={{
                display: 'flex', flexDirection: 'column', backgroundColor: 'white', position: 'relative',width: '49%',marginTop:'100px'
            }}>
                {firstHalf?.map((menu) => (
                    <Variety label={menu?.name} backGroundImage={menu?.imgUrl} id={menu?.id} userId={userId} price={menu?.price}/>
                ))}
            </div>
            <div style={{
                display: 'flex', flexDirection: 'column', backgroundColor: 'white', position: 'relative', width: '49%',marginTop:'100px'
            }}>
                {secondHalf?.map((menu) => (
                    <Variety label={menu?.name} backGroundImage={menu?.imgUrl} id={menu?.id} userId={userId} price={menu?.price}/>
                ))}
            </div>
            </div>
        </div>
    )
}

export default VarietyList

     


const StyledCard=styled(Card)`
        position: fixed;
        width: 100%;
        height:100px;
        background: linear-gradient(to right,#CF9FFF,#FFCCCB,#CF9FFF    );
        z-index:100;
        color: black;
        border: 2px solid  black;
        border-radius: 16px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
        `
        ;