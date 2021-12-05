import "./AlertModal.css";
import PropTypes from "prop-types";

AlertModal.propTypes = {
  conflictNames: PropTypes.array.isRequired,
  clickedWeekdayName: PropTypes.string.isRequired,
  clickedTimeOfTheDay: PropTypes.string.isRequired,
  onProductSwapClicked: PropTypes.func.isRequired,
  onCancelAlertModal: PropTypes.func.isRequired,
};

export default function AlertModal({
  conflictNames,
  clickedWeekdayName,
  clickedTimeOfTheDay,
  onProductSwapClicked,
  onCancelAlertModal,
}) {
  return (
    <div className="alert-modal">
      <p className="alert-message">
        You are already using{" "}
        <em>
          {[
            conflictNames.slice(0, -1).join(", "),
            conflictNames.slice(-1)[0],
          ].join(conflictNames.length < 2 ? "" : " and ")}
        </em>{" "}
        on {clickedWeekdayName} {clickedTimeOfTheDay}. These products have
        conflicting ingredients. Would you like to swap these products?
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
