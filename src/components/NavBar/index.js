import React from "react";
import "./styles.css"

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PixIcon from '@mui/icons-material/Pix';
import { Button } from "@mui/material";

export default function NavBar({selectedTab, setSelectedTab}) {

  return (
    <div className="NavBarContainer">
      <Button onClick={() => {setSelectedTab(0)}}>
        <div className={selectedTab === 0 ? "NavBarSelectedIcon" : "NavBarItem"}>
          <HomeRoundedIcon fontSize="large"  />
          <p>Home</p>
        </div>
      </Button>
      <spam className="Divider" />
      <Button onClick={() => {setSelectedTab(1)}}>
        <div className={selectedTab === 1 ? "NavBarSelectedIcon" : "NavBarItem"}>
          <CreditCardIcon fontSize="large"  />
          <p>Meus cartoes</p>
        </div>
      </Button>
      <spam className="Divider" />
      <Button onClick={() => {setSelectedTab(2)}}>
        <div className={selectedTab === 2 ? "NavBarSelectedIcon" : "NavBarItem"}>
          <RequestQuoteIcon fontSize="large"  />
          <p>Boletos</p>
        </div>
      </Button>
      <spam className="Divider" />
      <Button onClick={() => {setSelectedTab(3)}}>
        <div className={selectedTab === 3 ? "NavBarSelectedIcon" : "NavBarItem"}>
          <PixIcon fontSize="large" />
          <p>Area Pix</p>
        </div>
      </Button>
    </div>
  );
}