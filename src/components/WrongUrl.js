import { useHistory } from "react-router";
import "./WrongUrl.css";

export default function WrongUrl() {
  const history = useHistory();
  return (
    <div className="WrongUrl">
      <article className="wrong-url-message">
        <div className="wrong-url-text">
          <h3>Ooops, nothing to see here! 👀</h3>
          <p>Check if you typed in the correct URL</p>
        </div>
        <button
          className="wrong-url-history-back-button"
          onClick={() => history.goBack()}
        >
          Go back
        </button>
      </article>
    </div>
  );
}
