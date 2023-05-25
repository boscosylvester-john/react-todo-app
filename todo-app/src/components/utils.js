export const isOverdue = (dueDate) => {
  return (
    new Date(dueDate) < new Date() &&
    new Date(dueDate).toDateString() !==
      new Date().toDateString()
  );
};
