import React, { useEffect, useState } from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Routes, Route, useNavigation, useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import UserPage from "./UserPage";
import { useDispatch } from "react-redux";
import { setUser } from "./redux";

function MainPage() {
  const [users, setUsers] = useState([
    {
      firstName: "amir",
      lastName: "javani",
      userName: "jaw",
      password: "1234",
      email: "amirjavani@gmail.com",
      phone: "09108511227",
    },
  ]);

  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [uName, setuName] = useState("");
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const dispatch = useDispatch();
  const navigaitor = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("users");

    if (storedUser) {
      setUsers(JSON.parse(storedUser));
    } else localStorage.setItem("users", JSON.stringify(users));
  }, []);

  const login = () => {
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      if (user.userName === username && user.password === password) {
        dispatch(setUser(users[index]));
        navigaitor("/user");
        return;
      }
    }
    console.log("wrong username or password");
  };
  const validation = () => {
    if (uName === "") {
      console.log("empty user name");
      return false;
    }
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      if (user.userName === uName) {
        console.log("user already exist");
        return false;
      }
    }
    return true;
  };
  const signIn = () => {
    if (validation()) {
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          firstName: fName,
          lastName: lName,
          userName: uName,
          password: pass,
          email: email,
          phone: phone,
        },
      ]);
      console.log(users);
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...users,
          {
            firstName: fName,
            lastName: lName,
            userName: uName,
            password: pass,
            email: email,
            phone: phone,
          },
        ])
      );
      dispatch(
        setUser({
          firstName: fName,
          lastName: lName,
          userName: uName,
          password: pass,
          email: email,
          phone: phone,
        })
      );
      navigaitor("/user");
    }
  };
  return (
    <div className=" flex flex-row h-screen  font-regular">
      <div
        className={` fade-in col-4 animate-fade-in text-center flex flex-col px-16 gap-4 my-auto ${
          showLogin ? "" : "hidden"
        }`}>
        <span className="font-boldd fs-1">کندا ایده</span>
        <span className="text-xl "> تجربه مهندسی خلاق</span>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border-b outline-none focus:border-purple-700 duration-300 "
          type="text"
          placeholder="نام کاربری"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border-b outline-none focus:border-purple-700 duration-300 "
          type="password"
          placeholder="کلمه عبور"
          required
        />
        <span className="mr-auto text-xs font-thin">
          آیا نام کاربری یا کلمه ی را فراموش کردید؟
        </span>
        <button
          onClick={() => login()}
          className="text-white bg-purple-700 rounded-full mx-auto p-3 font-bold text-sm hover:bg-purple-800">
          ورود به سامانه
        </button>
        <div className="flex flex-row gap-1 items-center">
          <hr className="w-full" />
          <p className="w-full text-xs">آیا حساب کاربری ندارید؟</p>
          <hr className="w-full" />
        </div>
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="text-white bg-purple-400 rounded-full mx-auto p-3 font-bold text-sm hover:bg-purple-500">
          ساخت حساب کاربری{" "}
        </button>
      </div>
      <div
        className={`fade-in col-4 duration-500 text-center flex flex-col px-16 gap-3 my-auto ${
          showLogin ? "hidden" : ""
        }`}>
        <span className="text-xl font-bold ml-auto">
          {" "}
          ساخت حساب کاربری جدید!
        </span>
        <input
          value={fName}
          onChange={(e) => setfName(e.target.value)}
          className="p-2 border-b outline-none focus:border-purple-700 duration-300 "
          type="text"
          placeholder="نام "
          required
        />
        <input
          value={lName}
          onChange={(e) => setlName(e.target.value)}
          className="p-2 border-b outline-none focus:border-purple-700 duration-300 "
          type="text"
          placeholder="نام خانوادگی "
          required
        />
        <input
          value={uName}
          onChange={(e) => setuName(e.target.value)}
          className="p-2 border-b outline-none focus:border-purple-700 duration-300 "
          type="text"
          placeholder="نام کاربری "
          required
        />
        <input
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          className="p-2 border-b outline-none focus:border-purple-700 duration-300 "
          type="password"
          placeholder="کلمه عبور"
          required
        />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="p-2 border-b outline-none focus:border-purple-700 duration-300 "
          type="text"
          placeholder="ایمیل "
          required
        />
        <input
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          className="font-num p-2 border-b outline-none focus:border-purple-700 duration-300 "
          type="text"
          placeholder="شماره تماس "
          required
        />

        <button
          onClick={() => signIn()}
          className="text-white bg-purple-700 rounded-full mx-auto p-3 font-bold text-sm hover:bg-purple-800">
          ثبت نام!
        </button>

        <div className="flex flex-row gap-1 items-center">
          <hr className="w-full" />
          <p className="w-full text-xs">آیا حساب کاربری دارید؟</p>
          <hr className="w-full" />
        </div>
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="text-white bg-purple-400 rounded-full mx-auto p-3 font-bold text-sm hover:bg-purple-500">
          وارد شوید!{" "}
        </button>
      </div>
      <div className="col-8 h-full bg-purple-600 p-10">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="h-full">
          <SwiperSlide>
            <img src="/1.png" className="h-full w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/2.png" className="h-full w-full" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MainPage;
