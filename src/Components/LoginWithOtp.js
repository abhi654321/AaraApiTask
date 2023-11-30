import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const LoginWithOtp = () => {
  const [mobileNumber,setMobileNumber] = useState("")
  const [data,setData] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  
  const url =
    "https://b1.bhaaraterp.com/Api_data/user-login-with-otp-api-of-bhaaraterp/";
  const fetchapi = async () => {
    try {
      const response = await Axios.get(url,{params:{mobile: mobileNumber}},{headers: {"Content-Type": "application/json",}})
      .then((response) => {
        setData(response)
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
  console.log(data);
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    fetchapi()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <label className="font-semibold text-lg">Mobile Number</label>
        <input
          placeholder="Enter"
          type="number"
          value={mobileNumber}
          onChange={(e)=>setMobileNumber(e.target.value)}
          className="bg-transparent border-[1.75px] border-slate-400 p-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#6d24ad] rounded-md mt-5 text-white p-2 text-center"
      >
        Send Otp
      </button>
    </form>
  );
};
