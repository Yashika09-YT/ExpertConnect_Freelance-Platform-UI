import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { experts } from "../data/experts";
import FilterSidebar from "../components/FilterSidebar";

const skillCategories = [
  "Molecular Biology",
  "CRISPR",
  "Genomics",
  "Statistics",
  "Python",
  "R",
  "Food Science",
  "Formulation",
  "FDA Regulations",
  "Medical Writing",
  "Scientific Editing",
  "Chemical Engineering",
  "Process Optimization",
];

export default function Experts() {
  const navigate = useNavigate();

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [rate, setRate] = useState(200);

  const [searchParams] = useSearchParams();
  const skillFromURL = searchParams.get("skill");

  useEffect(() => {
    if (skillFromURL) {
      setSelectedSkills([skillFromURL]);
    }
  }, [skillFromURL]);

  const filteredExperts = experts.filter((expert) => {
    const skillMatch =
      selectedSkills.length === 0 ||
      selectedSkills.every((skill) => expert.skills.includes(skill));

    const rateMatch = expert.rate <= rate;

    return skillMatch && rateMatch;
  });

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* FILTER SIDEBAR */}
        <FilterSidebar
          categories={skillCategories}
          selected={selectedSkills}
          setSelected={setSelectedSkills}
          rate={rate}
          setRate={setRate}
        />

        {/* EXPERT LIST */}
        <div className="lg:col-span-3">
          <h1 className="text-2xl font-bold mb-6">Browse Experts</h1>

          {filteredExperts.length === 0 && (
            <p className="text-gray-500">
              No experts found for selected filters.
            </p>
          )}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredExperts.map((expert) => (
              <div
                key={expert.id}
                onClick={() => navigate(`/experts/${expert.id}`)}
                className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-14 h-14 rounded-full mb-3 object-cover"
                />

                <h4 className="font-semibold">{expert.name}</h4>
                <p className="text-sm text-gray-500">{expert.title}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-600 font-semibold">
                    ${expert.rate}/hr
                  </span>
                  <span className="text-yellow-500 text-sm">
                    ⭐ {expert.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
