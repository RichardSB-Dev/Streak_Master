import { useForm } from "../Hooks/useForm";

export const Modal = ({ onNewHabit }) => {
  const { habit, onInputChange, onResetForm } = useForm({
    habit: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (habit.length <= 1) return;
    const newHabit = {
      id: new Date().getTime(),
      done: false,
      habit: habit,
    };

    onNewHabit(newHabit);
    onResetForm();
  };

  return (
    <div style={{ width: "100%" }} className="d-flex flex-column p-3">
      <h2>Add Habit</h2>
      <hr />
      <form
        onSubmit={onFormSubmit}
        className="d-flex flex-column align-items-center"
      >
        <input
          type="text"
          placeholder="Enter your habit"
          name="habit"
          className="form-control"
          value={habit}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary mt-1 w-100"
          onClick={onFormSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};
