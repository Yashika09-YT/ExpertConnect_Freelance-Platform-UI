import { useNavigate } from "react-router-dom";
import { testimonials } from "../data/testimonials";
import { categories } from "../data/categories";
import FeaturedExperts from "../components/FeaturedExperts";

export default function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (skill) => {
    navigate(`/experts?skill=${encodeURIComponent(skill)}`);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block mb-3 text-sm text-blue-600 font-semibold bg-blue-100 px-4 py-1 rounded-full animate-fade-in">
              #1 Platform for Scientific Freelancers
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
              Hire freelance <span className="text-blue-600">scientists</span> & researchers
            </h1>

            <p className="mt-4 text-gray-600 text-lg max-w-xl animate-fade-in">
              Access PhD-qualified experts for research, product development, and data analysis. On demand.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 animate-fade-in">
              <button
                onClick={() => navigate("/experts")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition transform hover:scale-105 shadow-lg"
              >
                Find Experts
              </button>

              <button
                onClick={() => navigate("/post-project")}
                className="border border-gray-300 hover:border-blue-600 px-7 py-3 rounded-xl font-semibold text-gray-700 hover:text-blue-600 transition transform hover:scale-105"
              >
                Post a Project
              </button>
            </div>

            {/* TRUST STATS */}
            <div className="mt-6 flex flex-wrap gap-6 text-gray-600 font-medium">
              <span>⭐ Trusted by 5,000+ companies</span>
              <span>👨‍🔬 10,000+ experts</span>
              {/* <span>💼 20,000+ projects completed</span> */}
            </div>
          </div>

          <div className="hidden md:block animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
              alt="Scientists"
              className="rounded-2xl shadow-xl max-h-[380px] w-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">How It Works</h2>
          <p className="text-gray-600 mb-12">Three simple steps to connect with expert scientists</p>

          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Post Your Project",
                desc: "Describe your requirements.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                step: 2,
                title: "Review Proposals",
                desc: "Compare expert profiles.",
                color: "bg-purple-100 text-purple-600",
              },
              {
                step: 3,
                title: "Hire & Collaborate",
                desc: "Choose the best expert.",
                color: "bg-green-100 text-green-600",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition transform"
              >
                <div
                  className={`w-12 h-12 mx-auto flex items-center justify-center rounded-xl font-bold text-lg ${item.color}`}
                >
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600">Browse by Category</h2>
            <p className="mt-2 text-gray-600">Find experts across diverse scientific fields</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                onClick={() => handleCategoryClick(cat.skill)}
                className="bg-white rounded-2xl border p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition transform"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl mb-4">
                  {cat.icon}
                </div>
                <h3 className="font-semibold">{cat.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
                <div className="mt-4 flex justify-between text-sm">
                  <span className="text-blue-600 font-medium">{cat.experts}</span>
                  <span className="text-gray-400">View →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EXPERTS */}
      <FeaturedExperts />

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Leading Companies</h2>
            <p className="mt-2 text-gray-600">See what our clients say about ExpertConnect</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition transform"
              >
                <div className="flex gap-1 text-yellow-400 mb-3">★★★★★</div>
                <p className="text-sm text-gray-700">“{t.feedback}”</p>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

