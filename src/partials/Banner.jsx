import React, { useState } from 'react';
import { FaArchive } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { GrRadialSelected } from "react-icons/gr";
import { MdExpandMore } from "react-icons/md";

function Banner() {

  const [bannerOpen, setBannerOpen] = useState(true);
  const query = new URLSearchParams(location.search);
  const template = query.get('template');
  const liteLink =
    template === 'laravel'
      ? 'https://github.com/cruip/laravel-tailwindcss-admin-dashboard-template'
      : 'https://github.com/cruip/tailwind-dashboard-template';

  return (
    <>
    { bannerOpen && (
      <div className="fixed bottom-4 -right-7 w-full md:bottom-2 md:right-[30rem] md:w-auto z-50">
          <button className="inline-flex items-center px-3 py-2 mr-2  text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                     <GrRadialSelected className="mr-2" />
                     Selected
                   </button>  
                   <button className="inline-flex items-center px-3 py-2 mr-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                     <FaArchive className="mr-2" />
                      Archive
                    </button>
                   <button className="inline-flex items-center px-3 py-2 mr-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                     <MdDeleteOutline className="mr-2" />
                      Delete
                    </button>
                   <button className="inline-flex items-center px-3 py-2 mr-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                   <MdExpandMore className="mr-2" />
                     More
                     
                    </button>
      </div>
    )}
    </>
  );
}

export default Banner;