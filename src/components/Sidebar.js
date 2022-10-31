import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../config/icons';

export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="flex-col p-6 bg-white font-dm shadow w-60">
        <div className="space-y-6">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">Finmod.id</h1>
            </div>
            <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-6 text-sm">
                  <li className={`rounded-sm font-semibold ${splitLocation[1] === "" ? "bg-blue-200 text-blue-700" : ""}`}>
                      <Link
                          to="/"
                          className="flex items-center p-2 space-x-3 rounded-md"
                      >
                          <img alt="icon-home" src={icon.home} />
                          <span>Beranda</span>
                      </Link>
                  </li>
                  <li className={`rounded-sm font-semibold ${splitLocation[1] === "finance" ? "bg-blue-200 text-blue-700" : ""}`}>
                    <Link
                        to="/finance"
                        className="flex items-center p-2 space-x-3 rounded-md"
                    >
                        <img alt="icon-home" src={icon.finance} />
                        <span>Modul Finance</span>
                    </Link>
                  </li>
                  <li className={`rounded-sm font-semibold ${splitLocation[1] === "marketing" ? "bg-blue-200 text-blue-700" : ""}`}>
                    <Link
                        to="/marketing"
                        className="flex items-center p-2 space-x-3 rounded-md"
                    >
                        <img alt="icon-marketing" src={icon.marketing} />
                        <span>Modul Marketing</span>
                    </Link>
                  </li>
                  <li className={`rounded-sm font-semibold ${splitLocation[1] === "content" ? "bg-blue-200 text-blue-700" : ""}`}>
                    <Link
                        to="/content"
                        className="flex items-center p-2 space-x-3 rounded-md"
                    >
                        <img alt="icon-konten" src={icon.konten} />
                        <span>Modul Konten</span>
                    </Link>
                  </li>
                  <li className={`rounded-sm font-semibold ${splitLocation[1] === "users" ? "bg-blue-200 text-blue-700" : ""}`}>
                    <Link
                        to="/users"
                        className="flex items-center p-2 space-x-3 rounded-md"
                    >
                        <img alt="icon-user" src={icon.users} />
                        <span>Manajemen User</span>
                    </Link>
                  </li>
                  <li className={`rounded-sm font-semibold ${splitLocation[1] === "investor" ? "bg-blue-200 text-blue-700" : ""}`}>
                    <Link
                        to="/investor"
                        className="flex items-center p-2 space-x-3 rounded-md"
                    >
                        <img alt="icon-investor" src={icon.marketing} />
                        <span>Connect Investor</span>
                    </Link>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
