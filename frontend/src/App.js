import React, { useState } from "react";
import Login from "./containers/Login";
import Main from "./containers/Main";
import { v4 as uuid_v4 } from "uuid";
import getHero from "./functions/hero/getHero";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginState, setloginState] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(uuid_v4());
  const [checkExists, setCheckExists] = useState(true);
  // console.log(loginState);

  return (
    <div>
      {isLogin ? (
        <Main
          name={name}
          loginState={loginState}
          id={id}
          setIsLogin={setIsLogin}
        />
      ) : (
        <Login
          setIsLogin={setIsLogin}
          loginState={loginState}
          setloginState={setloginState}
          setName={setName}
          id={id}
          checkExists={checkExists}
          setCheckExists={setCheckExists}
        />
      )}
    </div>
  );
};

export default App;
