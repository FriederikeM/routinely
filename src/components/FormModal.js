import "./FormModal.css";
import Checkbox from "./Checkbox.js";

export default function FormModal({ onCancelAdding }) {
  return (
    <div className="FormModal">
      <article className="modal">
        <form className="routine-info-form">
          <p className="day-question">
            Which days would you like to add this product to?
          </p>
          <div className="mon-thurs">
            <Checkbox name="Monday" />
            <Checkbox name="Tuesday" />
            <Checkbox name="Wednesday" />
            <Checkbox name="Thursday" />
          </div>
          <div className="fri-sun">
            <Checkbox name="Friday" />
            <Checkbox name="Saturday" />
            <Checkbox name="Sunday" />
          </div>
          <div className="date-choice">
            <label htmlFor="date">When did you open this product?</label>
            <input
              type="date"
              id="date"
              name="date"
              className="date-input"
            ></input>
          </div>
          <div className="finish-buttons">
            <button className="quit-modal" onClick={onCancelAdding}>
              cancel
            </button>
            <button type="submit" className="add-product">
              add
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}
