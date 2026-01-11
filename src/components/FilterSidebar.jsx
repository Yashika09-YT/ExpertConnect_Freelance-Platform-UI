const FilterSidebar = ({
  categories = [],
  selected = [],
  setSelected,
  rate = 200,
  setRate,
}) => {
  const toggleCategory = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearAll = () => {
    setSelected([]);
    setRate(200);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full lg:w-64 h-fit">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        {(selected.length > 0 || rate < 200) && (
          <button
            onClick={clearAll}
            className="text-sm text-blue-600 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* CATEGORY FILTER */}
      <h3 className="text-sm font-medium mb-2">Category</h3>

      <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
        {categories.map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(cat)}
              onChange={() => toggleCategory(cat)}
              className="accent-blue-600"
            />
            {cat}
          </label>
        ))}
      </div>

      {/* RATE FILTER */}
      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">
          Hourly Rate: <span className="font-semibold">$0 – ${rate}</span>
        </h3>

        <input
          type="range"
          min="0"
          max="200"
          step="10"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
