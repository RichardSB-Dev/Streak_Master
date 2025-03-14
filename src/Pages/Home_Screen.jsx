import { useContext } from "react";
import { HabitContext } from "../Context/HabitContext";
import { HabitCard, ProgressBar } from "../Components";
import { Modal } from "./Modal";

export const Home_Screen = () => {
  const context = useContext(HabitContext);

  if (!context) {
    throw new Error("Home_Screen debe estar dentro de un HabitProvider");
  }

  const { habits, dispatch } = context;

  const completedHabits = habits.filter((habit) => habit.done).length;

  const toggleHabitState = (id) => {
    dispatch({ type: "Toggle", payload: id });
  };

  return (
    <div className="d-flex flex-column vh-100 vw-100">
      {/* App Bar */}
      <div className="list-group d-flex justify-content-between align-items-center row-2">
        <h2>Streak Master</h2>
      </div>
      {/* Progress Bar */}
      <ProgressBar
        habitsValue={habits.length}
        completedValue={completedHabits}
      />
      {/* Habit List */}
      <div
        className="list-group d-flex flex-direction-column flex-column flex-grow-1 h-75 m-2"
        style={{ overflow: "scroll" }}
      >
        {habits?.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit.habit}
            state={habit.done}
            id={habit.id}
            onToggle={() => toggleHabitState(habit.id)}
            onDeleteHabit={(id) => dispatch({ type: "Delete", payload: id })}
          />
        ))}
      </div>

      {/* Add Button */}
      <Modal
        onNewHabit={(habit) => dispatch({ type: "Add", payload: habit })}
      />
    </div>
  );
};
