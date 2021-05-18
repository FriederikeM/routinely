export default function AlertModal({
  conflictName,
  conflictId,
  clickedWeekdayName,
  clickedTimeOfTheDay,
  onProductSwapClicked,
  onCancelAlertModal,
}) {
  function handleSwapProducts() {
    onProductSwapClicked(conflictId, clickedTimeOfTheDay, clickedWeekdayName);
  }

  return (
    <div className="alert-modal">
      <p className="alert-message">
        You are already using <em>{conflictName}</em> on {clickedWeekdayName}{" "}
        {clickedTimeOfTheDay}. These products have conflicting ingredients.
        Would you like to swap these two products?
      </p>
      <div className="alert-modal-finishing-button-wrapper">
        <button className="add-anyway" onClick={handleSwapProducts}>
          swap products
        </button>
        <button className="cancel-alert" onClick={onCancelAlertModal}>
          cancel
        </button>
      </div>
    </div>
  );
}
