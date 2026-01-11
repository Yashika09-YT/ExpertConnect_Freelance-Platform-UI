import { useParams } from "react-router-dom";
import { experts } from "../data/experts";

export default function ExpertProfile() {
  const { id } = useParams();
  const expert = experts.find((e) => e.id === id);

  if (!expert) {
    return <div className="p-10 text-center">Expert not found</div>;
  }

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT MAIN CONTENT */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-8">
          {/* HEADER */}
          <div className="flex items-start gap-6">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-24 h-24 rounded-full object-cover"
            />

            <div>
              <h1 className="text-2xl font-bold">{expert.name}</h1>
              <p className="text-gray-600">{expert.title}</p>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-yellow-500 font-semibold">
                  ⭐ {expert.rating}
                </span>
                <span className="text-gray-400 text-sm">
                  ({expert.reviews} reviews)
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1">📍 {expert.location}</p>
            </div>
          </div>

          <hr className="my-6" />

          {/* ABOUT */}
          <div>
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-gray-700 leading-relaxed">{expert.fullBio}</p>
          </div>

          {/* SKILLS */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {expert.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Experience</h2>
            <ul className="space-y-3 text-gray-700 text-sm">
              {expert.experience.map((exp, index) => (
                <li key={index} className="border-l-2 border-blue-500 pl-4">
                  <p className="font-semibold">{exp.role}</p>
                  <p className="text-gray-500">{exp.company}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* REVIEWS */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Client Reviews</h2>

            <div className="space-y-4">
              {expert.clientReviews.map((review, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <p className="text-gray-700">"{review.feedback}"</p>
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>{review.client}</span>
                    <span>⭐ {review.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-6">
          <p className="text-sm text-gray-500">Hourly Rate</p>
          <p className="text-3xl font-bold text-blue-600 mt-1">
            ${expert.rate}/hr
          </p>

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Hire Expert
          </button>

          <button className="w-full mt-3 border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">
            Message
          </button>

          <hr className="my-6" />

          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {expert.availability}
            </p>
            <p>
              <span className="font-semibold">Response Time:</span>{" "}
              {expert.responseTime}
            </p>
            <p>
              <span className="font-semibold">Languages:</span>{" "}
              {expert.languages.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
