import React, { useState, useEffect } from "react";
import "../css/Home.css";
import { Navbar, TableCashRegister, TableMesas } from "../components";
import PropagateLoader from "react-spinners/PropagateLoader";
import { getCashRegister } from "../services/Finances";
//import {useNavigate} from 'react-router-dom';

const override = {
  display: "block",
  borderColor: "red",
  marginTop: "20%",
  marginLeft: "50%",
};

const CashRegister = () => {
  const [allCashRegister, setAllCashRegister] = useState([
    { id: 1, enable: true, isOpen: true, totalIncome: 0 },
  ]);
  var cashRegister = [];

  const [loading, setLoading] = useState(false);
  const cashRegisterEnable = async () => {
    cashRegister = await getCashRegister();
  };
  useEffect(() => {
    setLoading(true);
    cashRegisterEnable();
    setTimeout(() => {
      setAllCashRegister(cashRegister);
      console.log(cashRegister);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={"red"}
          loading={loading}
          cssOverride={override}
          size={40}
        />
      ) : (
        <>
          <Navbar tipo={"finanzas"} />
          {allCashRegister[1] !== undefined ? (
            <TableCashRegister
              cashRegister={allCashRegister}
              setCashRegister={setAllCashRegister}
            />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default CashRegister;
