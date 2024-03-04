import React, { useState, useEffect, useRef } from 'react';
import { IoFilter } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";

function DashboardTab() {
  const [dropdownOpenProject, setDropdownOpenProject] = useState(false);
  const [dropdownOpenDatabase, setDropdownOpenDatabase] = useState(false);
  const [dropdownOpenTags, setDropdownOpenTags] = useState(false);
  const [dropdownOpenSort, setDropdownOpenSort] = useState(false);
  const [dropdownOpenFilter, setDropdownOpenFilter] = useState(false);

  const projectRef = useRef(null);
  const databaseRef = useRef(null);
  const tagsRef = useRef(null);
  const sortRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        projectRef.current && !projectRef.current.contains(event.target) &&
        databaseRef.current && !databaseRef.current.contains(event.target) &&
        tagsRef.current && !tagsRef.current.contains(event.target) &&
        sortRef.current && !sortRef.current.contains(event.target) &&
        filterRef.current && !filterRef.current.contains(event.target)
      ) {
        setDropdownOpenProject(false);
        setDropdownOpenDatabase(false);
        setDropdownOpenTags(false);
        setDropdownOpenSort(false);
        setDropdownOpenFilter(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdownProject = () => {
    setDropdownOpenProject(!dropdownOpenProject);
  };

  const toggleDropdownDatabase = () => {
    setDropdownOpenDatabase(!dropdownOpenDatabase);
  };

  const toggleDropdownTags = () => {
    setDropdownOpenTags(!dropdownOpenTags);
  };

  const toggleDropdownSort = () => {
    setDropdownOpenSort(!dropdownOpenSort);
  };

  const toggleDropdownFilter = () => {
    setDropdownOpenFilter(!dropdownOpenFilter);
  };

  return (
    <nav className="flex flex-wrap justify-between" aria-label="Breadcrumb">
      <ol className="inline-flex  flex-wrap md:flex-row p items-center mb-4 sm:mb-0">
        <li ref={projectRef}>
          <div className="flex items-center">
            <button
              id="dropdownProject"
              data-dropdown-toggle="dropdown-project"
              className="inline-flex items-center px-3 py-2 mr-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
              onClick={toggleDropdownProject}
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9-10v.4A3.6 3.6 0 0 1 8.4 9H6.61A3.6 3.6 0 0 0 3 12.605M14.458 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
              All Brands
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {dropdownOpenProject && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                {/* Dropdown content for project here */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </div>
        </li>
        <li ref={databaseRef}>
          <div className="flex items-center">
            <button
              id="dropdownDatabase"
              data-dropdown-toggle="dropdown-database"
              className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
              onClick={toggleDropdownDatabase}
            >
              Desk
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {dropdownOpenDatabase && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                {/* Dropdown content for database here */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </div>
        </li>
        <span className="mx-1"></span>
        <li ref={tagsRef}>
          <div className="flex items-center">
            <button
              id="dropdownTags"
              data-dropdown-toggle="dropdown-tags"
              className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
              onClick={toggleDropdownTags}
            >
              Tags
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {dropdownOpenTags && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                {/* Dropdown content for tags here */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </div>
        </li>
        <span className="mx-1"></span>
        <li ref={sortRef}>
          <div className="flex items-center">
            <button
              id="dropdownSort"
              data-dropdown-toggle="dropdown-sort"
              className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
              onClick={toggleDropdownSort}
            >
                 <FaSortAmountDown className="mr-2" />
              Sort
           
            </button>
            {dropdownOpenSort && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                {/* Dropdown content for sort here */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </div>
        </li>
        <span className="mx-1"></span>
        <li ref={filterRef}>
          <div className="flex items-center">
            <button
              id="dropdownFilter"
              data-dropdown-toggle="dropdown-filter"
              className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-gray-100 border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
              onClick={toggleDropdownFilter}
            >
              <IoFilter className="mr-2" />
              Filter
              
            </button>
            {dropdownOpenFilter && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                {/* Dropdown content for filter here */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </div>
        </li>
   

      </ol>
    </nav>
  );
}

export default DashboardTab;
