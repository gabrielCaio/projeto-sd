import React, { useState } from "react";

import './style.css'
import Header from "../../components/Header";
import User from "../../services/User.json"
import NavBar from "../../components/NavBar";

import Fintech from '../../services/Fintech.json';
import Saldo from "../Saldo";
import Cartoes from "../Cartoes";
import Boletos from "../Boletos";
import Pix from "../Pix";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState(0);

  function getPage() {
    switch (selectedTab) {
      case 1:
        return (
          <Cartoes />
        );
      case 2:
        return (
          <Boletos />
        );
      case 3:
        return (
          <Pix />
        );
      default:
        return (
          <Saldo UserSaldo={User.Saldo} UserLimiteCartao={User.LimiteCartao} />
        );
    }
  }

  return (
    <div>
      <Header 
        FintechName={Fintech.Nome} 
        UserName={User.Name}
        UserSaldo={User.Saldo}
        UserLimiteCartao={User.LimiteCartao}
      />
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {
        getPage()
      }
    </div>
  );
}
