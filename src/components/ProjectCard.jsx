import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, expert, amount, progress, status }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/dashboard/projects")}
      className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition"
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">with {expert}</p>
        </div>
        <p className="font-semibold">{amount}</p>
      </div>

      <div className="flex items-center gap-3 mt-3">
        <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">
          {status}
        </span>
        <span className="text-sm text-gray-500">{progress}%</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
