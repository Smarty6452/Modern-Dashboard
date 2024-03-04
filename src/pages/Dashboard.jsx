import React, { useState } from "react";
import { CiImport } from "react-icons/ci";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardTab from "../partials/dashboard/DashboardTab";
import { CiPlay1 } from "react-icons/ci";

import DashboardCard01 from "../partials/dashboard/DashboardCard01";

import Banner from "../partials/Banner";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Tab */}
              <DashboardTab />

              {/* Right: Actions For Meeting */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end ">
                <div className="flex items-center">
                  <button className="inline-flex mr-2 items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                    <CiPlay1 className="mr-1" />
                    Meeting
                  </button>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                    <CiImport className="mr-1" />
                    Import
                  </button>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <DashboardCard01 />
            </div>
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;
