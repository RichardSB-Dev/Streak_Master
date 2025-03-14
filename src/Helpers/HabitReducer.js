export const HabitReducer = (initialValue, action) => {
  switch (action.type) {
    case "Add":
      return [...initialValue, action.payload];
    case "Edit":
      return initialValue;
    case "Delete":
      return initialValue.filter((todo) => todo.id !== action.payload);
    case "Toggle":
      return initialValue.map((habit) =>
        habit.id === action.payload ? { ...habit, done: !habit.done } : habit
      );
    default:
      return initialValue;
  }
};
