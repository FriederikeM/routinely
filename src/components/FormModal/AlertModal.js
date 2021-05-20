import "./AlertModal.css";
import PropTypes from "prop-types";

AlertModal.propTypes = {
  conflictName: PropTypes.string,
  clickedWeekdayName: PropTypes.string,
  clickedTimeOfTheDay: PropTypes.string,
  onProductSwapClicked: PropTypes.func,
  onCancelAlertModal: PropTypes.func,
};

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
        <button className="swap-product" onClick={onProductSwapClicked}>
          swap
        </button>
        <button className="cancel-alert" onClick={onCancelAlertModal}>
          cancel
        </button>
      </div>
    </div>
  );
}
