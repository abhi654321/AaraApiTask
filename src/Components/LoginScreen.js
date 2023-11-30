import React, { useState } from "react";
import bg from "../Assets/logo.png";
import { Switch } from "antd";
import { LoginWithPassword } from "./LoginWithPassword";
import { LoginWithOtp } from "./LoginWithOtp";

export const LoginScreen = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (e, permission) => {
    setChecked(!e);
    console.log(`switch`, e);
  };

  return (
    <div className="border-[1px] mr-14 my-10 w-[500px] px-10 rounded">
      <div className="mx-20 my-5">
        <img src={bg} width={300} />
      </div>

      <div className="text-center font-bold text-2xl">
        Login With{" "}
        <span >
          <Switch size="large"
            style={{
              backgroundColor: checked ? "#6d24ad" : "green",
              width:120
            }}
            checkedChildren="OTP"
            unCheckedChildren="Password"
            defaultChecked
            onChange={onChange}
          />
        </span>
      </div>

      <div className="mx-5 my-10">
        {checked == true ? <LoginWithPassword /> : <LoginWithOtp />}
      </div>

      <div className="flex items-center justify-between mx-5 my-8">
        <button
          type="submit"
          className="bg-[#6d24ad] p-2  text-sm text-white rounded"
        >
          Sign Up
        </button>
        <a href="#" className="underline text-lg">
          Forget Password
        </a>
      </div>
    </div>
  );
};
