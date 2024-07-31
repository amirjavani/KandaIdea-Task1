import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function UserPage() {
  const data = useSelector((state) => state.data);
  const nav = useNavigate();

  return (
    <div className="flex flex-row">
      <div className="col-1 flex flex-col justify-between">
        <img
          src="https://avatar.iran.liara.run/public/boy"
          className="col-10 mx-auto mt-6"
          alt="avatar"
        />
        <img
          onClick={() => nav(-1)}
          src="box-arrow-right.svg"
          className="col-6 p-2 mx-auto mb-6 hover:bg-slate-300 active:bg-slate-400"
          alt=""></img>
      </div>
      {data && (
        <div className="col-11 bg-purple-700 h-screen flex flex-col gap-4 p-10 text-white">
          <div className=" text-2xl"> اطلاعات کاربری</div>
          <div className=" text-lg"> نام :{data.firstName}</div>
          <div className=" text-lg"> نام خانوادگی :{data.lastName}</div>
          <div className=" text-lg"> نام کاربری :{data.userName}</div>
          <div className=" text-lg"> ایمیل :{data.email}</div>
          <div className="font-num text-lg"> شماره تماس :{data.phone}</div>
        </div>
      )}
    </div>
  );
}

export default UserPage;
