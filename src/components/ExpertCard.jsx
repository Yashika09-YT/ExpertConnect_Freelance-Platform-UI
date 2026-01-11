import { Link } from "react-router-dom";

export default function ExpertCard({ expert }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img src={expert.image} className="w-full h-48 object-cover rounded" />
      <h3 className="font-bold mt-2">{expert.name}</h3>
      <p className="text-sm text-gray-600">{expert.title}</p>
      <p className="text-yellow-500">⭐ {expert.rating}</p>
      <p className="text-sm mt-1">{expert.skills.join(", ")}</p>
      <Link
        to={`/experts/${expert.id}`}
        className="block mt-3 text-center bg-blue-600 text-white py-2 rounded"
      >
        View Profile
      </Link>
    </div>
  );
}
