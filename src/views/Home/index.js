import React from "react";

import './style.css'
import Header from "../../components/Header";
import User from "../../services/User.json"

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
      <div>
        <p>Corpo do site</p>
      </div>
    </div>
  );
}
