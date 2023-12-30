import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Card } from '@mui/material'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { to } from 'react-spring';


function MenuCard({ label, backgroundImage, id,userId}) {
    const navigate = useNavigate();

    const VareityPage = () => {
        navigate("/varietyList?id="+id+"&userId="+userId)
    }


    console.log(backgroundImage)
    return (
        <Card sx={{ height: '250px', width: '350px', color: 'black', border: '2px solid red', borderRadius: '16px', backgroundImage: backgroundImage, backgroundSize: 'cover' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', position: 'relative' }}>
                <CardContent>
                    <Typography variant='h3' fontWeight={700} fontSize={'cover'} position={'absolute'} gutterBottom style={{
                        color: 'white',
                        textShadow: '  0.07em 0 black,  0 0.07em black,  -0.07em 0 black, 0 -0.07em black'
                    }}>
                        {label}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button style={{ color: 'red', backgroundColor: 'white', display: 'flex', flexDirection: 'flex-end',border:'1px solid black',boxShadow:'0 5px 15px black'}} onClick={VareityPage}>Check Now</Button>
                </CardActions>
            </div>
        </Card>
    )
}

export default MenuCard
