import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
  const menuItems = [
    {
      label: 'Products',
      url: '/productos',
    },
    {
      label: 'Locations',
      url: '/ubicaciones',
    },
    {
      label: 'Employees',
      url: '/empleados',
    },
    {
      label: 'Jobs',
      url: '/trabajos',
    },
  ];

  const about = [
    {
      label: 'Porque Nosotros',
      url: '/Porque-Nosotros',
    },
    {
      label: 'Contactanos',
      url: '/contactanos',
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border border-black">
      <div
        className="container mx-auto flex items-center justify-between h-16"
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <NavLink className="text-blue-600" to="/" onClick={''}>
          Logo
        </NavLink>

        <div className="flex space-x-4">
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center text-gray-600 hover:text-black-500">
              <span className="mr-1">Dropdown</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-gray-600"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul
                className="absolute mt-2 py-2 bg-white border border-black w-48"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {menuItems.map((item) => (
                  <li key={item.url} className="w-full">
                    <NavLink
                      className="block px-4 py-2 text-gray-600 hover:text-black-500"
                      to={item.url}
                      onClick={''}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {about.map((item) => (
            <li key={item.url}>
              <NavLink
                className="text-gray-600 hover:text-black-500"
                to={item.url}
                onClick={''}
              > 
                {item.label}
              </NavLink>
            </li>
          ))}
        </div>

        <div>
          <button className="btn btn-primary mr-2">Login</button>
          <button className="btn btn-outline-primary">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;


