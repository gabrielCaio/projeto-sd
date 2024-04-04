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

export default function Pix() {
  return (
    <div className="PageContent">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <h3 className="Title">Minhas chaves</h3>

            <p className="Subtitle">Chave:</p>
            <p className="Value">CHAVE_DO_USER_AQUI</p>
            <p className="BottomCard">
              <Button>
                Adicionar nova chave
              </Button>
            </p>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <h3 className="Title">Fazer Pagamento</h3>

            <p className="BottomCard">
              <Button>
                Nova transação
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