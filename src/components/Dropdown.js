import React from 'react'
import { createPopper } from "@popperjs/core";
import icon from '../config/icons';

const Dropdown = ({ color }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
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
    window.location.href = "/login";
  }
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
        <img className="mr-2 inline-block h-10 w-10 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
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