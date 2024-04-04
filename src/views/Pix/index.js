import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";

import "./style.css"

const Item = styled(Paper)(() => ({
  backgroundColor: '#ECE8ED',
  textAlign: 'center',
  paddingTop: '50px',
  paddingBottom: '50px',
}));

export default function Pix({UserSaldo, UserLimiteCartao}) {
  return (
    <div className="PageContent">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>Item 1</Item>
        </Grid>
        
        <Grid item xs={6}>
          <Item>Item 2</Item>
        </Grid>
      </Grid>
    </div>
  );
}