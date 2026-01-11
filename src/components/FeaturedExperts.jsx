import { experts } from "../data/experts";
import { useNavigate } from "react-router-dom";

export default function FeaturedExperts() {
  const navigate = useNavigate();

  // TOP 3 HIGH RATED EXPERTS
  const topExperts = [...experts]
    .sort((a, b) => {
      if (b.rating === a.rating) {
        return b.reviews - a.reviews; // tie breaker
      }
      return b.rating - a.rating;
    })
    .slice(0, 3);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        {/* HEADER */}
        <div className="grid grid-cols-3 items-center mb-12">
          {/* LEFT EMPTY (balance ke liye) */}
          <div />

          {/* CENTER TITLE */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              Featured Experts
            </h2>
            <p className="text-gray-600 mt-2">Our top-rated professionals</p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/experts")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
            >
              View All →
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {topExperts.map((expert) => (
            <div
              key={expert.id}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {" "}
              <img
                src={expert.image}
                alt={expert.name}
                className="w-14 h-14 rounded-full mb-3 object-cover"
              />
              <h4 className="font-semibold">{expert.name}</h4>
              <p className="text-sm text-gray-500 line-clamp-2">
                {expert.title}
              </p>
              <div className="flex justify-between mt-4 text-sm">
                <span>
                  ⭐ {expert.rating} ({expert.reviews})
                </span>
                <span className="text-blue-600 font-semibold">
                  ${expert.rate}/hr
                </span>
              </div>
              <button
                onClick={() => navigate(`/experts/${expert.id}`)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
