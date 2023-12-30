import React from 'react'
import { Grid } from '@material-ui/core'

function GridExamples() {
  return (
      <div>
          {/* <Grid  container  >
              <Grid item lg={3}  spacing={2} style={{backgroundColor:'red'}}> Hello</Grid>
              <Grid item lg={3}  spacing={5} style={{backgroundColor:'green'}}> Hello</Grid>
              <Grid item lg={3} style={{backgroundColor:'yellow'}}> Hello</Grid>
              <Grid item lg={3} style={{backgroundColor:'maroon'}}> Hello</Grid>
          </Grid> */}
          <Grid container spacing={3}>
    <Grid item xs={4} style={{border:'2px solid black'}}></Grid>
    <Grid item xs={4} style={{border:'2px solid black'}}></Grid>
</Grid>
      </div>
  )
}

export default GridExamples