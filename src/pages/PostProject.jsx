import { useState } from "react";
import { FileText, DollarSign, CalendarCheck } from "lucide-react";

const PostProject = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    timeline: "",
    skills: "",
  });

  const [errors, setErrors] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const validate = () => {
    let err = {};

    if (!form.title.trim()) err.title = "Project title is required";
    if (!form.description.trim())
      err.description = "Project description is required";
    else if (form.description.length < 50)
      err.description = "Description must be at least 50 characters";

    if (!form.category) err.category = "Category is required";
    if (!form.budget) err.budget = "Budget selection is required";
    if (!form.timeline) err.timeline = "Timeline is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handlePost = () => {
    if (!validate()) return;
    alert("Project Posted Successfully ✅");
  };

  const handlePreview = () => {
    if (!validate()) return;
    setShowPreview(true);
  };

  const handleClear = () => {
    setForm({
      title: "",
      description: "",
      category: "",
      budget: "",
      timeline: "",
      skills: "",
    });
    setErrors({});
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-indigo-50 to-transparent py-16">
        <h1 className="text-4xl font-bold text-center">Post Your Project</h1>
        <p className="text-center text-gray-600 mt-3">
          Tell us about your project and start receiving proposals from
          qualified experts
        </p>

        {/* Info Cards with Icons */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4">
          {[
            {
              title: "Free to Post",
              desc: "No upfront costs",
              icon: <FileText className="w-7 h-7 text-indigo-600" />,
            },
            {
              title: "Get Quotes",
              desc: "Within 24 hours",
              icon: <DollarSign className="w-7 h-7 text-purple-600" />,
            },
            {
              title: "Hire Fast",
              desc: "Start in days",
              icon: <CalendarCheck className="w-7 h-7 text-green-600" />,
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl border p-6 text-center"
            >
              <div className="flex justify-center mb-3">{c.icon}</div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border p-8 -mt-10">
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="font-medium">Project Title *</label>
            <input
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="e.g., Statistical analysis for clinical trial data"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            {errors.title && (
              <p className="text-red-600 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="font-medium">Project Description *</label>
            <textarea
              rows="5"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Describe your project in detail. Include objectives, requirements, deliverables..."
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <p className="text-sm text-gray-500 mt-1">
              Minimum 50 characters ({form.description.length}/50)
            </p>
            {errors.description && (
              <p className="text-red-600 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="font-medium">Category *</label>
            <select
              className="w-full mt-2 px-4 py-3 border rounded-lg bg-white"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option>Biotechnology</option>
              <option>Software Development</option>
              <option>Data Science</option>
              <option>AI / ML</option>
            </select>
            {errors.category && (
              <p className="text-red-600 text-sm">{errors.category}</p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="font-medium">Budget Range *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              {[
                "Under $500",
                "$500 - $2,000",
                "$2,000 - $5,000",
                "$5,000+",
              ].map((b) => (
                <label
                  key={b}
                  className={`border rounded-xl p-4 cursor-pointer flex gap-3 ${
                    form.budget === b ? "border-indigo-500" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="budget"
                    value={b}
                    checked={form.budget === b}
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                  />
                  <div>
                    <p className="font-medium">{b}</p>
                  </div>
                </label>
              ))}
            </div>
            {errors.budget && (
              <p className="text-red-600 text-sm">{errors.budget}</p>
            )}
          </div>

          {/* Timeline */}
          <div>
            <label className="font-medium">Project Timeline *</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              {["< 1 week", "1-4 weeks", "1-3 months", "3+ months"].map((t) => (
                <label
                  key={t}
                  className={`border rounded-lg p-3 text-center cursor-pointer ${
                    form.timeline === t ? "border-indigo-500" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={t}
                    checked={form.timeline === t}
                    onChange={(e) =>
                      setForm({ ...form, timeline: e.target.value })
                    }
                    className="mr-2"
                  />
                  {t}
                </label>
              ))}
            </div>
            {errors.timeline && (
              <p className="text-red-600 text-sm">{errors.timeline}</p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="font-medium">Required Skills (Optional)</label>
            <input
              className="w-full mt-2 px-4 py-3 border rounded-lg"
              placeholder="e.g., Python, SQL, React"
              value={form.skills}
              onChange={(e) => setForm({ ...form, skills: e.target.value })}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
            <div className="flex gap-4">
              <button
                onClick={handlePreview}
                className="px-4 py-2 rounded-lg border text-indigo-600 hover:bg-indigo-50 font-medium"
              >
                Preview
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100 font-medium"
              >
                Clear
              </button>
            </div>

            <button
              onClick={handlePost}
              className="px-10 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500"
            >
              Post Project
            </button>
          </div>

          <p className="text-xs text-center text-gray-500 mt-4">
            By posting, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-1">Project Preview</h2>
            <p className="text-sm text-gray-500 mb-4">
              Review your project details before posting
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <b>Title:</b> {form.title}
              </p>
              <p>
                <b>Description:</b> {form.description}
              </p>
              <p>
                <b>Category:</b> {form.category}
              </p>
              <p>
                <b>Budget:</b> {form.budget}
              </p>
              <p>
                <b>Timeline:</b> {form.timeline}
              </p>
              <p>
                <b>Skills:</b> {form.skills || "Not specified"}
              </p>
            </div>

            <button
              onClick={() => setShowPreview(false)}
              className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold"
            >
              Looks Good
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostProject;
