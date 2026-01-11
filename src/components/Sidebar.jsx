const Sidebar = ({ onClick }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // mobile sidebar close
    if (onClick) onClick();
  };

  const menuItem = (label, id) => (
    <button
      key={id}
      onClick={() => scrollToSection(id)}
      className="relative flex items-center w-full px-4 py-3 rounded-lg font-medium transition
                 text-gray-600 hover:bg-slate-100 hover:text-indigo-600"
    >
      <span className="ml-2">{label}</span>
    </button>
  );

  return (
    <div className="w-64 bg-white rounded-xl border p-4 space-y-1">
      {menuItem("Overview", "overview")}
      {menuItem("My Projects", "projects")}
      {menuItem("Messages", "messages")}
      {menuItem("Notifications", "messages")}
      {menuItem("Settings", "settings")}
      {menuItem("Profile", "profile")}
      
    </div>
  );
};

export default Sidebar;
