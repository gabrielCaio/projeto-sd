import React from "react";
import "./styles.css"

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PixIcon from '@mui/icons-material/Pix';
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <div className="NavBarContainer">
      <Button>
        <div className="NavBarSelectedIcon">
          <HomeRoundedIcon fontSize="large"  />
          <p>Home</p>
        </div>
      </Button>
      <spam className="Divider" />
      <Button>
        <div className="NavBarItem">
          <CreditCardIcon fontSize="large"  />
          <p>Meus cartoes</p>
        </div>
      </Button>
      <spam className="Divider" />
      <Button>
        <div className="NavBarItem">
          <RequestQuoteIcon fontSize="large"  />
          <p>Boletos</p>
        </div>
      </Button>
      <spam className="Divider" />
      <Button>
        <div className="NavBarItem">
          <PixIcon fontSize="large" />
          <p>Area Pix</p>
        </div>
      </Button>
    </div>
  );
}