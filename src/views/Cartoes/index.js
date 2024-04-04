import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid, Button } from "@mui/material";

import Cards from '../../services/Cards.json';

const Item = styled(Paper)(() => ({
  backgroundColor: 'white',
  padding: '30px',
  paddingTop: '30px',
  paddingBottom: '40px',
  "&:hover": {
    marginTop: '10px',
  },
}));

export default function Cartoes() {
  return (
    <div className="PageContent">
      <Grid container spacing={2}>
        {Cards.map((item) => {
          return (
          <Grid item xs={6}>
            <Item>
              <h2 className="Title">Meu cartão</h2>

              <p className="Subtitle">Número do cartão:</p>
              <p className="Value">{item.Numero}</p>
              
              <p className="Subtitle">Data de validade:</p>
              <p className="Value">{item.DataValidade}</p>

              <p className="Subtitle">Código de segurança:</p>
              <p className="Value">{item.CVV}</p>
            </Item>
          </Grid>
          );
        })}

        <Grid item xs={6}>
          <Item>
            <p className="BottomCard">
              <Button>
                Gerar novo cartão
              </Button>
            </p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}