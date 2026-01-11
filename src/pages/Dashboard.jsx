import { useState } from "react";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import ProjectCard from "../components/ProjectCard";
import MessageCard from "../components/MessageCard";
import NotificationCard from "../components/NotificationCard";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* MOBILE HEADER */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b">
        <h1 className="text-lg font-semibold">Dashboard</h1>

        <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
          ☰
        </button>
      </div>

      <div className="flex">
        {/* SIDEBAR DESKTOP */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* SIDEBAR MOBILE */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div className="w-64 bg-white h-full shadow-lg">
              <Sidebar onClick={() => setSidebarOpen(false)} />
            </div>

            {/* BACKDROP */}
            <div
              className="flex-1 bg-black/40"
              onClick={() => setSidebarOpen(false)}
            />
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4 md:p-6 space-y-6">
          {/* HEADER */}
          <div>
            <h1 className="hidden md:block text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back! Here's what's happening with your projects.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard title="Active Projects" value="3" />
            <StatsCard title="Total Spent" value="$4,850" />
            <StatsCard title="Messages" value="12" />
            <StatsCard title="Avg. Rating" value="4.9 ⭐" />
          </div>

          {/* PROJECTS */}
          <div id="projects" className="bg-white rounded-xl border p-4 md:p-6">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-lg">Active Projects</h2>
              <span className="text-indigo-600 cursor-pointer">View All</span>
            </div>

            <div className="space-y-4">
              <ProjectCard
                title="Statistical Analysis for Clinical Trial"
                expert="Dr. Michael Thompson"
                amount="$1,200"
                progress={65}
                status="In Progress"
              />
              <ProjectCard
                title="Medical Device Regulatory Documentation"
                expert="Dr. Sophie Laurent"
                amount="$2,300"
                progress={40}
                status="In Progress"
              />
              <ProjectCard
                title="Data Science Consulting"
                expert="Dr. Sarah Mitchell"
                amount="$1,350"
                progress={90}
                status="Review"
              />
            </div>
          </div>

          {/* MESSAGES + NOTIFICATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div id="messages" className="bg-white rounded-xl border p-4 md:p-6">
              <h2 className="font-semibold text-lg mb-4">Recent Messages</h2>
              <MessageCard
                name="Dr. Sarah Mitchell"
                msg="I've completed the initial data analysis. Please review..."
                time="2 hours ago"
              />
              <MessageCard
                name="Dr. Michael Thompson"
                msg="The statistical model is ready for your feedback."
                time="5 hours ago"
              />
            </div>

            <div id="notification" className="bg-white rounded-xl border p-4 md:p-6">
              <h2 className="font-semibold text-lg mb-4">Notifications</h2>
              <NotificationCard text="New proposal received for 'Biotech Research Project'" />
              <NotificationCard text="Payment of $1,350 processed successfully" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
