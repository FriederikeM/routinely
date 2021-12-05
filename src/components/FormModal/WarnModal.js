import "./WarnModal.css";

export default function WarnModal({ onCloseWarnClicked }) {
  return (
    <article className="WarnModal">
      <p>
        Please specify during which time of the day you want to use the product
        on the checked days or remove the check from the day.
      </p>
      <button className="warn-button-okay" onClick={onCloseWarnClicked}>
        Got it!
      </button>
    </article>
  );
}
