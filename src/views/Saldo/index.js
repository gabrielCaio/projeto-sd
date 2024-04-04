import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Grid } from "@mui/material";

const Item = styled(Paper)(() => ({
  backgroundColor: 'white',
  padding: '30px',
  paddingTop: '30px',
  paddingBottom: '40px',
  "&:hover": {
    marginTop: '10px',
  },
}));

export default function Saldo({UserSaldo, UserLimiteCartao}) {
  return (
    <div className="PageContent">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <h3 className="Title">Area Débito</h3>

            <p className="Subtitle">Saldo na conta:</p>
            <p className="Value">R$ {UserSaldo}</p>
            <p className="BottomCard">
              <Button>
                Adicionar Saldo
              </Button>
            </p>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <h3 className="Title">Area Crédito</h3>

            <p className="Subtitle">Limite da conta:</p>
            <p className="Value">R$ {UserLimiteCartao}</p>

            <p className="Subtitle">Limite disponivel:</p>
            <p className="Value">R$ {UserLimiteCartao - UserSaldo}</p>

            <p className="BottomCard">
              Caso deseje aumentar seu limite, entre em contato com o suporte!
            </p>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item>
            <h3 className="Title">Extrato</h3>

            <p className="BottomCard">
              Area em contrução
            </p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}