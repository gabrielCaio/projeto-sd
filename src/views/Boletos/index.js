import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid, TextField, Button } from "@mui/material";

const Item = styled(Paper)(() => ({
  backgroundColor: 'white',
  padding: '30px',
  paddingTop: '30px',
  paddingBottom: '40px',
  "&:hover": {
    marginTop: '10px',
  },
}));

const Field = styled(Grid)(() => ({
  paddingTop: '40px',
}));

export default function Boletos() {
  return (
    <div className="PageContent">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <h3 className="Title">Pagar boleto</h3>

            <div style={{ marginTop: 15 }}>
              <p className="Value">
                Informe o código de barras para buscar o boleto que deseja pagar
              </p>
            </div>

            <Field>
              <TextField id="outlined-basic" label="Código de barras" variant="outlined" fullWidth />
            </Field>


            <p className="BottomCard">
              <Button>
                Buscar boleto
              </Button>
            </p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}