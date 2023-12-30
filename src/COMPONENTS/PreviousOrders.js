import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "@material-ui/core";
import { Check } from "@mui/icons-material";

function createData(name, color, capacity, fuel, price) {
  return { name, color, capacity, fuel, price };
}

const rows = [
  createData("TATA HARRIER", "BLACK", 6, "DIESEL", "14 LACS"),
  createData("MAHINDRA THAR", "RED", 4, "DIESEL", "16 LACS"),
  createData("MARUTI SWIFT", "WHITE", 5, "PETROL", "9 LACS"),
  createData("MG HECTOR", "BLACK", 5, "PETROL", "18 LACS"),
  createData("MERCEDES GLS", "WHITE", 5, "DIESEL", "52 LACS"),
];

export default function SimpleTable() {
  useEffect(() => {
    fetchData();
  }, []);
  
  const [orderData,setOrderData ] = useState([]);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");


  async function fetchData() {
    await fetch("http://localhost:8082/res/v1/user/" + userId + "/orders", {
      method: "GET",
      dataType: "application/json",
      crossDomain: true,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const updatedData = data.map(order => {
          const zonedDateTimeString = order.orderedTime;
          const dateObj = new Date(zonedDateTimeString);
          const options = { year: 'numeric', month: 'short', day: 'numeric' };
          const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);
          return {
            ...order, // Spread the existing properties of the object
            orderedTime:formattedDate
          };
        });
        setOrderData(updatedData)

      });
  }
  console.log(orderData)
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#020202",
        paddingLeft:'50px'
      }}
    >
      <Card
        elevation={10}
        style={{
          width: "60%",
          height: "70%",
          boxShadow: "0 0 50px white"
          // boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
          // paddingLeft: "70px",
          // paddingRight: "40px",
          // background: "aqua",
        }}
      >
        <TableContainer
          style={
            {
              // background: "grey",
              // width: "80%",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }
          }
          component={Paper}
        >
          <Table
            sx={{
              // height: "800px",
              // width: "700px",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              minWidth: "650px",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "red",fontFamily:'fantasy',borderBottom:"2px solid red",borderRight:"2px solid black"}}>ORDER-ID</TableCell>
                <TableCell style={{ color: "red" ,borderBottom:"2px solid red",borderRight:"2px solid black"}}> ORDERED-TIME</TableCell>
                <TableCell style={{ color: "red",borderBottom:"2px solid red",borderRight:"2px solid black" }}> TOTAL-PRICE(Rs)</TableCell>
                <TableCell style={{ color: "red",borderBottom:"2px solid red"}}>DETAILS</TableCell>
                <TableCell style={{borderBottom:"2px solid red"}}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {orderData.map((row) => (
                <TableRow
                style={{border:'3px sold green'}}
                >
                  <TableCell style={{borderBottom:"2px solid red",borderRight:"2px solid black"}} component="th" scope="row">  {row.id}</TableCell>
                  <TableCell style={{borderBottom:"2px solid red",borderRight:"2px solid black"}} component="th" scope="row">
                    {row.orderedTime
}
                  </TableCell>
                  <TableCell style={{borderBottom:"2px solid red",borderRight:"2px solid black"}} component="th" scope="row">{row.totalPrice}</TableCell>
                  <TableCell style={{borderBottom:"2px solid red"}} scope="row" component={Link} to={""} key={""}>Check here</TableCell>
                  <TableCell style={{borderBottom:"2px solid red"}}></TableCell>
                </TableRow>
              ))}
            </TableBody>  
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}






// New
// import React from 'react';
// import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   container: {
//     maxHeight: 300, // Set the maximum height for the container
//     overflowY: 'auto', // Enable vertical scrolling
//   },
// });

// const ScrollableTable = () => {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper} className={classes.container}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Column 1</TableCell>
//             <TableCell>Column 2</TableCell>
//             {/* Add more table header cells if needed */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {/* Render table rows */}
//           {/* Example: */}
//           <TableRow>
//             <TableCell>Data 1</TableCell>
//             <TableCell>Data 2</TableCell>
//             {/* Add more table cells with row data */}
//           </TableRow>
//           {/* Add more table rows with data */}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ScrollableTable;

