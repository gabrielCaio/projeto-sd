import React, { useState } from "react";

import './style.css'
import Header from "../../components/Header";
import User from "../../services/User.json"
import NavBar from "../../components/NavBar";

export default function HomePage() {
  const FintechName = "Nubank";
  const UserData = User;
  const [selectedTab, setSelectedTab] = useState(0);

  function getPage() {
    switch (selectedTab) {
      case 1:
        return (
          <p>Tela dos meus cartoes</p>
        );
      case 2:
        return (
          <p>Tela de boletos</p>
        );
      case 3:
        return (
          <p>Tela da area pix</p>
        );
      default:
        return (
          <p>Tela principal</p>
        );
    }
  }

  return (
    <div className="Container">
      <Header 
        FintechName={FintechName} 
        UserName={UserData.Name}
        UserSaldo={UserData.Saldo}
        UserLimiteCartao={UserData.LimiteCartao}
      />
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {
        getPage()
      }
    </div>
  );
}
