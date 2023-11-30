import React, { useState } from "react";
import { toast } from "react-toastify";
import  Axios  from "axios";

export const LoginWithPassword = () => {

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
  const url =
    "https://b1.bhaaraterp.com/Api_data/user-login-with-password-api-of-bhaaraterp/";

  const userData = {
      username: data.username,
      password: data.password
    };

  const fetchapi = async () => {
    try {
      const response = await Axios.post(url,userData)
      .then((response) => {
        console.log(response)
      })
      if(response.data.response_code===200){
        toast.success(response.data.message)
      } else {
          toast.error(response.data.message)
      }
    } catch (error) {
      toast("Something went wrong!!!")
    }
  };
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    fetchapi()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <div className="flex flex-col gap-3 my-3">
          <label className="font-semibold">Email Or Mobile Number</label>
          <input
            placeholder="mkx@aaratechnologies.in"
            type="text"
            className="bg-transparent border-[1.75px] border-slate-400 p-2 rounded-md"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 my-7">
          <label className="font-semibold">Password</label>
          <input
            placeholder="******"
            type="password"
            className="bg-transparent  border-[1.75px] border-slate-400 p-2 rounded-md"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="w-full bg-[#6d24ad] rounded-md my-5 text-white p-2 text-center">
          <button type="submit">Login Now</button>
        </div>
      </form>
    </div>
  );
};
