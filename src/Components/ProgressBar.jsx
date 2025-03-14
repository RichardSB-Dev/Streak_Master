export const ProgressBar = ({ habitsValue, completedValue }) => {
  const progressValue =
    habitsValue > 0 ? (completedValue / habitsValue) * 100 : 0;

  return (
    <div className="p-2 d-flex flex-column gap-2">
      <h2>Tu app de habitos</h2>
      <span>Sigue tu progreso aqui: </span>
      <div
        className="progress m-2"
        role="progressbar"
        aria-valuenow={progressValue}
        aria-valuemin={50}
        aria-valuemax={100}
      >
        <div className="progress-bar" style={{ width: `${progressValue}%` }}>
          <span>${progressValue} %</span>
        </div>
      </div>
    </div>
  );
};
