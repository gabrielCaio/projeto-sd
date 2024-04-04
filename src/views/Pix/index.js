import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Grid, TextField } from "@mui/material";

import PixData from "../../services/Pix.json"

const Item = styled(Paper)(() => ({
  backgroundColor: 'white',
  padding: '30px',
  paddingTop: '30px',
  paddingBottom: '40px',
  "&:hover": {
    marginTop: '10px',
  },
}));

const Description = styled(Grid)(() => ({
  marginTop: '10px',
}));

const Field = styled(Grid)(() => ({
  paddingTop: '10px',
  marginLeft: '40px',
}));

export default function Pix() {
  return (
    <div className="PageContent">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <h3 className="Title">Minhas chaves</h3>
            
            {PixData.map((item) => {
              return (
                <div>
                  <p className="Subtitle">
                    Chave {item.type.charAt(0).toUpperCase() + item.type.slice(1)}:
                  </p>
                  <p className="Value">{item.chave}</p>
                </div>
              );
            })}

            <p className="BottomCard">
              <Button>
                Adicionar nova chave
              </Button>
            </p>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <h3 className="Title">Fazer transferência</h3>
            <Description>
              Informe o valor e a chave Pix para qual você deseja fazer a transferência
            </Description>

            <p className="Subtitle">Valor:</p>
            <Field>
              <TextField id="outlined-basic" label="R$" variant="outlined" type="number" />
            </Field>

            <p className="Subtitle">Chave pix:</p>
            <Field>
              <TextField id="outlined-basic" label="Chave" variant="outlined" />
            </Field>

            <p className="BottomCard">
              <Button>
                Realizar pix
              </Button>
            </p>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <h3 className="Title">Transações recentes</h3>

            <p className="BottomCard">
              Em construção
            </p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}