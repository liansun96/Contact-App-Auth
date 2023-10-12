import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./GoogleApp.css";

const GoogleApps = ({ showApp, randomColor, user }) => {
  return (
    <div
      className={
        showApp
          ? "opacity-100 visible z-10 duration-300 origin-left absolute cus-shadow-lg right-[15px] top-[60px] bg-white w-[322px] h-[400px] font-robo cus-shadow-lg p-5 rounded-lg overflow-y-scroll scroll-smooth"
          : "opacity-0 invisible translate-y-3 z-10 duration-300 origin-left absolute cus-shadow-lg right-[15px] top-[60px] bg-white w-[322px] h-[400px] font-robo cus-shadow-lg p-5 rounded-lg overflow-y-scroll scroll-smooth"
      }
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col">
          <div
            style={{ backgroundColor: randomColor }}
            className="w-[50px] h-[50px]  hover:ring-primary-100 select-none cursor-pointer flex justify-center items-center rounded-full"
          >
            <span className="text-xl text-white">
              {user?.name.charAt().toUpperCase()}
            </span>
          </div>
          <h4>Account</h4>
        </div>

        <Link to={"https://www.google.com/?authuser=0"} target="_blank">
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <FcGoogle className="w-[40px] h-[40px]" />
            <h4>Search</h4>
          </div>
        </Link>
        <Link to={"https://www.google.com/maps"} target="_blank">
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Map</h4>
          </div>
        </Link>
        <Link to={"https://play.google.com/store/games?pli=1"} target="_blank">
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Play_logo-2022.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Play</h4>
          </div>
        </Link>
        <Link
          to={"https://news.google.com/home?hl=en-US&gl=US&ceid=US:en"}
          target="_blank"
        >
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_News_icon.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>News</h4>
          </div>
        </Link>
        <Link to={"https://www.google.com/gmail/about/"} target="_blank">
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Gmail</h4>
          </div>
        </Link>
        <Link
          to={
            "https://www.google.com/search?q=google+translate&rlz=1C1YTUH_enSG1012SG1012&oq=&aqs=chrome.1.69i57j69i59j35i39i650j0i20i263i512j69i65j69i60l3.4407j0j9&sourceid=chrome&ie=UTF-8"
          }
          target="_blank"
        >
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Translate</h4>
          </div>
        </Link>
        <Link
          to={"https://calendar.google.com/calendar/u/0/r?pli=1"}
          target="_blank"
        >
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Calender</h4>
          </div>
        </Link>
        <Link to={"https://contacts.google.com/"} target="_blank">
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Google_Contacts_icon_%282022%29.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Contacts</h4>
          </div>
        </Link>
        <Link to={"https://meet.google.com/?pli=1"} target="_blank">
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Meet</h4>
          </div>
        </Link>
        <Link
          to={"https://mail.google.com/chat/u/0/#chat/welcome"}
          target="_blank"
        >
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/Google_Chat_icon_%282020%29.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Chat</h4>
          </div>
        </Link>
        <Link to={"https://www.google.com/drive/"} target="_blank">
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Drive</h4>
          </div>
        </Link>
        <Link to={"https://www.google.com/photos/about/"} target="_blank">
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Google_Photos_icon_%282015-2020%29.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Photos</h4>
          </div>
        </Link>
        <Link
          to={"https://myadcenter.google.com/?ref=app-launcher"}
          target="_blank"
        >
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fd/My_Ad_Center_logo.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Photos</h4>
          </div>
        </Link>
        <Link
          to={"https://www.google.com/shopping?source=og&authuser=0"}
          target="_blank"
        >
          <div className="flex flex-col w-[80px] h-[85px] hover:bg-blue-100 justify-center items-center gap-1 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Google_Shopping.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h4>Photos</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default GoogleApps;
