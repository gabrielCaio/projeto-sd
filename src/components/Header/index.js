import React from "react";

import './style.css'
import { Avatar} from "@mui/material";

export default function Header({FintechName, UserName, UserSaldo, UserLimiteCartao}) {

  return (
    <div className="Header">
      <h1>{FintechName}</h1>
      <div className="UserInfos">
        <div className="Saldo">
          <p className="SaldoTitle">Limite Total</p>
          <p>R$ {UserLimiteCartao}</p>
        </div>
        <div className="Saldo">
          <p className="SaldoTitle">Limite disponivel</p>
          <p>R$ {UserLimiteCartao - UserSaldo}</p>
        </div>
        <div className="Saldo">
          <p className="SaldoTitle">Saldo</p>
          <p>R$ {UserSaldo}</p>
        </div>
        <spam className="Divider" />
        <div className="Profile">
          <Avatar>{UserName.charAt(0)}</Avatar>
          <div className="ProfileInfo">
            <p>Olá,</p>
            <p>{UserName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
