export const HabitCard = ({ habit, state, onToggle, id, onDeleteHabit }) => {
  return (
    <div
      className="m-2 list-group-item d-flex align-self-center justify-content-between p-2"
      style={{ width: "100%" }}
    >
      <input
        type="checkbox"
        checked={state}
        onChange={onToggle}
        style={{ width: "30px", height: "30px" }}
      />
      <span className="align-self-center">{habit}</span>
      <button onClick={() => onDeleteHabit(id)}>
        <img
          style={{ width: "25px", height: "25px" }}
          src="../../public/icons/trash.png"
          alt="edit"
        />
      </button>
    </div>
  );
};
