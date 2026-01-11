export const filterExperts = (experts, selected) => {
  if (selected.length === 0) return experts;

  return experts.filter(exp =>
    selected.includes(exp.category)
  );
};
