"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users2,
  ContactRound,
  KeyRound,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";





function Tip({
  label,
  children,
  align = "center",
}: {
  label: string;
  children: React.ReactNode;
  align?: "center" | "left" | "right";
}) {
  const alignClass =
    align === "left"
      ? "left-0 -translate-x-0"
      : align === "right"
      ? "right-0 translate-x-0"
      : "left-1/2 -translate-x-1/2";

  return (
    <div className="relative group inline-flex">
      {children}
      <div
        className={`pointer-events-none absolute ${alignClass} top-full mt-2 z-50
          whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-[11px] font-medium text-white
          opacity-0 transition-opacity duration-150 group-hover:opacity-100`}
      >
        {label}
        <div className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
      </div>
    </div>
  );
}


const Header1 = () => {
  const [showBudget, setShowBudget] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  //To  Close any open popover on outside click
  useEffect(() => {
    const closeOnOutside = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const clickedPopover =
        el.closest(".dropdown-content") ||
        el.closest(".profile-menu") ||
        el.closest(".icon-btn");
      if (!clickedPopover) {
        setShowBudget(false);
        setShowCalendar(false);
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, []);

  return (
    <div>
      {/* Top bar */}
      <header className="w-full bg-black text-white flex items-center justify-between md:px-[80px] py-4 relative">
        <a
          href="#"
          className="flex text-3xl p-2 items-center rounded-lg"
        >
          <img src="/images/Vector.png" alt="logo" />
          <span className="md:ml-2">myxellia</span>
        </a>

        <div className="container flex h-16 items-center gap-3">
          <div className="ml-auto flex items-center gap-4">
            {/* Notifications */}
            <button className="icon-btn">
              <img
                src="/images/notifif.png"
                className="w-7 h-7 hover:bg-gray-400 hover:rounded-full"
                alt="notifications"
              />
            </button>

            {/* Calendar (tooltip + modal) */}
            <Tip label="Calendar">
              <button
                className="icon-btn"
                onClick={() => {
                  setShowCalendar((s) => !s);
                  setShowBudget(false);
                  setShowProfile(false);
                }}
              >
                <img
                  src="/images/calendar.png"
                  className="w-7 h-7 hover:bg-gray-400 hover:rounded-full"
                  alt="calendar"
                />
              </button>
            </Tip>

            {/* Budgeting (tooltip + modal) */}
            <Tip label="Budgeting">
              <button
                className="icon-btn"
                onClick={() => {
                  setShowBudget((s) => !s);
                  setShowCalendar(false);
                  setShowProfile(false);
                }}
              >
                <img
                  src="/images/bug.png"
                  className="w-7 h-7 hover:bg-gray-400 hover:rounded-full"
                  alt="budgeting"
                />
              </button>
            </Tip>

            {/* Messages */}
            <button className="icon-btn">
              <img
                src="/images/mess.png"
                className="w-7 h-7 hover:bg-gray-400 hover:rounded-full "
                alt="messages"
              />
            </button>

            {/* Profile "D" (dropdown) */}
            <button
              className="icon-btn profile-btn"
              onClick={() => {
                setShowProfile((s) => !s);
                setShowBudget(false);
                setShowCalendar(false);
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full  ring-1 hover:bg-gray-100">
                <span className="text-sm font-semibold">D</span>
              </div>
            </button>
          </div>
        </div>

        {/* Profile Dropdown (top-right) */}
        <AnimatePresence>
          {showProfile && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="profile-menu absolute right-18 top-2/2 z-50"
            >
              <div className="w-[360px] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
                {/* Header */}
                <div className="flex items-center gap-3 px-5 py-4 shadow-lg mb-2 bg-gray-100 m-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-800 text-white font-semibold">
                    D
                  </div>
                  <div>
                    <div className="text-[17px] font-semibold leading-tight text-black mb-1">
                      Dylan Frank
                    </div>
                    <div className="text-xs text-gray-600">
                      dylan96@mail.com
                    </div>
                  </div>
                </div>


                {/* Items */}
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-5 py-5 hover:bg-gray-50"
                    >
                      <Users2 className="h-5 w-5 text-gray-700" />
                      <span className="text-[15px] text-gray-900 font-bold">Teams</span>
                    </a>
                  </li>
                 <div className="h-px bg-gray-200" />

                  <li className="mb-3">
                    <a
                      href="#"
                      className="flex items-center gap-3 px-5 py-5 hover:bg-gray-50"
                    >
                      <ContactRound className="h-5 w-5 text-gray-700" />
                      <span className="text-[15px] text-gray-900 font-bold">
                        Contact Persons
                      </span>
                    </a>
                  </li>
                 <div className="h-px bg-gray-200" />

                  <li className="mb-4">
                    <a
                      href="#"
                      className="flex items-center gap-3 px-5 py-5 hover:bg-gray-50"
                    >
                      <KeyRound className="h-5 w-5 text-gray-700" />
                      <span className="text-[15px] text-gray-900 font-bold">
                        Change password
                      </span>
                    </a>
                  </li>
                 <div className="h-px bg-gray-200" />

                  <li className="mb-4">
                    <a
                      href="#"
                      className="flex items-center gap-3 px-5 py-5 hover:bg-gray-50"
                    >
                      <ShieldCheck className="h-5 w-5 text-gray-700" />
                      <span className="text-[15px] text-gray-900 font-bold">
                        2 - Factor Authentication
                      </span>
                    </a>
                  </li>
                </ul>

                <div className="h-px bg-gray-200" />

                <button className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-gray-50">
                  <LogOut className="h-5 w-5 text-rose-600" />
                  <span className="text-[15px] font-medium text-rose-600 ">
                    Logout
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

        {/*Budgeting Modal Pop  */}

      <AnimatePresence>
        {showBudget && (
          <motion.div
            className="absolute top-2/12 right-0 bottom-0 left-0 z-[60] flex items-center justify-center bg-black/70 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="dropdown-content w-[400px] max-w-[72vw] overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="bg-[#0A2540] px-4 py-6 text-center">
                <div className="bg-gray-900 rounded-lg px-6 py-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl  ring-1 ">
                  <img
                    src="/images/calculator.png"
                    alt="budget"
                    className="object-cover"
                  />
                </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-6 space-y-4 text-sm text-gray-800 ">

                <div  className="flex items-center justify-between gap-3">
                  <div>
                  <img  src="/images/setting.png" className="w-5 h-5"/>
                  </div>
                  <div>
                  <h3 className="font-semibold">
                    Set up annual budgets by account category
                  </h3>
                  <p className="text-gray-600">
                    Allocate funds across income and expense lines with full
                    visibility.
                  </p>
                  </div>
                </div>

                <div  className="flex items-center justify-between gap-3">
                  <div>
                  <img  src="/images/trend.png" className="w-8 h-5"/>
                  </div>
                  <div>
                  <h3 className="font-semibold">
                    Track actuals vs budget in real time
                  </h3>
                  <p className="text-gray-600">
                    See how your community is performing against plan, month by
                    month.
                  </p>
                  </div>
                </div>
                <div  className="flex items-center justify-between gap-3">
                  <div>
                  <img  src="/images/align.png" className="w-8 h-6"/>
                  </div>
                  <div>
                  <h3 className="font-semibold">
                    Adjust figures and forecast with ease
                  </h3>
                  <p className="text-gray-600">
                    Edit amounts, apply percentage changes, or roll forward last
                    year’s data—all in one place.
                  </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90">
                    Create Budget
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*  Calendar Modal  */}
      <AnimatePresence>
        {showCalendar && (
          <motion.div
            className="absolute top-2/12 right-0 bottom-0 left-0 z-[60] flex items-center justify-center bg-black/40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            
          >
            
            <motion.div
              className="dropdown-content overflow-hidden rounded-2xl bg-black p-8 shadow-2xl h-[500px] p-4 rounded-lg "
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {/* November by default (month index 10) */}
              <Calendar defaultActiveStartDate={new Date(2023, 10, 16)}  calendarType="hebrew" className="w-full h-full "/>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header1;
