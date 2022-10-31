import React, { useEffect, useState, createRef } from 'react';
import { createPopper } from "@popperjs/core";
import icon from '../config/icons';
import { getAvatar } from '../utils/avatar';
import { getUser } from '../utils/authed';
const Dropdown = ({ color }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const [user, setUser] = useState({});
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left"
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  useEffect(() => {
    const items = getUser();
    if (items) {
     setUser(items);
    }
  }, []);

  return (
    <>
      <button
        className="pb-2"
        type="button"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow
            ? closeDropdownPopover()
            : openDropdownPopover();
        }}
      >
        <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-200">{getAvatar(user?.fullname)}</span>
        </div>
        <img className="inline-block w-6" src={icon.arrow_down} alt="" />
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          (color === "white" ? "bg-white " : bgColor + " ") +
          "text-base float-left py-2 list-none text-left rounded shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <a
          href="#jas"
          className={
            "text-sm border-b py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")
          }
        >
          {user?.fullname}
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")
          }
          onClick={e => e.preventDefault()}
        >
          Profile
        </a>
        <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
            (color === "white" ? " text-slate-700" : "text-white")
          }
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default Dropdown;