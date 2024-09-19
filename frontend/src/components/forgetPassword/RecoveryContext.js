import React, { createContext, useState } from "react";
import Homepage from "../../pages/Homepage";

export const RecoveryContext = createContext();

function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");

  return (
    <RecoveryContext.Provider
      value={{ page, setPage, otp, setOTP, setEmail, email }}
    >
      <div className="flex justify-center items-center">
        <Homepage />
      </div>
    </RecoveryContext.Provider>
  );
}

export default App;
