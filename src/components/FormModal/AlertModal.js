export default function AlertModal({
  conflictName,
  clickedWeekdayName,
  clickedTimeOfTheDay,
  onProductSwapClicked,
  onCancelAlertModal,
}) {
  return (
    <div className="alert-modal">
      <p className="alert-message">
        You are already using <em>{conflictName}</em> on {clickedWeekdayName}{" "}
        {clickedTimeOfTheDay}. These products have conflicting ingredients.
        Would you like to swap these two products?
      </p>
      <div className="alert-modal-finishing-button-wrapper">
        <button className="add-anyway" onClick={onProductSwapClicked}>
          swap
        </button>
        <button className="cancel-alert" onClick={onCancelAlertModal}>
          cancel
        </button>
      </div>
    </div>
  );
}
