export default function AlertModal({
  conflictName,
  clickedWeekdayName,
  clickedTimeOfTheDay,
  onAddAnywayClicked,
  onCancelAlertModal,
}) {
  return (
    <div className="alert-modal">
      <p className="alert-message">
        You are already using{" "}
        <em>
          {[
            conflictName.slice(0, -1).join(", "),
            conflictName.slice(-1)[0],
          ].join(conflictName.length < 2 ? "" : " and ")}
        </em>{" "}
        on {clickedWeekdayName} {clickedTimeOfTheDay}. These products have
        conflicting ingredients
      </p>
      <div className="alert-modal-finishing-button-wrapper">
        <button className="add-anyway" onClick={onAddAnywayClicked}>
          add anyway
        </button>
        <button className="cancel-alert" onClick={onCancelAlertModal}>
          cancel
        </button>
      </div>
    </div>
  );
}
