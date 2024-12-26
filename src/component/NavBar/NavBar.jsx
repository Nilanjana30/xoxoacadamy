import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "#Purpose", label: "Purpose" },
    { href: "#Team", label: "Team" },
    { href: "#Team", label: "Team" },
    { href: "#Privacy", label: "Privacy" },
  ];

  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Replace 'Logo' with your logo */}

              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
