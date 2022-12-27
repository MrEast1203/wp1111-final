import React, { useState } from "react";
import Login from "./containers/Login";
import Main from "./containers/Main";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return <div>{isLogin ? <Main /> : <Login setIsLogin={setIsLogin} />}</div>;
};

export default App;
