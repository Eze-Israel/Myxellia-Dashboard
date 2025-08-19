
// "use client";
// import React from 'react'
// import { Button } from "@/components/ui/Button";



// const Header1 = () => {
//   return (
//     <div>
//     <header className="w-full bg-black text-white flex items-center justify-between md:px-[80px] py-4">
//     <a href="#" target="_blank" rel="noopener noreferrer"><h1 className='flex text-2xl p-2 items-center hover:bg-gray-700 rounded-lg'><img src="/images/vector.png"/>myxellia</h1></a>
//      <div className="container flex h-16 items-center gap-3">
//         <div className="ml-auto flex items-center gap-4">
//          <a href="#" target="_blank" rel="noopener noreferrer"> <img src="/images/notifif.png"  className='w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg'/></a>
//          <a href="#" > <img src="/images/calendar.png" className='w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg'/></a>
//           <a href="#" ><img src="/images/bug.png" className='w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg'/></a>
//        <a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/mess.png" className='w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg'/></a>
//         <a href="#" > <img src="/images/Profile.png" className='w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg'/></a>
//         </div>
//       </div>

//     </header>
     
//     </div>
//   )
// }

// export default Header1





"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Header1 = () => {
  const [showBudget, setShowBudget] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown-content") && !target.closest(".icon-btn")) {
        setShowBudget(false);
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <header className="w-full bg-black text-white flex items-center justify-between md:px-[80px] py-4 relative">
        <a href="#" className="flex text-2xl p-2 items-center hover:bg-gray-700 rounded-lg">
          <img src="/images/vector.png" alt="logo" />
          myxellia
        </a>

        <div className="container flex h-16 items-center gap-3">
          <div className="ml-auto flex items-center gap-4">
            {/* Notifications */}
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className="icon-btn">
                    <img src="/images/notifif.png" className="w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg" />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                    Notifications
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>

            {/* Calendar */}
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className="icon-btn" onClick={() => setShowCalendar(!showCalendar)}>
                    <img src="/images/calendar.png" className="w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg" />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                    Calendar
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>

            {/* Budgeting */}
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className="icon-btn" onClick={() => setShowBudget(!showBudget)}>
                    <img src="/images/bug.png" className="w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg" />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                    Budgeting
                    <Tooltip.Arrow className="fill-gray-800" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>

            {/* Messages */}
            <img src="/images/mess.png" className="w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg" />
            <img src="/images/Profile.png" className="w-6.5 h-6.5 hover:bg-gray-400 hover:rounded-lg" />
          </div>
        </div>
      </header>

      {/* ====== Budgeting Modal ====== */}
      <AnimatePresence>
        {showBudget && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="dropdown-content bg-white rounded-lg shadow-xl p-6 max-w-md w-full text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="bg-blue-900 p-6 rounded-lg mb-4 flex justify-center">
                <img src="/images/budget-icon.png" alt="budget-icon" className="w-12 h-12" />
              </div>
              <div className="text-left space-y-3">
                <h2 className="font-bold">Set up annual budgets by account category</h2>
                <p className="text-gray-600 text-sm">
                  Allocate funds across income and expense lines with full visibility.
                </p>
                <h2 className="font-bold">Track actuals vs budget in real time</h2>
                <p className="text-gray-600 text-sm">
                  See how your community is performing against plan, month by month.
                </p>
                <h2 className="font-bold">Adjust figures and forecast with ease</h2>
                <p className="text-gray-600 text-sm">
                  Edit amounts, apply percentage changes, or roll forward last year’s data.
                </p>
              </div>
              <button className="bg-black text-white rounded-full px-6 py-2 mt-6">Create Budget</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====== Calendar Modal ====== */}
      <AnimatePresence>
        {showCalendar && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="dropdown-content bg-white rounded-lg shadow-xl p-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              <Calendar defaultActiveStartDate={new Date(2023, 10, 1)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header1;

