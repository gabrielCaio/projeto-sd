import React from "react";

import './style.css'
import Header from "../../components/Header";
import User from "../../services/User.json"
import NavBar from "../../components/NavBar";

export default function HomePage() {
  const FintechName = "Nubank";
  const UserData = User;

  return (
    <div className="Container">
      <Header 
        FintechName={FintechName} 
        UserName={UserData.Name}
        UserSaldo={UserData.Saldo}
        UserLimiteCartao={UserData.LimiteCartao}
      />
      <NavBar />
      <div>
        <p>Corpo do site</p>
        <p>Corpo do site</p>
      </div>
    </div>
  );
}
