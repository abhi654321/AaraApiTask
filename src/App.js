import React from "react";
import MainScreen from "./Components/MainScreen";
import { LoginScreen } from "./Components/LoginScreen";

export default function App() {
  return (
    <div className="bg-[url('./Assets/bg-5.png')] flex items-center justify-end  bg-no-repeat bg-cover h-screen">
      <MainScreen />
      <LoginScreen />
    </div>
  );
}
