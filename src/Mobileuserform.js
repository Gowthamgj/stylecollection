import React from "react";
import { Button, Grid, GridCol, InputEle } from "./generic/generalfunctions";
export default class mobileuserform extends React.Component {
  render() {
    return (
      <Grid>
        <GridCol total="7" col="1">
          <InputEle type="text" placeholder="First name" />
        </GridCol>
        <GridCol total="7" col="2">
          <InputEle type="text" placeholder="Last name" />
        </GridCol>
        <GridCol total="7" col="3">
          <InputEle type="email" placeholder="Email" />
        </GridCol>
        <GridCol total="7" col="4">
          <InputEle type="text" placeholder="Phone number" />
        </GridCol>
        <GridCol total="7">
          <InputEle type="password" placeholder="Password" />
        </GridCol>
        <GridCol total="7" col="7">
          <InputEle type="password" placeholder="Confirm Passwrod" />
        </GridCol>
        <GridCol total="7" cols="7">
          <Button title="SAVE CHANGES" size="medium" type="dark" />
        </GridCol>
      </Grid>
    );
  }
}
