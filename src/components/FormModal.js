import "./FormModal.css";

export default function FormModal() {
  return (
    <div className="FormModal">
      <article className="modal">
        <form className="routine-info-form">
          <p className="day-question">
            Which days would you like to add this product to?
          </p>
          <div className="mon-thurs">
            <div>
              <input type="checkbox" id="Monday" name="Monday" />
              <label htmlFor="Monday">Monday</label>
            </div>
            <div>
              <input type="checkbox" id="Tuesday" name="Tuesday" />
              <label htmlFor="Tuesday">Tuesday</label>
            </div>
            <div>
              <input type="checkbox" id="Wednesday" name="Wednesday" />
              <label htmlFor="Wednesday">Wednesday</label>
            </div>
            <div>
              <input type="checkbox" id="Thursay" name="Thursday" />
              <label htmlFor="Thursday">Thursday</label>
            </div>
          </div>
          <div className="fri-sun">
            <div>
              <input type="checkbox" id="Friday" name="Friday" />
              <label htmlFor="Friday">Friday</label>
            </div>
            <div>
              <input type="checkbox" id="Staurday" name="Staurday" />
              <label htmlFor="Saturday">Staurday</label>
            </div>
            <div>
              <input type="checkbox" id="Sunday" name="Sunday" />
              <label htmlFor="Sunday">Sunday</label>
            </div>
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
            <button className="quit-modal">cancel</button>
            <button type="submit" className="add-product">
              add
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}
