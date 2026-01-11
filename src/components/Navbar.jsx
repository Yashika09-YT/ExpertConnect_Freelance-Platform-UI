import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/#how-it-works" },
    { name: "Browse Experts", path: "/experts" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Post a Project", path: "/post-project" },
  ];

  const linkClass = ({ isActive }) =>
    `relative font-medium transition ${
      isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
              Ec
            </div>
            <span className="text-lg font-semibold text-gray-900">
              Expert<span className="text-blue-600">Connect</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-600 rounded" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP AUTH */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/login"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Log In
            </NavLink>

            <NavLink
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Sign Up
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-2 border-t flex flex-col gap-2">
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Log In
              </NavLink>

              <NavLink
                to="/signup"
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
